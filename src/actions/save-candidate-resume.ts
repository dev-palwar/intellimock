import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase-client";

type UploadResult =
  | { url: string; error?: undefined }
  | { error: string; url?: undefined };

export async function uploadResume(file: File): Promise<UploadResult> {
  return new Promise((resolve) => {
    if (!file) {
      resolve({ error: "File kahan hai?" });
      return;
    }

    const storageRef = ref(storage, `resumes/${file.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log(`Upload is ${progress}% done`);
      },
      (error) => {
        console.error("Upload error:", error);
        resolve({ error: "Upload failed" });
      },
      async () => {
        try {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          // console.log("File available at", downloadURL);
          resolve({ url: downloadURL });
        } catch (error) {
          console.error("Error getting download URL:", error);
          resolve({ error: "Failed to get download URL" });
        }
      }
    );
  });
}
