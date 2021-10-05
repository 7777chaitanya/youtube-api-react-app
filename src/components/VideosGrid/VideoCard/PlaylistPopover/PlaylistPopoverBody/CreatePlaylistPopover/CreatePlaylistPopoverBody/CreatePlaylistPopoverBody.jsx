import React,{useRef} from "react";
import { Typography, Box, TextField, Button } from '@material-ui/core';
import useStyles from "./styles";
import createPlaylistInFirestoreAndaddVideo from "../../../../../../../firestoreFunctions/createPlaylistInFirestoreAndaddVideo"


const CreatePlaylistPopoverBody = ({eachVideo, handleClose}) => {
    const classes = useStyles();
    const playlistNameRef = useRef(null);

    
  return (
      
      <Box className={classes.playlistDetailsBox}>

      <TextField
          id="standard-password-input"
          label="Enter playlist name"
          autoComplete="current-password"
          inputRef={playlistNameRef}
        />

        <Button color="primary" variant="contained"
        onClick={() => createPlaylistInFirestoreAndaddVideo(playlistNameRef.current.value,eachVideo, handleClose )}
        >
            Create playlist
        </Button>
      </Box>
  );
};

export default CreatePlaylistPopoverBody;
