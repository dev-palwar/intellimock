"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sanitizeText } from "@/lib/util-functions";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import aiImage from "../../../assets/technical-support.png";

interface Message {
  content: string;
  isAI: boolean;
}

const page = () => {
  const { data: loggedInUser } = useSession();
  const { chatId } = useParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    if (!chatId) return;

    const socket = io(process.env.NEXT_PUBLIC_BACKEND_API);
    socket.emit("join-chat", chatId);

    socket.on("ai-message", (message: string) => {
      console.log(message);

      setMessages((prev) => [...prev, { content: message, isAI: true }]);
    });

    return () => {
      socket.disconnect();
    };
  }, [chatId]);

  const sendMessage = () => {
    if (!input.trim() || !chatId) return;

    const socket = io(process.env.NEXT_PUBLIC_BACKEND_API);
    socket.emit("user-message", { chatId, message: input });
    setMessages((prev) => [...prev, { content: input, isAI: false }]);
    setInput("");
  };

  return (
    <div className="max-w-2xl mx-auto p-4 h-[87vh] flex flex-col">
      <div className="rounded-lg p-4 mb-4 overflow-y-auto flex-1">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex items-start gap-4 mb-4 ${
              msg.isAI ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <Image
              src={msg.isAI ? aiImage : (loggedInUser?.user.image as string)}
              height={40}
              width={40}
              alt="user"
              className="rounded-full"
            />

            <div
              className={`p-2 rounded max-w-[75%] ${
                msg.isAI ? "bg-gray-100" : "bg-blue-100"
              }`}
            >
              <p
                dangerouslySetInnerHTML={{
                  __html: sanitizeText(msg.content.replace(/\n/g, "<br />")),
                }}
              />
            </div>
          </div>
        ))}
        {/* This div ensures scrolling to the latest message */}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Box */}
      <div className="flex gap-2 items-center">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && sendMessage()}
          className="flex-1 border rounded p-[20px]"
          placeholder="Type your response..."
        />
        <Button
          onClick={sendMessage}
          className="text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Send
        </Button>
      </div>
    </div>
  );
};

export default page;
