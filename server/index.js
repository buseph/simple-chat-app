const express = require("express");
const http = require("http");
const cors = require("cors");

const { Server } = require("socket.io");
const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.of("/message").on("connection", (socket) => {
  const connectedUser = io.of("/message").sockets.size;
  socket.emit("log_message", { text: "someone connected" });

  socket.on("send_message", (data) => {
    socket.broadcast.emit("recieve_message", data);
  });
});

server.listen(3001, () => {
  console.log("server running on port 3001");
});
