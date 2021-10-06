import { useContext } from "react";
import { useParams, useHistory } from "react-router-dom";
import { PlaylistContext } from "../../contexts/PlaylistContext";
import VideosGrid from "../VideosGrid/VideosGrid";
import {IconButton, Typography} from "@material-ui/core";
import deletePlaylist from "../../firestoreFunctions/deletePlaylist";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';



const PlaylistVideos = (props) => {
  const params = useParams();
  const { playlist } = useContext(PlaylistContext);
  const playlistName = params?.playlistName;
  const history = useHistory();

  const handlePlaylistDelete = () => {
    deletePlaylist(playlistName);
    history.push("/")
  }

  console.log("Params => ", params);
  return (
    <>
      <div style={{ marginTop: "5rem" }}>
        <Typography variant="h5">{playlistName}</Typography>
        <IconButton onClick={handlePlaylistDelete}>
                <DeleteForeverIcon/>
            </IconButton>

            {playlist&& playlistName && 
            (playlist[playlistName]?.length==0 ?
            (<Typography variant="h5">There are no videos in this playlist</Typography>)
            :

        
        <VideosGrid videos={playlist[playlistName]} playlistName={playlistName}/>)}
      </div>

      {/* <h1>{params?.playlistName}</h1> */}
    </>
  );
};

export default PlaylistVideos;
