import React, { useState } from "react";

function RobotCard({ robotName, robotCon }) {
  setInterval(() => {
    const timeNow = new Date().getTime();
    if (robotCon) {
      const deltaTime = timeNow - robotCon?.latency?.time;
      robotCon.online = deltaTime < 1500;
      robotCon.latency.latency = deltaTime;
      // console.log(deltaTime);
    }
  }, 1);

  return (
    <div className="text-white bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 w-[380px] h-[400px] rounded-md flex">
      <div className="w-[150px] h-[250px] bg-red-200 rounded-md mt-3 ml-3">
        <img></img>
      </div>
      <div className="Robot-Detail ml-3 mt-3">
        <h1 className="text-2xl">{robotName}</h1>
        <div className="mt-4">
          <h5 className="text-green-500">
            {robotCon?.online
              ? `Online (${robotCon?.latency.latency}ms)`
              : "Offline"}
          </h5>
          <h5>{robotCon?.ip || "Not Connected"}</h5>
          <h5>Pos : 0, 0</h5>
          <h5>Rot : 0</h5>
        </div>
      </div>
    </div>
  );
}

export default RobotCard;
