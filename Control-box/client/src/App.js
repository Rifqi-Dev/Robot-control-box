// client/src/App.js

import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Homepage";
import dayjs from "dayjs";
import RobotService from "./services/socket.service";

const robot1Socket = new RobotService("robot1");

function App() {
  const [robot1Data, setRobot1Data] = useState({});

  useEffect(() => {
    const intervalId = setInterval(() => {
      robot1Socket.ListenIncomingRobotData();
      // setRobot1Data(robot1Socket.robotData);
      robot1Socket.TriggerConnection();
    }, 50);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="App ">
      <Home robot1data={robot1Socket} />
    </div>
  );
}

export default App;
