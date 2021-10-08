import App from "./App";
import ReactDOM from "react-dom";
import "./index.css";
import { HomePageVideosProvider } from "./contexts/HomePageVideosContext";
import { PlaylistProvider } from "./contexts/PlaylistContext";
import { createTheme, ThemeProvider } from "@material-ui/core";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';

const theme = createTheme({
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
