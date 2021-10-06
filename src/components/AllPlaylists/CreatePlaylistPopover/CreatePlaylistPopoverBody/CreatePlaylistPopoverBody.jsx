import React,{useRef} from "react";
import { Typography, Box, TextField, Button } from '@material-ui/core';
import useStyles from "./styles";
import createPlaylistInFirestore from '../../../../firestoreFunctions/createPlaylistInFirestore';

const CreatePlaylistPopoverBody = ({handleClose}) => {
    const classes = useStyles();
    const playlistNameRef = useRef(null);

    
  return (
      
      <Box className={classes.playlistDetailsBox}>

      <TextField
          id="standard-password-input"
          label="Enter playlist name"
          autoComplete="current-password"
          inputRef={playlistNameRef}
          autoFocus
        />

        <Button color="primary" variant="contained"
        onClick={() => createPlaylistInFirestore(playlistNameRef.current.value, handleClose )}
        >
            Create playlist
        </Button>
      </Box>
  );
};

export default CreatePlaylistPopoverBody;
