// client/src/App.js

import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import dayjs from "dayjs";

const RobotCon = {
  robot1: {
    ip: "192.168.1.106",
    online: false,
    latency: {
      time: 0,
      latency: 0,
    },
  },
};

const socket = io(`http://${RobotCon.robot1.ip}:3001`);

function App() {
  const [image, setImage] = useState("");
  const [connected, setConnected] = useState(false);
  const [count, setCount] = useState(0);
  const [robotData, setRobotData] = useState({});

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

    socket.on("configData", (config) => {
      console.log(config);
    });

    socket.on("latency_robot1", (latency) => {
      // console.log(latency);
      // RobotCon.robot1.latency.latency = latency.latency;
      // RobotCon.robot1.latency.time = new Date().getTime();
      RobotCon.robot1.latency.time = latency.time;
      RobotCon.robot1.online = true;
    });

    socket.emit("reactGetJSON", "1");

    socket.on("frompythonJson", (data) => {
      console.log(data);
    });

    socket.on("robotData", (data) => {
      setRobotData(data);
    });

    socket.on("stream", (data) => {
      // console.log(2);
      const imageData = `data:image/jpeg;base64,${data}`;
      setImage(imageData);
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      socket.emit("react", new Date().getTime());
    }, 100);

    return () => clearInterval(interval);
  }, [count]);

  const onChangeData = (robot, data) => {
    // console.log(robot, data);
    socket.emit("LH", data);
  };

  return (
    <div className="App ">
      <Home
        robot1={image}
        robot1data={robotData}
        RobotCon={RobotCon}
        onChange={onChangeData}
      />
    </div>
  );
}

export default App;
