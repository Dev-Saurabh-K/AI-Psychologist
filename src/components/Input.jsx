import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import { useState, useEffect, useRef } from "react";
import io from "socket.io-client";

const url =
  window.location.hostname === "localhost"
    ? "http://localhost:3001"
    : "https://ai-psychologist-server.onrender.com";

const socket = io(url);

const ChatApp = () => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const chatEndRef = useRef(null);

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessages((prev) => [
        ...prev,
        { text: data.text, sender: "user" },
        { text: data.reply, sender: "ai" },
      ]);
    });

    return () => socket.off("receive_message");
  }, []);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    if (message.trim() === "") return;
    socket.emit("send_message", message);
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="flex flex-col h-screen w-screen font-mono bg-linear-to-r from-[#000000ea] to-[#00000000] ">
      {/* Header */}
      <div className="p-2 bg-[#e22d0000] rounded-xs text-center font-mono font-semibold text-[rgba(221,208,208)] text-2xl shadow ">
        AI Psychologist
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3 ">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`p-3 rounded-xl max-w-md wrap-break-word ${
              msg.sender === "user"
                ? "bg-[rgba(221,208,208)] text-[rgba(226,45,0,0.7)] ml-auto hover:bg-amber-50 "
                : "bg-[rgba(226,45,0,0.7)] text-[rgba(221,208,208)] mr-auto hover:bg-amber-500"
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>

      {/* Input */}
      <div className="p-2 bg-[rgba(221,208,208)] text-[rgba(226,45,0,1)] flex items-center gap-2 rounded-2xl">
        <input

          autoFocus
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message..."
          className="flex-1 p-3 text-[rgba(226,45,0,1)] bg-[rgba(221,208,208)] rounded-lg outline-none text-2xl"
          autoComplete="off"
          
        />
          <div onClick={sendMessage} className="h-12 mt-auto text-2xl cursor-pointer"><SendIcon fontSize="large"/></div>
      </div>
    </div>
  );
};

export default ChatApp;
