const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const app = express();
const { networkInterfaces } = require("os");
const server = http.createServer(app);
const io = new socketIo.Server(server, {
  cors: {
    origin: "*",
  },
});

const getIPAddress = () => {
  const nets = networkInterfaces();
  const results = {};

  for (const name of Object.keys(nets)) {
    for (const net of nets[name]) {
      // Retrieve only IPv4 addresses
      if (net.family === "IPv4" && !net.internal) {
        if (!results[name]) {
          results[name] = [];
        }
        results[name].push(net.address);
      }
    }
  }

  // Return the first IP address for the first NIC found
  const nicNames = Object.keys(results);
  if (nicNames.length > 0) {
    const firstNICAddresses = results[nicNames[0]];
    if (firstNICAddresses.length > 0) {
      return firstNICAddresses[0];
    }
  }

  // No IP address found
  return null;
};

const connectedClients = new Set();
var img = undefined;
var pyhonJSON = {};

io.on("connection", (socket) => {
  console.log("[INFO] Client connected");
  connectedClients.add(socket);

  // Handle video streaming from Python here.
  // You can send frames or video stream using Socket.io.

  socket.on("python", (data) => {
    img = data;
  });

  socket.on("pythonJson", (data) => {
    pyhonJSON = data;
  });

  socket.on("react", (data) => {
    // console.log("react");
    socket.emit("reactReply", img);
  });

  socket.on("reactGetJSON", () => {
    socket.emit("frompythonJson", pyhonJSON);
  });

  console.log(connectedClients.size);

  socket.on("disconnect", () => {
    connectedClients.delete(socket);
    console.log("[INFO] Client disconnected");
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`[INFO] Server is running on ${getIPAddress()}:${PORT}`);
});
