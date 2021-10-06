import { useContext } from "react";
import { PlaylistContext } from "../../contexts/PlaylistContext";
import useStyles from "./styles";
import { Grid } from "@material-ui/core";
import EachGridItem from "./EachGridItem/EachGridItem";
import { Link } from "react-router-dom";

const AllPlaylists = () => {
  const { playlist } = useContext(PlaylistContext);
  const classes = useStyles();

  const handleButtonClick = () => {
    console.log("handle button click");
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
          onClick={handleButtonClick}

          >
        <EachGridItem
          item="Create Playlist"
          button
        />
      </Grid>
    </Grid>
        
    </>
  );
};

export default AllPlaylists;
