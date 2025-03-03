"use server";
import * as pdfjsLib from "pdfjs-dist";
import fs from "fs/promises";

// Set worker source to local file
pdfjsLib.GlobalWorkerOptions.workerSrc = "/pdf.worker.js";

export const extract = async () => {
  try {
    // Read PDF file
    const pdfBuffer = await fs.readFile("public/dev's-resume-updated.pdf");

    // Convert Buffer to Uint8Array
    const uint8Array = new Uint8Array(pdfBuffer);

    // Load PDF
    const pdf = await pdfjsLib.getDocument({ data: uint8Array }).promise;

    let extractedText = "";

    // Extract text from each page
    for (let i = 1; i <= pdf.numPages; i++) {
      const page = await pdf.getPage(i);
      const textContent = await page.getTextContent();
      extractedText += textContent.items.map((item: any) => item.str).join(" ");
    }

    console.log("Extracted text:", extractedText);
    return { success: true, text: extractedText };
  } catch (error) {
    console.error("Error:", error);
    return { success: false, error: "Failed to extract text" };
  }
};
