import React, { useContext } from "react";
import { Typography, Popover } from "@material-ui/core";
import useStyles from "./styles";
import { List, ListItem, ListItemText, Divider } from "@material-ui/core";
import { PlaylistContext } from "../../../../../contexts/PlaylistContext";
import addToRequiredPlaylist from "../../../../../firestoreFunctions/addToRequiredPlaylist";

const PlaylistPopoverBody = ({ eachVideo, handleClose1 }) => {
  const classes = useStyles();
  const { playlist } = useContext(PlaylistContext);

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

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

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Typography className={classes.typography}>
          The content of the Popover.
        </Typography>
      </Popover>
    </div>
  );
};

export default PlaylistPopoverBody;
