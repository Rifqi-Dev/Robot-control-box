// client/src/App.js

import React, { useEffect, useState } from "react";
import io from "socket.io-client";

const socket = io("http://localhost:3001");

function App() {
  const [image, setImage] = useState("");
  const [connected, setConnected] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => {
    socket.on("connect", () => {
      setConnected(true);
      socket.emit("tes", "bisa");
    });
    // Listen for incoming video frames

    socket.on("reactReply", (data) => {
      console.log(data);
      const imageData = `data:image/jpeg;base64,${data}`;
      setImage(imageData);
    });

    socket.on("stream", (data) => {
      console.log(2);
      const imageData = `data:image/jpeg;base64,${data}`;
      setImage(imageData);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      socket.emit("react", "123");
      setCount(() => {
        return count + 1;
      });
    }, 1);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <div className="App">
      <h1>tes kirim kamera</h1>
      {image && <img src={image} alt="Video Stream" />}
    </div>
  );
}

export default App;
