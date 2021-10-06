import React from "react";
import useStyles from "./styles";
import { Typography, Paper } from "@material-ui/core";

const EachGridItem = ({ item }) => {
  const classes = useStyles();
  return (
    <div>
      <Paper className={classes.eachItemCard} elevation={7} >
        <Typography variant="h6">{item}</Typography>
      </Paper>
    </div>
  );
};

export default EachGridItem;
