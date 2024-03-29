const express = require("express");
const http = require("http");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const { Server } = require("socket.io");
const app = express();

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "https://buseph-simplechatapp.netlify.app",
    methods: ["GET", "POST"],
  },
});

var existingUser = [];

const currentTime = new Date().getHours() + ":" + new Date().getMinutes();

io.on("connection", (socket) => {
  // send to the client the existing user
  io.emit("existing_user", existingUser);
  // console.log("onConnect: ", existingUser);

  socket.on("new_user", (data) => {
    // log message for new user
    socket.broadcast.emit("new_user", {
      id: uuidv4(),
      author: "Server",
      message: "has joined! 👋",
      newUser: data.username,
      time: currentTime,
    });

    existingUser.push(data);

    io.emit("existing_user", existingUser);
    // console.log("Connected: ", existingUser);
  });

  socket.on("disconnect", () => {
    existingUser.filter((data) => {
      if (data.socketid === socket.id) {
        return socket.broadcast.emit("new_user", {
          id: "left",
          author: "Server",
          message: "has left! 🚪🏃💨",
          newUser: data.username,
          time: currentTime,
        });
      }
    });

    // remove the user that disconnect in existingUser array
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

  //typing event
  socket.on("someone_typing", (data) => {
    socket.broadcast.emit("someone_typing", data);
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

    // remove existing user if the connected user is
    if (userNumber === 0) {
      existingUser = [];
    }

    io.emit("user_counter", userNumber);
  });
});

var port = process.env.PORT;

if (port == null || port == "") {
  port = 3001;
}

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
