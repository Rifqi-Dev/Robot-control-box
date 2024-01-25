import React, { useEffect, useState } from "react";

function RobotCard({ robotName, data }) {
  const [online, setOnline] = useState(false);
  const [latency, setLatency] = useState(0);
  const [robotData, setRobotData] = useState({});
  useEffect(() => {
    const intervalId = setInterval(() => {
      const timeNow = new Date().getTime();
      if (data) {
        const robotData = data.robotData;
        setRobotData(robotData);
        const deltaTime = timeNow - robotData?.connection_data?.time;
        setOnline(deltaTime < 1500);
        setLatency(deltaTime);
      }
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="text-white bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 w-[380px] h-[400px] rounded-md flex">
      <div className="w-[150px] h-[250px] bg-red-200 rounded-md mt-3 ml-3">
        <img></img>
      </div>
      <div className="Robot-Detail ml-3 mt-3">
        <h1 className="text-2xl">{robotName}</h1>
        <div className="mt-4">
          <h5 className="text-green-500">
            {online ? `Online (${latency}ms)` : "Offline"}
          </h5>
          <h5>{robotData?.connection_data?.ip || "Not Connected"}</h5>
          <h5>Pos : 0, 0</h5>
          <h5>Rot : {robotData?.odometry_data?.robotDegree}</h5>
        </div>
      </div>
    </div>
  );
}

export default RobotCard;
