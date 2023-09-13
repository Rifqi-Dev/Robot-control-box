import {
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
            <div className="w-full py-2 flex">
              <div className="mx-3">
                <Select label="Select Video" className="text-white ">
                  <Option>Camera</Option>
                  <Option>Masking</Option>
                </Select>
              </div>

              <div className="mx-3">
                <Select label="Select Color" className="text-white ">
                  <Option>Orange</Option>
                  <Option>Cyan</Option>
                </Select>
              </div>

              <div className="mx-3">
                <Select label="Select Camera" className="text-white ">
                  <Option>Omnivision</Option>
                  <Option>Front Camera</Option>
                </Select>
              </div>
            </div>
            <div className="p-5 flex gap-5">
              <div className="w-[200px]">Communication</div>
              <div>
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
