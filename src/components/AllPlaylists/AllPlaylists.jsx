import { useContext, useState } from "react";
import { PlaylistContext } from "../../contexts/PlaylistContext";
import useStyles from "./styles";
import { Grid, Popover, Typography } from "@material-ui/core";
import EachGridItem from "./EachGridItem/EachGridItem";
import { Link } from "react-router-dom";
import CreatePlaylistPopover from "./CreatePlaylistPopover/CreatePlaylistPopover";

const AllPlaylists = () => {
  const { playlist } = useContext(PlaylistContext);
  const classes = useStyles();

  const handleButtonClick = () => {
    console.log("handle button click");
  };

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
      <>
    <Grid container className={classes.playlistGrid}>
      {playlist.allPlaylists?.map((item) => (
        <Grid
          item
          key={item}
          xs={6}
          sm={4}
          md={3}
          component={Link}
          to={`/playlist/${item}`}
        >
          <EachGridItem item={item} />
        </Grid>
      ))}
      <Grid item xs={6}
          sm={4}
          md={3}
          onClick={handleClick}

          >
        <EachGridItem
          item="Create Playlist"
        />
      </Grid>
    </Grid>

    <CreatePlaylistPopover
        anchorEl={anchorEl}
        handleClose={handleClose}
       
      />

    </>
  );
};

export default AllPlaylists;
