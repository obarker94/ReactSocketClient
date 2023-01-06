import React from "react";
import { ChatBoxInput } from "../ChatBoxInput/ChatBoxInput";
import { ChatMessage } from "../ChatMessage/ChatMessage";

export const ChatBox = () => {
  return (
    <div className="grid w-full place-items-center">
      <div className="relative w-1/2 rounded-lg bg-white/90 shadow-lg">
        <div className="max-h-[480px] min-h-[480px] w-full overflow-y-auto py-4">
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
        </div>
        <ChatBoxInput />
      </div>
    </div>
  );
};
