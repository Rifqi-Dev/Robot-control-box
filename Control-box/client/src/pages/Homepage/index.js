import React from "react";
import { Tabs, Tab, TabsHeader } from "@material-tailwind/react";
import RobotCard from "../../Components/RobotCard/RobotCard";
import HomeComponent from "../../Components/HomeComponent/Index";
import { useState } from "react";
function Home() {
  const [selected, setSelect] = useState("home");
  const data = [
    {
      label: "Home",
      value: "home",
    },
    {
      label: "Robot 1",
      value: "robot1",
    },
    {
      label: "Robot 2",
      value: "robot2",
    },
    {
      label: "Robot 3",
      value: "robot3",
    },
  ];
  const components = {
    home: <HomeComponent />,
    robot1: <div className="text-white">Robot1</div>,
    robot2: <div className="text-white">Robot2</div>,
    robot3: <div className="text-white">Robot3</div>,
  };
  return (
    <div className="flex flex-col items-center ">
      <div className="w-[80%] top-2 absolute ">
        <Tabs value="home">
          <TabsHeader>
            {data.map(({ label, value }) => (
              <Tab key={value} value={value} onClick={() => setSelect(value)}>
                {label}
              </Tab>
            ))}
          </TabsHeader>
        </Tabs>
      </div>
      <div className="w-screen absolute top-28 px-10 ">
        {components[selected]}
      </div>
    </div>
  );
}

export default Home;
