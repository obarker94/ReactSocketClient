import React from "react";

interface ChatBoxInputProps {
  setInput: React.Dispatch<React.SetStateAction<string>>;
  chatInput: string;
  submitMessage: () => void;
}

export const ChatBoxInput = ({
  setInput,
  chatInput,
  submitMessage,
}: ChatBoxInputProps) => {
  return (
    <div className=" grid w-full grid-cols-12 rounded-b-md border-t-4 border-[#2e026d] bg-[#2e026d] p-8">
      <div className="col-span-12 grid">
        <input
          type="text"
          className="w-full rounded-full bg-white/10 p-4 text-white"
          placeholder="Enter a message..."
          value={chatInput}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              submitMessage();
            }
          }}
        />
      </div>
    </div>
  );
};
