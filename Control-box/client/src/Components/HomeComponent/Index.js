import React from "react";
import RobotCard from "../RobotCard/RobotCard";

function HomeComponent({ robot1data }) {
  // console.log(robot1data);
  return (
    <div className="flex justify-center gap-10 flex-wrap">
      <RobotCard robotName="Robot 1" data={robot1data} />
      <RobotCard robotName="Robot 2" />
      <RobotCard robotName="Robot 3" />
    </div>
  );
}

export default HomeComponent;
