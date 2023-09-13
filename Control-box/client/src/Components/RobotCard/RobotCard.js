import React from "react";

function RobotCard({ robotName }) {
  return (
    <div className="text-white bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-30 border border-gray-100 w-[380px] h-[400px] rounded-md flex">
      <div className="w-[150px] h-[250px] bg-red-200 rounded-md mt-3 ml-3">
        <img></img>
      </div>
      <div className="Robot-Detail ml-3 mt-3">
        <h1 className="text-2xl">{robotName}</h1>
        <div className="mt-4">
          <h5 className="text-green-500">(ONLINE)</h5>
          <h5>192.168.1.1</h5>
          <h5>Pos : 0, 0</h5>
          <h5>Rot : 0</h5>
        </div>
      </div>
    </div>
  );
}

export default RobotCard;
