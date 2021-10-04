import React from "react";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import VideoCard from "./VideoCard/VideoCard";
import IframePopover from "./IframePopover/IframePopover";

const VideosGrid = ({ videos }) => {
  const classes = useStyles();
  console.log("videos _> ", videos);

 
  return (
    <>
    <Grid container>
      
      {videos?.map((eachVideo) => (
        <Grid item xs={12} sm={6} md={4} key={eachVideo?.id?.videoId}>
          <VideoCard eachVideo={eachVideo}  />
        </Grid>
      ))}
    </Grid>
    </>
  );
};

export default VideosGrid;
