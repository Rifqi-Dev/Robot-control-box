const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = new socketIo.Server(server, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const connectedClients = new Set();
var img = undefined;
io.on("connection", (socket) => {
  console.log("[INFO] Client connected");
  connectedClients.add(socket);

  // Handle video streaming from Python here.
  // You can send frames or video stream using Socket.io.

  socket.on("python", (data) => {
    console.log("python");
    img = data;
  });

  socket.on("react", (data) => {
    console.log("React");
    socket.emit("reactReply", img);
  });

  console.log(connectedClients.size);

  socket.on("disconnect", () => {
    connectedClients.delete(socket);
    console.log("[INFO] Client disconnected");
  });
});

const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`[INFO] Server is running on port ${PORT}`);
});
