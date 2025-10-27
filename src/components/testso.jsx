import { useState, useEffect } from "react";
import io from "socket.io-client";

const socket = io("link"); // connect to backend

function App() {
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  // listen for messages
  useEffect(() => {
    socket.on("receive_message", (data) => {
      setChat((prev) => [...prev, data]);
    });

    return () => socket.off("receive_message");
  }, []);

  // send message
  const sendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;
    socket.emit("send_message", message);
    setMessage("");
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Simple Chat</h2>

      <div
        style={{
          border: "1px solid gray",
          height: "300px",
          overflowY: "auto",
          padding: "10px",
        }}
      >
        {chat.map((msg, i) => (
          <p key={i}>{msg}</p>
        ))}
      </div>

      <form onSubmit={sendMessage}>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default App;
