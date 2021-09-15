import { useEffect, useState } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Button, Grid, TextField } from "@material-ui/core";
import mainTheme from "./ui/Theme";
import { SendRounded } from "@material-ui/icons";
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
    height: "85%",
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

export default function MessageContainer({ inputName, socket, io }) {
  const classes = useStyle();

  const [isValidate, setIsValidate] = useState(true);
  const [messageInput, setMessageInput] = useState("");
  const [messages, setMessages] = useState([]);

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
      setIsValidate(false);
    }
  };

  useEffect(() => {
    socket.on("recieve_message", (data) => {
      setMessages((prevState) => [...prevState, data]);
    });
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
