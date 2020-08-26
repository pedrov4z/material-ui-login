import { createMuiTheme } from "@material-ui/core";
import { cyan, purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[800],
    },
    secondary: {
      main: cyan[800],
    },
  },
});

export default theme