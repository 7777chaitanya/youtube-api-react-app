import App from "./App";
import ReactDOM from "react-dom";
import "./index.css";
import { HomePageVideosProvider } from "./contexts/HomePageVideosContext";
import { PlaylistProvider } from "./contexts/PlaylistContext";

ReactDOM.render(
  <HomePageVideosProvider>
    <PlaylistProvider>
    <App />
    </PlaylistProvider>
  </HomePageVideosProvider>,

  document.getElementById("root")
);
