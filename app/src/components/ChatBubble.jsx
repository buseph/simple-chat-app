import React from "react";
import { Grid, makeStyles, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chat: {
    color: "#fff",
    fontWeight: 500,
    fontSize: "1rem",
    maxWidth: "263px",
    borderRadius: "50px",
    padding: "10px 15px",
  },
  you: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.black,
  },
  other: {
    backgroundColor: theme.palette.primary.main,
  },
  youChatInfo: {
    marginRight: "1.5em",
  },
  otherChatInfo: {
    marginLeft: "1.5em",
  },
  authorName: {
    color: "#707070",
  },
}));

export default function ChatBubble({ author, message, username }) {
  const classes = useStyles();

  return (
    <Grid container direction="column">
      <Grid
        item
        container
        direction="row"
        justifyContent={username === author ? "flex-end" : "flex-start"}
      >
        <Grid>
          <Box
            className={
              username === author
                ? [classes.chat, classes.you]
                : [classes.chat, classes.other]
            }
          >
            <Typography align="left" variant="subtitle1" style={{ margin: 0 }}>
              {message}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="row"
        justifyContent={username === author ? "flex-end" : "flex-start"}
      >
        <Typography
          variant="caption"
          className={
            username === author
              ? [classes.authorName, classes.youChatInfo]
              : [classes.authorName, classes.otherChatInfo]
          }
        >
          {author}
        </Typography>
      </Grid>
    </Grid>
  );
}
