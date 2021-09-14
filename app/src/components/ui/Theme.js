import { createTheme } from "@material-ui/core/styles";

const blue = "#3DB2FF";
const white = "#FFEDDA";
const yellow = "#FFB830";
const red = "#FF2442";

export default createTheme({
  palette: {
    common: {
      blue: blue,
      white: white,
      yellow: yellow,
      red: red,
    },
    primary: {
      main: blue,
    },
    secondary: {
      main: yellow,
    },
  },
});
