import React from "react";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import HistoryVideoCard from "./HistoryVideoCard/HistoryVideoCard";

const VideosGrid = ({ videos, playlistName }) => {
  const classes = useStyles();
//   console.log("videos _> ", videos);

 
  return (
    <>
    <Grid container>
      
      {videos?.map((eachVideo) => (
        <Grid item xs={12} sm={6} md={4} key={eachVideo?.eachVideo?.id?.videoId}>
          <HistoryVideoCard eachVideo={eachVideo?.eachVideo}  playlistName={playlistName} watchedDate={eachVideo?.date?.toDate()}/>
        </Grid>
      ))}
    </Grid>
    </>
  );
};

export default VideosGrid;
