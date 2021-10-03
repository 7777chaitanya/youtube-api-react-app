import { Grid } from "@material-ui/core";
import React from "react";
import VideosGrid from "../VideosGrid/VideosGrid";
import ButtonGrid from "./ButtonGrid/ButtonGrid"

import useStyles from "./styles";

const HomePageGrid = () => {
const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}> 
          <ButtonGrid/>
      </Grid >
      <Grid item xs={12}>
        <VideosGrid />
      </Grid>
    </Grid>
  );
};

export default HomePageGrid;
