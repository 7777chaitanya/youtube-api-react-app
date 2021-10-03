import React from "react";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import VideoCard from "./VideoCard/VideoCard";

const VideosGrid = ({ videos }) => {
  const classes = useStyles();
  console.log("videos _> ", videos);
  return (
    <Grid container>
      
      {videos[0]?.map((eachVideo) => (
        <Grid item xs={12} sm={6} md={4}>
          <VideoCard eachVideo={eachVideo} />
        </Grid>
      ))}
    </Grid>
  );
};

export default VideosGrid;
