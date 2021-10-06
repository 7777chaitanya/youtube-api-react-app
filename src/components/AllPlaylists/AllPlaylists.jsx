import { useContext, useState } from "react";
import { PlaylistContext } from "../../contexts/PlaylistContext";
import useStyles from "./styles";
import { Grid, Popover, Typography } from "@material-ui/core";
import EachGridItem from "./EachGridItem/EachGridItem";
import { Link } from "react-router-dom";

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

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

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

    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>The content of the Popover.</Typography>
      </Popover>

    </>
  );
};

export default AllPlaylists;
