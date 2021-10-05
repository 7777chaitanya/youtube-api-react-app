import { useContext } from "react";
import { useParams } from "react-router-dom";
import { PlaylistContext } from "../../contexts/PlaylistContext";
import VideosGrid from "../VideosGrid/VideosGrid";

const PlaylistVideos = (props) => {
  const params = useParams();
  const { playlist } = useContext(PlaylistContext);
  const playlistName = params?.playlistName;

  console.log("Params => ", params);
  return (
    <>
      <div style={{ marginTop: "5rem" }}>
        {playlist&& playlistName && 
        <VideosGrid videos={playlist[playlistName]} />}
      </div>

      {/* <h1>{params?.playlistName}</h1> */}
    </>
  );
};

export default PlaylistVideos;
