import React, { useContext } from "react";
import useStyles from "./styles";
import VideosGrid from "../VideosGrid/VideosGrid";
import { PlaylistContext } from "../../contexts/PlaylistContext";
import { IconButton, Typography, Paper, Box, Tooltip } from "@material-ui/core";
import deletePlaylist from "../../firestoreFunctions/deletePlaylist";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";


const SavedVideosGrid = () => {
  const classes = useStyles();
  const { playlist } = useContext(PlaylistContext);
  console.log("sv => ", playlist?.savedVideos);

  const handleGoToTop = () => {
    window.scrollTo(0,0)
}

  return (
    <div style={{ marginTop: "5rem" }}>
     <Box className={classes.headerBox}>
        <Typography variant="h4" align="center">
          Saved Videos
        </Typography>

        <IconButton onClick={() => deletePlaylist("likedVideos")}>
          <DeleteForeverIcon color="secondary" className={classes.deleteIcon}/>
        </IconButton>
      </Box>
      {playlist?.savedVideos?.length == 0 ? (
                <Paper elevation={9} className={classes.noItemsPaper}>
                <Typography variant="h5" align="center">
                  There are no saved videos
                </Typography>
              </Paper>
      ) : (
        <VideosGrid videos={playlist?.savedVideos} playlistName="savedVideos" />
      )}
       <Box className={classes.goToTopButtonBox}>
       <Tooltip title="Go to top">

        <IconButton onClick={handleGoToTop}>
          <ArrowUpwardIcon />
        </IconButton>
        </Tooltip>
      </Box>
    </div>
  );
};

export default SavedVideosGrid;
