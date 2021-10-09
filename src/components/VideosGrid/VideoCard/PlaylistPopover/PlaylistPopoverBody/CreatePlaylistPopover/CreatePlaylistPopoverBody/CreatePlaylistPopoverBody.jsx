import React, { useRef, useState } from "react";
import { Typography, Box, TextField, Button } from "@material-ui/core";
import useStyles from "./styles";
import createPlaylistInFirestoreAndaddVideo from "../../../../../../../firestoreFunctions/createPlaylistInFirestoreAndaddVideo";

const CreatePlaylistPopoverBody = ({ eachVideo, handleClose }) => {
  const classes = useStyles();
  const playlistNameRef = useRef(null);

  const [disabledButton, setDisabledButton] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    createPlaylistInFirestoreAndaddVideo(
      playlistNameRef.current.value,
      eachVideo,
      handleClose
    );
  };

  const handleChange = () => {
    if (playlistNameRef.current.value.length === 0) {
      setDisabledButton(true);
    } else {
      setDisabledButton(false);
    }
  };

  return (
    <form action="submit" onSubmit={handleSubmit}>
      <Box className={classes.playlistDetailsBox}>
        <TextField
          id="standard-password-input"
          label="Enter playlist name"
          autoComplete="current-password"
          inputRef={playlistNameRef}
          autoFocus
          onChange={handleChange}
        />

        <Button
          color="primary"
          variant="contained"
          type="submit"
          onClick={handleSubmit}
          disabled={disabledButton}
        >
          Create playlist
        </Button>
      </Box>
    </form>
  );
};

export default CreatePlaylistPopoverBody;
