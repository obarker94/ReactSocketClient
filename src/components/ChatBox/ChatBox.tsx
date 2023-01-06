import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import { ChatBoxInput } from "../ChatBoxInput/ChatBoxInput";
import { ChatMessage } from "../ChatMessage/ChatMessage";

const socket = io("ws://127.0.0.1:8080", {
  transports: ["websocket"],
  path: "/ws",
  reconnectionDelay: 500,
  // auth: {
  //   token: "123"
  // },
});

export const ChatBox = () => {
  const [chatInput, setChatInput] = useState("");

  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastMessage, setLastMessage] = useState([]);

  useEffect(() => {
    socket.on(`connnect`, () => {
      setIsConnected(true);
    });

    socket.on(`disconnect`, () => {
      setIsConnected(false);
    });

    socket.on(`message`, (message) => {
      setLastMessage(message);
    });

    return () => {
      socket.off(`connect`);
      socket.off(`disconnect`);
      socket.off(`message`);
    };
  }, []);

  const submitMessage = () => {
    setChatInput("");
    socket.emit("message", chatInput);
  };

  return (
    <div className="grid w-full place-items-center">
      <div className="relative w-1/2 rounded-lg bg-white/90 shadow-lg">
        <div className="max-h-[480px] min-h-[480px] w-full overflow-y-auto py-4">
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
        </div>
        <ChatBoxInput
          setInput={setChatInput}
          chatInput={chatInput}
          submitMessage={submitMessage}
        />
      </div>
    </div>
  );
};
