// client/src/App.js

import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";

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
      // console.log(data);
      const imageData = `data:image/jpeg;base64,${data}`;
      setImage(imageData);
    });

    socket.emit("reactGetJSON", "1");

    socket.on("frompythonJson", (data) => {
      console.log(data);
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
    }, 50);

    return () => clearInterval(interval);
  }, [count]);

  const onChangeData = (robot, data) => {
    console.log(robot, data);
  };

  return (
    <div className="App ">
      <Home robot1={image} onChange={onChangeData} />
    </div>
  );
}

export default App;
