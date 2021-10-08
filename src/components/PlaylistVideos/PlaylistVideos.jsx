import { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { PlaylistContext } from "../../contexts/PlaylistContext";
import VideosGrid from "../VideosGrid/VideosGrid";
import { IconButton, Typography, Box } from "@material-ui/core";
import deletePlaylist from "../../firestoreFunctions/deletePlaylist";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import useStyles from "./styles";

const PlaylistVideos = (props) => {
  const params = useParams();
  const { playlist } = useContext(PlaylistContext);
  const playlistName = params?.playlistName;
  const history = useHistory();
  const classes = useStyles();

  const handlePlaylistDelete = () => {
    deletePlaylist(playlistName);
    history.push("/");
  };

  const handleGoToTop = () => {
    window.scrollTo(0, 0);
  };

  console.log("Params => ", params);
  return (
    <>
      <div style={{ marginTop: "5rem" }}>
        <Box className={classes.headerBox}>
          <Typography variant="h4" align="center">
            {playlistName}
          </Typography>

          <IconButton onClick={handlePlaylistDelete}>
            <DeleteForeverIcon
              color="secondary"
              className={classes.deleteIcon}
            />
          </IconButton>
        </Box>

        {playlist &&
          playlistName &&
          (playlist[playlistName]?.length == 0 ? (
            <Typography variant="h5">
              There are no videos in this playlist
            </Typography>
          ) : (
            <VideosGrid
              videos={playlist[playlistName]}
              playlistName={playlistName}
            />
          ))}
        <Box className={classes.goToTopButtonBox}>
          <IconButton onClick={handleGoToTop}>
            <ArrowUpwardIcon />
          </IconButton>
        </Box>
      </div>

      {/* <h1>{params?.playlistName}</h1> */}
    </>
  );
};

export default PlaylistVideos;
