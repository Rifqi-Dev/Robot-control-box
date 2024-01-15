import React from "react";
import RobotCard from "../RobotCard/RobotCard";

function HomeComponent({ robotCon }) {
  // console.log(robotCon);
  return (
    <div className="flex justify-center gap-10 flex-wrap">
      <RobotCard robotName="Robot 1" robotCon={robotCon.robot1} />
      <RobotCard robotName="Robot 2" />
      <RobotCard robotName="Robot 3" />
    </div>
  );
}

export default HomeComponent;
