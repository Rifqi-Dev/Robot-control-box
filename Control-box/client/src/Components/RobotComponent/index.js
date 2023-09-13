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
    <div>
      <div className="text-white ">
        <div className="flex gap-5">
          <div className="flex items-center justify-center bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100  w-[300px] 2xl:w-[500px] aspect-[4/3]">
            <img alt="Video Frame" />
          </div>
          <div className="bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 flex">
            <div className="w-full px-2">
              <div className="my-3">
                <Select label="Select Camera" className="text-white ">
                  <Option>Omnivision</Option>
                  <Option>Front Camera</Option>
                </Select>
              </div>
              <div className="my-3">
                <Select label="Select Video" className="text-white ">
                  <Option>Camera</Option>
                  <Option>Masking</Option>
                </Select>
              </div>
              <div className="my-3"></div>
              <Tabs value="color">
                <TabsHeader>
                  <Tab key={"camera"} value="camera">
                    Camera
                  </Tab>
                  <Tab key={"color"} value="color">
                    Color
                  </Tab>
                </TabsHeader>
              </Tabs>
            </div>
            <div className="p-2">
              <div>
                <label>Lower Hue</label>
                <Slider defaultValue={50} />
              </div>
              <div className="my-4">
                <label>Lower Saturation</label>
                <Slider defaultValue={50} />
              </div>
              <div className="my-4">
                <label>Lower Value</label>
                <Slider defaultValue={50} />
              </div>
              <div className="my-4">
                <label>Upper Hue</label>
                <Slider defaultValue={50} />
              </div>
              <div className="my-4">
                <label>Upper Saturation</label>
                <Slider defaultValue={50} />
              </div>
              <div className="my-4">
                <label>Upper Value</label>
                <Slider defaultValue={50} />
              </div>
            </div>

            <div className="p-2">
              <div>
                <label>Lower Hue</label>
                <Slider defaultValue={50} />
              </div>
              <div className="my-4">
                <label>Lower Saturation</label>
                <Slider defaultValue={50} />
              </div>
              <div className="my-4">
                <label>Lower Value</label>
                <Slider defaultValue={50} />
              </div>
              <div className="my-4">
                <label>Upper Hue</label>
                <Slider defaultValue={50} />
              </div>
              <div className="my-4">
                <label>Upper Saturation</label>
                <Slider defaultValue={50} />
              </div>
              <div className="my-4">
                <label>Upper Value</label>
                <Slider defaultValue={50} />
              </div>
            </div>
            <div className="p-2">
              <div>
                <label>Lower Hue</label>
                <Slider defaultValue={50} />
              </div>
              <div className="my-4">
                <label>Lower Saturation</label>
                <Slider defaultValue={50} />
              </div>
              <div className="my-4">
                <label>Lower Value</label>
                <Slider defaultValue={50} />
              </div>
              <div className="my-4">
                <label>Upper Hue</label>
                <Slider defaultValue={50} />
              </div>
              <div className="my-4">
                <label>Upper Saturation</label>
                <Slider defaultValue={50} />
              </div>
              <div className="my-4">
                <label>Upper Value</label>
                <Slider defaultValue={50} />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-5 bg-gray-500 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 w-full">
          asd
        </div>
      </div>
    </div>
  );
}
