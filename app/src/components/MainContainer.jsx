import React from "react";
import { Grid, Typography, Button, TextField, Avatar } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  chatContainer: {
    width: "35em",
    height: "35em",
    backgroundColor: theme.palette.common.white,
    boxShadow: theme.shadows[2],
    padding: "0 8em",
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      height: "100%",
    },
    [theme.breakpoints.down("415")]: {},
  },
  contentContainer: {
    [theme.breakpoints.down("555")]: {
      width: "300px",
    },
  },
  greeting: {
    fontWeight: "bold",
    marginBottom: "15px",
    color: theme.palette.secondary.main,
    [theme.breakpoints.down("510")]: {
      fontSize: "1.5rem",
    },
    [theme.breakpoints.down("375")]: {
      fontSize: "1rem",
      marginBottom: "10px",
    },
  },
  startButton: {
    marginTop: "15px",
    backgroundColor: theme.palette.common.red,
    color: "#fff",
    fontWeight: "bold",
    fontSize: "1.1rem",
    "&:hover": {
      backgroundColor: theme.palette.common.red,
    },
  },
  avatarContainer: {
    width: "100%",
  },
  userAvatar: {
    width: "2em",
    height: "2em",
    fontSize: "5rem",
    boxShadow: theme.shadows[3],
    marginBottom: "20px",
  },
}));

export default function MainContainer({
  inputName,
  setInputName,
  validate,
  setValidate,
}) {
  const classes = useStyles();
  const theme = useTheme();

  function handleInput(e) {
    const userInput = e.target.value;
    setInputName(userInput);

    if (userInput !== "") {
      setValidate(false);
    } else {
      setValidate(true);
    }
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignContent="center"
      style={{ width: "100vw", height: "100vh" }}
    >
      <Grid
        item
        container
        direction="column"
        alignContent="center"
        justifyContent="center"
        className={classes.chatContainer}
      >
        <Grid
          item
          container
          direction="column"
          className={classes.contentContainer}
        >
          <Grid
            item
            container
            justifyContent="center"
            className={classes.avatarContainer}
          >
            <Avatar
              style={{
                backgroundColor: validate ? "" : theme.palette.primary.main,
              }}
              className={classes.userAvatar}
            >
              {inputName.slice(0, 1).toLocaleUpperCase()}
            </Avatar>
          </Grid>
          <Grid item>
            <Typography
              variant="h4"
              align="center"
              color="initial"
              className={classes.greeting}
            >
              {validate
                ? "Enter your name"
                : "Welcome " + inputName.slice(0, 7)}
            </Typography>
          </Grid>
          <Grid
            item
            container
            justifyContent="center"
            style={{ width: "100%" }}
          >
            <TextField
              autoComplete="off"
              variant="outlined"
              color="secondary"
              autoFocus
              inputProps={{ min: 0, style: { textAlign: "center" } }}
              style={{ width: 300 }}
              value={inputName}
              onChange={handleInput}
              fullWidth
            />
          </Grid>
          <Grid>
            <Link
              to="/message"
              style={{
                textDecoration: "none",
                pointerEvents: validate ? "none" : "auto",
              }}
            >
              <Button
                variant="contained"
                fullWidth
                className={classes.startButton}
                disabled={validate}
              >
                Start Chatting!
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
