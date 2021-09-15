import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import { ForumRounded } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  noMessagesText: {
    color: theme.palette.grey[400],
  },
  noMessageIcon: {
    color: theme.palette.grey[400],
    fontSize: "5em",
  },
}));

function NoMessages() {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignContent="center">
      <Grid container direction="row" justifyContent="center">
        <ForumRounded className={classes.noMessageIcon} />
      </Grid>
      <Grid item>
        <Typography
          align="center"
          variant="body1"
          className={classes.noMessagesText}
        >
          No Messages
        </Typography>
      </Grid>
    </Grid>
  );
}

export default NoMessages;
