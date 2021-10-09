import React, { useContext } from "react";
import { PlaylistContext } from "../../contexts/PlaylistContext";
import HistoryVideosGrid from "..//HistoryVideosGrid/HistoryVideosGrid";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import { IconButton, Typography } from "@material-ui/core";
import deletePlaylist from "../../firestoreFunctions/deletePlaylist";
import { Box, Paper, Divider, Tooltip } from "@material-ui/core";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import useStyles from "./styles";

const HistoryPlaylist = () => {
  const classes = useStyles();
  const { playlist } = useContext(PlaylistContext);
  const sortedVideos = playlist?.history?.sort((a, b) => {
    return b.date.toDate() - a.date.toDate();
  });
  console.log("sorted Videos => ", sortedVideos);

  const handleGoToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div style={{ marginTop: "5rem" }}>
      <Box className={classes.headerBox}>
        <Typography variant="h4" align="center">
          {" "}
          History
        </Typography>

        <IconButton onClick={() => deletePlaylist("history")}>
          <DeleteForeverIcon color="secondary" className={classes.deleteIcon} />
        </IconButton>
      </Box>
      <Divider className={classes.headerDivider} />
      {playlist?.history?.length == 0 ? (
        <Paper elevation={9} className={classes.noItemsPaper}>
          <Typography variant="h5" align="center">
            Your watch history is empty
          </Typography>
        </Paper>
      ) : (
        <HistoryVideosGrid videos={sortedVideos} playlistName="history" />
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

export default HistoryPlaylist;
