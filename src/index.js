import App from "./App";
import ReactDOM from "react-dom";
import "./index.css";
import { HomePageVideosProvider } from "./contexts/HomePageVideosContext";
import { PlaylistProvider } from "./contexts/PlaylistContext";
import { createTheme, ThemeProvider } from "@material-ui/core";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          scrollbarColor: "#ffffff #9368f7",
          "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
            backgroundColor: "#9368f7",
          },
          maxHeight : "1rem",
          "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
            borderRadius: 8,
            backgroundColor: "#ffffff",
            maxHeight: "0.08rem",
            border: "0.05rem solid #9368f7",
          },
          "&::-webkit-scrollbar-thumb:focus, & *::-webkit-scrollbar-thumb:focus": {
            backgroundColor: "#9368f7",
          },
          "&::-webkit-scrollbar-thumb:active, & *::-webkit-scrollbar-thumb:active": {
            backgroundColor: "#9368f7",
          },
          "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#ffffff",
          },
          "&::-webkit-scrollbar-corner, & *::-webkit-scrollbar-corner": {
            backgroundColor: "#9368f7",
          },
        },
      },
    },
  },
  palette: {
    primary: {
      light : "rgb(222,79,78)",
      main: "rgb(147,104,247)",
      // dark

    },
    secondary: {
      light : "rgb(239,239,241)",
      main : "rgb(91,96,116)",
      
    },
  },
});

ReactDOM.render(
  
  <ThemeProvider theme={theme}>
    <HomePageVideosProvider>
      <PlaylistProvider>
        <App />
      </PlaylistProvider>
    </HomePageVideosProvider>
  </ThemeProvider>,

  document.getElementById("root")
);
