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

// var userCount = 0;

io.on("connection", (socket) => {
  socket.on("new_user", (data) => {
    // userCount = userCount + userNumber.user;

    // io.emit("user_counter", userCount);

    // socket.on("disconnect", () => {
    //   if (userCount !== 0) {
    //     userCount--;
    //   }

    //   io.emit("user_counter", userCount);
    // });

    // log message for new user
    socket.broadcast.emit("new_user", {
      id: uuidv4(),
      author: "Server",
      message: "has joined!",
      newUser: data.username,
    });
  });

  // sending messages
  socket.on("send_message", (data) => {
    socket.broadcast.emit("recieve_message", data);
  });
});

// message namespace
io.of("/message").on("connection", (socket) => {
  const userNumber = io.of("/message").sockets.size;
  console.log("connected user: ", userNumber);

  io.emit("user_counter", userNumber);

  socket.on("disconnect", () => {
    const userNumber = io.engine.clientsCount;
    console.log("connected user: ", userNumber);

    io.emit("user_counter", userNumber);
  });
});

var port = process.env.PORT;

if (port == null || port == "") {
  port = 3001;
}

server.listen(port, () => {
  console.log("server running on port 3001");
});
