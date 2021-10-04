import React from "react";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import VideoCard from "./VideoCard/VideoCard";
import IframePopover from "./IframePopover/IframePopover";

const VideosGrid = ({ videos }) => {
  const classes = useStyles();
  console.log("videos _> ", videos);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
    <Grid container>
      
      {videos[0]?.map((eachVideo) => (
        <Grid item xs={12} sm={6} md={4}>
          <VideoCard eachVideo={eachVideo} anchorEl={anchorEl} handleClick={handleClick} handleClose={handleClose} />
        </Grid>
      ))}
    </Grid>
    <IframePopover anchorEl={anchorEl} handleClick={handleClick} handleClose={handleClose} />
    </>
  );
};

export default VideosGrid;
