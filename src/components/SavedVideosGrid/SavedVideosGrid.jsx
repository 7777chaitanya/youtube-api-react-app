import React, { useContext } from "react";
import useStyles from "./styles";
import VideosGrid from "../VideosGrid/VideosGrid";
import { PlaylistContext } from "../../contexts/PlaylistContext";

const SavedVideosGrid = () => {
  const classes = useStyles();
  const { playlist } = useContext(PlaylistContext);
  console.log('sv => ',playlist?.savedVideos)

  return (
    <div style={{ marginTop: "20rem" }}>
      Saved Videos grid
      <VideosGrid videos={playlist?.savedVideos} />
    </div>
  );
};

export default SavedVideosGrid;
