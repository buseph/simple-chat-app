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

var existingUser = []; //a

io.on("connection", (socket) => {
  // send to the client the existing user
  io.emit("existing_user", existingUser);
  // console.log("onConnect: ", existingUser);

  socket.on("new_user", (data) => {
    // log message for new user
    socket.broadcast.emit("new_user", {
      id: uuidv4(),
      author: "Server",
      message: "has joined!",
      newUser: data.username,
    });

    existingUser.push(data);

    io.emit("existing_user", existingUser);
    // console.log("Connected: ", existingUser);
  });

  socket.on("disconnect", () => {
    var temp = [];

    existingUser
      .filter((data) => {
        return socket.id !== data.socketid;
      })
      .map((data) => {
        return temp.push(data);
      });

    existingUser = [];

    temp.map((data) => {
      return existingUser.push(data);
    });

    temp = [];

    io.emit("existing_user", existingUser);
    // console.log("disconnected: ", existingUser);
  });

  // sending messages
  socket.on("send_message", (data) => {
    socket.broadcast.emit("recieve_message", data);
  });
});

// message namespace
io.of("/message").on("connection", (socket) => {
  const userNumber = io.of("/message").sockets.size;
  // console.log("connected user: ", userNumber);

  io.emit("user_counter", userNumber);

  socket.on("disconnect", () => {
    const userNumber = io.of("/message").sockets.size;
    // console.log("connected user: ", userNumber);

    io.emit("user_counter", userNumber);
  });
});

var port = process.env.PORT;

if (port === null || port === "") {
  port = 3001;
}

server.listen(port, () => {
  console.log("server running on port 3001");
});
