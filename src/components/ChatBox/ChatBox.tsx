import React from "react";
import { ChatBoxInput } from "../ChatBoxInput/ChatBoxInput";
import { ChatMessage } from "../ChatMessage/ChatMessage";

export const ChatBox = () => {
  return (
    <div className="grid w-full place-items-center">
      <div className="relative min-h-[640px] w-1/2 rounded-lg bg-white/90 shadow-lg">
        <ChatMessage />
        <ChatBoxInput />
      </div>
    </div>
  );
};
