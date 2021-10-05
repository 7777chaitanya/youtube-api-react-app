import React, { useContext } from "react";
import useStyles from "./styles";
import VideosGrid from "../VideosGrid/VideosGrid";
import { PlaylistContext } from "../../contexts/PlaylistContext";
import {IconButton} from "@material-ui/core";
import deletePlaylist from "../../firestoreFunctions/deletePlaylist";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const SavedVideosGrid = () => {
  const classes = useStyles();
  const { playlist } = useContext(PlaylistContext);
  console.log("sv => ", playlist?.savedVideos);

  return (
    <div style={{ marginTop: "20rem" }}>
      Saved Videos grid
      <IconButton onClick={() => deletePlaylist("savedVideos")}>
        <DeleteForeverIcon />
      </IconButton>
      <VideosGrid videos={playlist?.savedVideos} playlistName="savedVideos" />
    </div>
  );
};

export default SavedVideosGrid;
