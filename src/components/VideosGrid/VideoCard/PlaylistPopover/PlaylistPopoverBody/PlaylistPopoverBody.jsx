import React, {useContext} from "react";
import { Typography } from "@material-ui/core";
import useStyles from "./styles"
import { List, ListItem, ListItemText, Divider } from '@material-ui/core';
import { PlaylistContext } from "../../../../../contexts/PlaylistContext";
import addToRequiredPlaylist from "../../../../../firestoreFunctions/addToRequiredPlaylist"


const PlaylistPopoverBody = ({eachVideo, handleClose1}) => {
  const classes = useStyles();
  const {playlist} = useContext(PlaylistContext);

  

  return (
    <div>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Spam" />
        </ListItem>
        {playlist.allPlaylists.map(eachItem => 
            <ListItem button onClick={() => addToRequiredPlaylist(eachVideo, eachItem, handleClose1)}>
            <ListItemText primary={eachItem} />
          </ListItem>
            )}


        <Divider/>
        <ListItem button>
          <ListItemText primary="Create new playlist" />
        </ListItem>
      </List>
    </div>
  );
};

export default PlaylistPopoverBody;
