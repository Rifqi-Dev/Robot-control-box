import io from "socket.io-client";

const RobotCon = {
  robot1: {
    ip: "localhost",
    port: "3001",
  },
};

class RobotService {
  constructor(robot) {
    this.from = robot;
    this.robotSock = io(`http://${RobotCon[robot].ip}:${RobotCon[robot].port}`);
    this.robotData = {
      connection_data: {
        online: false,
        time: 0,
        ip: RobotCon[robot].ip,
        latency: 0,
      },
      camera_data: {
        front_camera: "",
      },
      config_data: {},
      odometry_data: {},
    };
  }

  ListenIncomingRobotData() {
    // ==== Listen Connection Data ====
    this.robotSock.on("connect", () => {
      console.log("[Info]: Socket Connected!");
      this.robotData.connection_data.online = true;
      this.robotSock.emit("connection_callback", "Connected");
    });

    // ==== Listen Config Data ====
    this.robotSock.on("configData", (data) => {
      this.robotData.config_data = data;
    });

    // ==== Listen Config Data ====
    this.robotSock.on("cameraData", (data) => {
      this.robotData.camera_data = data;
    });

    // === Listen Latency Data ===
    this.robotSock.on("latencyData", (data) => {
      this.robotData.connection_data.time = data.time;
    });

    // === Listen Odometry Data ===
    this.robotSock.on("odometry_data", (data) => {
      this.robotData.odometry_data = data;
    });
  }

  TriggerConnection() {
    this.robotSock.emit("react", new Date().getTime());
  }
}

export default RobotService;
