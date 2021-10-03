import App from "./App";
import ReactDOM from "react-dom";
import "./index.css";
import { HomePageVideosProvider } from "./contexts/HomePageVideosContext";

ReactDOM.render(
  <HomePageVideosProvider>
    <App />
  </HomePageVideosProvider>,

  document.getElementById("root")
);
