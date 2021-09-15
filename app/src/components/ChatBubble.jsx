import React from "react";
import { Grid, makeStyles, Typography, Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  chat: {
    width: "auto",
    height: "auto",
    maxWidth: "263px",
    color: "#fff",
    fontWeight: 500,
    fontSize: "1rem",
    borderRadius: "50px",
    padding: "10px 15px",
    overflowWrap: "break-word",
    wordBreak: "break-word",
  },
  messageContent: {
    lineHeight: "1px",
  },
  you: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.common.black,
    marginRight: "1em",
  },
  other: {
    backgroundColor: theme.palette.primary.main,
  },
  youChatInfo: {
    marginRight: "2em",
  },
  otherChatInfo: {
    marginLeft: "1em",
  },
  authorName: {
    color: theme.palette.grey[600],
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
                ? `${classes.chat} ${classes.you}`
                : `${classes.chat} ${classes.other}`
            }
          >
            <Typography
              align="left"
              variant="subtitle1"
              className={classes.messageContent}
              display="inline"
            >
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
          noWrap
          className={
            username === author
              ? `${classes.authorName} ${classes.youChatInfo}`
              : `${classes.authorName} ${classes.otherChatInfo}`
          }
        >
          {author}
        </Typography>
      </Grid>
    </Grid>
  );
}
