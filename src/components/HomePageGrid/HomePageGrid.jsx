import { Grid } from "@material-ui/core";
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

  

  return (
    <Grid container>
      <Grid item xs={12}>
        <ButtonGrid />
      </Grid>
      <Grid item xs={12}>
        <VideosGrid videos={HomePageVideos} />
      </Grid>
    </Grid>
  );
};

export default HomePageGrid;
