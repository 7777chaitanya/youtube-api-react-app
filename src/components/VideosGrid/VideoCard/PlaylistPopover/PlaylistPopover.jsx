import React from "react";
import { Popover, Typography } from "@material-ui/core";
import useStyles from "./styles";
import PlaylistPopoverBody from "./PlaylistPopoverBody/PlaylistPopoverBody"

const PlaylistPopover = ({
  anchorEl1,
  handleClick1,
  handleClose1,
  eachVideo,
}) => {
  const classes = useStyles();
  const open1 = Boolean(anchorEl1);
  const id1 = open1 ? "simple-popover" : undefined;
  return (
    <Popover
      id={id1}
      open={open1}
      anchorEl={anchorEl1}
      onClose={handleClose1}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
    >
   
      <PlaylistPopoverBody/>
    </Popover>
  );
};

export default PlaylistPopover;
