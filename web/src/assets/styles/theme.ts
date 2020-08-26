import { createMuiTheme } from "@material-ui/core";
import { cyan, teal, purple } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: purple[700],
      main: purple[800],
      dark: purple[900]
    },
    secondary: {
      light: cyan[700],
      main: cyan[800],
      dark: cyan[900]
    },
  },
});

export default theme