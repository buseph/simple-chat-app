const express = require("express");
const http = require("http");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const { Server } = require("socket.io");
const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

var userCount = 0;

io.on("connection", (socket) => {
  socket.on("user_counter", (userNumber) => {
    userCount = userCount + userNumber.user;

    io.emit("user_counter", userCount);

    socket.broadcast.emit("new_user", {
      id: uuidv4(),
      author: "Server",
      message: "has joined!",
      newUser: userNumber.username,
    });
  });

  socket.on("disconnect", () => {
    if (userCount !== 0) {
      userCount--;
    }

    io.emit("user_counter", userCount);
  });

  socket.on("send_message", (data) => {
    socket.broadcast.emit("recieve_message", data);
  });
});

var port = process.env.PORT;

if (port == null || port == "") {
  port = 3001;
}

server.listen(port, () => {
  console.log("server running on port 3001");
});
