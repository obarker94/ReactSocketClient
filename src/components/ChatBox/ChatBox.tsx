import React, { useCallback, useEffect, useState } from "react";
import useWebSocket, { ReadyState } from "react-use-websocket";
import { isContext } from "vm";
import { ChatBoxInput } from "../ChatBoxInput/ChatBoxInput";
import { ChatMessage } from "../ChatMessage/ChatMessage";

export const ChatBox = () => {
  const [socketUrl, setSocketUrl] = useState(
    "wss://socketsbay.com/wss/v2/1/demo/"
  );

  const [messageHistory, setMessageHistory] = useState<any>([]);
  const [chatInput, setChatInput] = useState("");

  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory([...messageHistory, lastMessage.data]);
    }
  }, [lastMessage, setMessageHistory]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: "Connecting",
    [ReadyState.OPEN]: "Open",
    [ReadyState.CLOSING]: "Closing",
    [ReadyState.CLOSED]: "Closed",
    [ReadyState.UNINSTANTIATED]: "Uninstantiated",
  }[readyState];

  const submitMessage = () => {
    sendMessage(chatInput);
    setMessageHistory([...messageHistory, chatInput]);
    setChatInput("");
  };

  return (
    <div className="grid w-full place-items-center">
      <div className="relative w-1/2 rounded-lg bg-white/90 shadow-lg">
        <div className="max-h-[480px] min-h-[480px] w-full overflow-y-auto py-4">
          {messageHistory.map((message: any, index: number) => (
            <ChatMessage key={index} text={message} />
          ))}
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
