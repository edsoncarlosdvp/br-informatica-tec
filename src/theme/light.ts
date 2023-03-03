import { createTheme } from "@mui/material";
import { cyan, grey } from "@mui/material/colors";

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: grey[600],
      light: grey[400],
      dark: grey[800],
    },

    secondary: {
      main: cyan[600],
      light: cyan[400],
      dark: cyan[800],
    },
    background: {
      paper: "#ffffff",
      default: "#f7f6f3",
    },
  },
});
