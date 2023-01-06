import React from "react";

interface IChatMessage {
  text: string;
}

export const ChatMessage = ({ text }: IChatMessage) => {
  return (
    <div className="flex gap-2 px-8 py-2">
      <div className="font-semibold text-black">Name:&nbsp;</div>
      <div className="font-light text-black">{text}</div>
    </div>
  );
};
