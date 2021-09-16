import { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField, Typography } from "@material-ui/core";
import mainTheme from "./ui/Theme";
import { SendRounded, GroupRounded } from "@material-ui/icons";
import ChatBubble from "./ChatBubble";
import ScrollToBottom from "react-scroll-to-bottom";
import NoMessages from "./NoMessages";
import { v4 as uuidv4 } from "uuid";

import { Redirect } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  chatContainer: {
    width: "35em",
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[2],
    padding: "1em 2em",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100%",
    },
  },
  chatContent: {
    width: "100%",
    height: "616px",
  },
  messageInputContainer: {
    width: "10em",
  },
  messageInput: {
    backgroundColor: "#fff",
    maxWidth: "26em",
    "&:hover": {
      borderColor: "red",
    },
  },
  sendButton: {
    backgroundColor: mainTheme.palette.secondary.main,
    transition: "0.5s ease",
    marginLeft: "10px",
    height: "100%",
    "&:hover": {
      backgroundColor: mainTheme.palette.secondary.light,
    },
  },
  messages: {
    width: "100%",
    height: "80%",
    borderRadius: "5px",
    marginBottom: "1em",
    backgroundColor: "#fff",
    padding: "1em 0.5em ",
  },
  autoScroll: {
    width: "100%",
    height: "100%",
    overflow: "hidden",
    marginLeft: "0.5em",
  },
  inputContainer: {
    width: "26ch",
  },
  userCount: {
    fontWeight: 600,
    marginLeft: "0.2em",
    marginTop: "1.5px",
    color: theme.palette.grey[600],
  },
}));

const MessageInput = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: mainTheme.palette.secondary.light,
      },
      "&:hover fieldset": {
        borderColor: mainTheme.palette.secondary.main,
      },
      "&.Mui-focused fieldset": {
        borderColor: mainTheme.palette.secondary.main,
      },
    },
  },
})(TextField);

export default function MessageContainer({ inputName, socket }) {
  const classes = useStyle();

  const [isValidate, setIsValidate] = useState(true);
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [userCount, setUserCount] = useState(0);

  function handleSendValidation(e) {
    const value = e.target.value;
    setMessageInput(value);

    if (value !== "") {
      setIsValidate(false);
    } else {
      setIsValidate(true);
    }
  }

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (messageInput !== "") {
      const messageData = {
        id: uuidv4(),
        author: inputName,
        message: messageInput,
      };

      await socket.emit("send_message", messageData);
      setMessages((prevState) => [...prevState, messageData]);
      setMessageInput("");
      setIsValidate(true);
    }
  };

  useEffect(() => {
    let unmounted = false;

    socket.on("recieve_message", (data) => {
      if (!unmounted) {
        setMessages((prevState) => [...prevState, data]);
      }
    });

    socket.on("user_counter", (userNumber) => {
      if (!unmounted) {
        setUserCount(userNumber);
      }
    });

    socket.on("new_user", (newUserName) => {
      if (!unmounted) {
        setMessages((prevState) => [...prevState, newUserName]);
      }
    });

    return () => {
      unmounted = true;
    };
  }, [socket]);

  return (
    <>
      {inputName === "" ? (
        <Redirect to="/" />
      ) : (
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignContent="center"
          style={{ width: "100%", height: "100vh" }}
        >
          <Grid
            item
            container
            direction="column"
            alignContent="center"
            className={classes.chatContainer}
          >
            <Grid
              item
              container
              direction="column"
              className={classes.chatContent}
              wrap="nowrap"
            >
              <Grid
                item
                container
                direction="row"
                justifyContent="center"
                alignContent="center"
              >
                <GroupRounded color="secondary" />
                <Typography variant="body1" className={classes.userCount}>
                  {userCount}
                </Typography>
              </Grid>

              <Grid
                item
                className={classes.messages}
                container
                direction="row"
                alignContent="center"
              >
                {messages.length === 0 ? (
                  <NoMessages />
                ) : (
                  <ScrollToBottom className={classes.autoScroll}>
                    {/* Messages Here */}
                    {messages.map((data) => {
                      return (
                        <ChatBubble
                          key={data.id}
                          author={data.author}
                          message={data.message}
                          username={inputName}
                          newUser={data.newUser}
                        />
                      );
                    })}
                  </ScrollToBottom>
                )}
              </Grid>
              <form
                id="form"
                action=""
                autoComplete="off"
                onSubmit={handleSendMessage}
              >
                <Grid
                  container
                  direction="row"
                  justifyContent="flex-end"
                  style={{ width: "100%", height: "56px" }}
                  wrap="nowrap"
                >
                  <MessageInput
                    variant="outlined"
                    className={classes.messageInput}
                    color="secondary"
                    placeholder="Enter your message"
                    value={messageInput}
                    onChange={handleSendValidation}
                    autoFocus
                    fullWidth
                  />
                  <Grid item className={classes.buttonContainer}>
                    <Button
                      variant="contained"
                      className={classes.sendButton}
                      disableElevation
                      disabled={isValidate}
                      onClick={handleSendMessage}
                    >
                      <SendRounded fontSize="large" />
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Grid>
      )}
    </>
  );
}
