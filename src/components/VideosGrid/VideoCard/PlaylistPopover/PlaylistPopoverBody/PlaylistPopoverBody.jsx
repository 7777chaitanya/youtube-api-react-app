import React, { useContext } from "react";
import { Typography, Popover } from "@material-ui/core";
import useStyles from "./styles";
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";
import { PlaylistContext } from "../../../../../contexts/PlaylistContext";
import addToRequiredPlaylist from "../../../../../firestoreFunctions/addToRequiredPlaylist";
import CreatePlaylistPopover from "./CreatePlaylistPopover/CreatePlaylistPopover";

const PlaylistPopoverBody = ({ eachVideo, handleClose1 }) => {
  const classes = useStyles();
  const { playlist } = useContext(PlaylistContext);

  //create playlist popover body
  const [anchorEl, setAnchorEl] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(false);
    handleClose1();
  };



  return (
    <div>
      <List component="nav" aria-label="secondary mailbox folders">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Spam" />
        </ListItem>
        {playlist.allPlaylists.map((eachItem) => (
          <ListItem
            button
            onClick={() =>
              addToRequiredPlaylist(eachVideo, eachItem, handleClose1)
            }
          >
            <ListItemText primary={eachItem} />
          </ListItem>
        ))}

        <Divider />
        <ListItem button onClick={handleClick}>
          <ListItemText primary="Create new playlist" />
        </ListItem>
      </List>

      <CreatePlaylistPopover anchorEl={anchorEl} handleClose={handleClose} eachVideo={eachVideo}/>


    </div>
  );
};

export default PlaylistPopoverBody;
