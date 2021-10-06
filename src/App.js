import React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import {
  NavBar,
  HomePageGrid,
  LikedVideosGrid,
  SavedVideosGrid,
  PlaylistVideos,
  HistoryPlaylist,
  AllPlaylists
} from "./components";


const App = () => {
  return (
    <div>
      <Router>
        <NavBar />
        <Switch>
          <Route path="/likedVideos">
            <LikedVideosGrid />
          </Route>
          <Route path="/savedVideos">
            <SavedVideosGrid />
          </Route>
          <Route path="/history">
            <HistoryPlaylist />
          </Route>
          <Route
            path="/playlist/:playlistName"
            render={(props) => <PlaylistVideos {...props} />}
          />
          <Route path="/allPlaylists">
            <AllPlaylists/>
          </Route>

          <Route path="/">
            <HomePageGrid />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
