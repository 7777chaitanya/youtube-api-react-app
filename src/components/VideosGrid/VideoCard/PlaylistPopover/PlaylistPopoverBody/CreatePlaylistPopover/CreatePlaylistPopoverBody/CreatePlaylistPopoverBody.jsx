import React from "react";
import { Typography } from '@material-ui/core';
import useStyles from "./styles";

const CreatePlaylistPopoverBody = () => {
    const classes = useStyles();
  return (
    <div>
      <Typography className={classes.typography}>
        The content of the Popover.
      </Typography>
    </div>
  );
};

export default CreatePlaylistPopoverBody;
