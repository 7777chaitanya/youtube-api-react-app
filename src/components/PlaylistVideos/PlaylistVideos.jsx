import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PlaylistContext } from "../../contexts/PlaylistContext";
import VideosGrid from "../VideosGrid/VideosGrid";
import {IconButton, Typography} from "@material-ui/core";
import deletePlaylist from "../../firestoreFunctions/deletePlaylist";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const PlaylistVideos = (props) => {
  const params = useParams();
  const { playlist } = useContext(PlaylistContext);
  const playlistName = params?.playlistName;

  console.log("Params => ", params);
  return (
    <>
      <div style={{ marginTop: "5rem" }}>
        <Typography variant="h5">{playlistName}</Typography>
        <IconButton onClick={() => deletePlaylist(playlistName)}>
                <DeleteForeverIcon/>
            </IconButton>
        {playlist&& playlistName && 
        <VideosGrid videos={playlist[playlistName]} playlistName={playlistName}/>}
      </div>

      {/* <h1>{params?.playlistName}</h1> */}
    </>
  );
};

export default PlaylistVideos;
