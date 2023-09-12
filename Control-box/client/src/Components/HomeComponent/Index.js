import React from "react";
import RobotCard from "../RobotCard/RobotCard";

function HomeComponent() {
  return (
    <div className="flex justify-center gap-10 flex-wrap">
      <RobotCard />
      <RobotCard />
      <RobotCard />
    </div>
  );
}

export default HomeComponent;
