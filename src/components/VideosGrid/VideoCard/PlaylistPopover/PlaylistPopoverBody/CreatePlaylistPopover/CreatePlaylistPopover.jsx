import { Popover, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./styles";
import CreatePlaylistPopoverBody from "./CreatePlaylistPopoverBody/CreatePlaylistPopoverBody";

const CreatePlaylistPopover = ({anchorEl,handleClose, eachVideo}) => {
    const classes = useStyles();

    const open = anchorEl;
    const id = open ? "simple-popover" : undefined;
  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
    >
      <CreatePlaylistPopoverBody eachVideo={eachVideo} handleClose={handleClose} />
    </Popover>
  );
};

export default CreatePlaylistPopover;
