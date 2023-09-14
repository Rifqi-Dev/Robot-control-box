import {
  Button,
  Input,
  Option,
  Select,
  Slider,
  Tab,
  Tabs,
  TabsHeader,
} from "@material-tailwind/react";

export default function RobotComponent({ robotName }) {
  return (
    <div className="flex justify-center">
      <div className="text-white flex flex-col">
        <div className="flex flex-row gap-5">
          <div className="flex items-center justify-center bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100  w-[300px] 2xl:w-[500px] aspect-[4/3]">
            <img alt="Video Frame" />
          </div>
          <div className="bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
            <div className="w-full py-4 flex">
              <div className="mx-5">
                <Select
                  label="Select Video"
                  className="text-white "
                  color="red"
                >
                  <Option>Camera</Option>
                  <Option>Masking</Option>
                </Select>
              </div>

              <div className=" ml-14">
                <Select
                  label="Select Color"
                  className="text-white "
                  color="red"
                >
                  <Option>Orange</Option>
                  <Option>Cyan</Option>
                </Select>
              </div>

              <div className="mx-3">
                <Select
                  label="Select Camera"
                  className="text-white  "
                  color="red"
                >
                  <Option>Omnivision</Option>
                  <Option>Front Camera</Option>
                </Select>
              </div>
            </div>
            <div className="p-5 flex gap-5">
              <div className="w-[200px]">
                <h5>Communication</h5>
                <div className="mb-2 mt-1 flex items-center gap-2">
                  <Input
                    color="white"
                    label="UART Port"
                    className="text-white"
                  />
                  <Button color="red" size="sm" className="w-[20%]">
                    C
                  </Button>
                </div>
                <div className="my-4 flex items-center gap-2">
                  <Input
                    color="white"
                    label="Basestation IP"
                    className="text-white"
                  />
                  <Button color="red" size="sm" className="mt-2">
                    C
                  </Button>
                </div>
              </div>
              <div className="ml-14">
                <div>
                  <label>Lower Hue</label>
                  <Slider color="red" defaultValue={50} />
                </div>
                <div className="my-4">
                  <label>Lower Saturation</label>
                  <Slider color="red" defaultValue={50} />
                </div>
                <div className="my-4">
                  <label>Lower Value</label>
                  <Slider color="red" defaultValue={50} />
                </div>
                <div className="my-4">
                  <label>Upper Hue</label>
                  <Slider color="red" defaultValue={50} />
                </div>
                <div className="my-4">
                  <label>Upper Saturation</label>
                  <Slider color="red" defaultValue={50} />
                </div>
                <div className="my-4">
                  <label>Upper Value</label>
                  <Slider color="red" defaultValue={50} />
                </div>
              </div>

              <div>
                <div>
                  <label>Focus</label>
                  <Slider color="red" defaultValue={50} />
                </div>
                <div className="my-4">
                  <label>Zoom</label>
                  <Slider color="red" defaultValue={50} />
                </div>
                <div className="my-4">
                  <label>White Balance</label>
                  <Slider color="red" defaultValue={50} />
                </div>
                <div className="my-4">
                  <label>Color Temperature</label>
                  <Slider color="red" defaultValue={50} />
                </div>
                <div className="my-4">
                  <label>Color Saturation</label>
                  <Slider color="red" defaultValue={50} />
                </div>
                <div className="my-4">
                  <label>ISO</label>
                  <Slider color="red" defaultValue={50} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 w-full">
          Control Panel
        </div>
      </div>
    </div>
  );
}
