import React, { useContext } from "react";
import { PlaylistContext } from "../../contexts/PlaylistContext";
import VideosGrid from "../VideosGrid/VideosGrid";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { IconButton, Typography } from "@material-ui/core";
import deletePlaylist from "../../firestoreFunctions/deletePlaylist";
import { Box, Paper, Divider } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

import useStyles from "./styles";

const LikedVideosGrid = () => {
  const classes = useStyles();
  const { playlist } = useContext(PlaylistContext);
  
  const handleGoToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div style={{ marginTop: "5rem" }}>
      <Box className={classes.headerBox}>
        <Typography variant="h4" align="center">
          {" "}
          Liked Videos
        </Typography>

        <IconButton onClick={() => deletePlaylist("likedVideos")}>
          <DeleteForeverIcon color="secondary" className={classes.deleteIcon} />
        </IconButton>
      </Box>
      <Divider className={classes.headerDivider} />
      {playlist?.likedVideos?.length == 0 ? (
        <Paper elevation={9} className={classes.noItemsPaper}>
          <Typography variant="h5" align="center">
            There are no liked videos
          </Typography>
        </Paper>
      ) : (
        <VideosGrid videos={playlist?.likedVideos} playlistName="likedVideos" />
      )}
      <Box className={classes.goToTopButtonBox}>
        <IconButton onClick={handleGoToTop}>
          <ArrowUpwardIcon />
        </IconButton>
      </Box>
    </div>
  );
};

export default LikedVideosGrid;
