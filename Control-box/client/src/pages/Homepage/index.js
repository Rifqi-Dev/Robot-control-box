import React from "react";
import { Tabs, Tab, TabsHeader } from "@material-tailwind/react";
import RobotCard from "../../Components/RobotCard/RobotCard";
import HomeComponent from "../../Components/HomeComponent/Index";
import { useState } from "react";
import RobotComponent from "../../Components/RobotComponent";

function Home({ robot1, robot1data, onChange }) {
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
    robot1: (
      <RobotComponent
        robotName="Robot 1"
        robotData={robot1}
        onChange={onChange}
        data={robot1data}
      />
    ),
    robot2: <RobotComponent robotName="Robot 2" />,
    robot3: <RobotComponent robotName="Robot 3" />,
  };
  return (
    <div className="flex flex-col items-center ">
      <div className="w-[80%] pt-12 absolute ">
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
