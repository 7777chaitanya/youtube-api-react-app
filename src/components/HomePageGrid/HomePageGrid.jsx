import { Grid, Typography, Button } from "@material-ui/core";
import React, { useContext } from "react";
import { HomePageVideosContext } from "../../contexts/HomePageVideosContext";
import VideosGrid from "../VideosGrid/VideosGrid";
import ButtonGrid from "./ButtonGrid/ButtonGrid";

import useStyles from "./styles";

const HomePageGrid = () => {
  const classes = useStyles();
  const {
    HomePageVideos,
    setHomePageVideos,
    searchTerm,
    setsearchTerm,
    handleSubmit,
  } = useContext(HomePageVideosContext);

  console.log("hp=>/",HomePageVideos[0]);

  const handleGoToTop = () => {
      window.scrollTo(0,0)
  }

  return (
    <>
    {HomePageVideos.length===0 && (
      <Typography variant="h4" align="center">
        Loading Videos....
      </Typography>
    )}
    <Grid container>
      <Grid item xs={12}>
        <ButtonGrid />
      </Grid>
      <Grid item xs={12}>
        <VideosGrid videos={HomePageVideos[0]} />
      </Grid>
    </Grid>
    <Button onClick={handleGoToTop}>Go to top</Button>
    </>
  );
};

export default HomePageGrid;
