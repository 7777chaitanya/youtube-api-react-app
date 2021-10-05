import React, {useContext} from 'react';
import { PlaylistContext } from '../../contexts/PlaylistContext';
import VideosGrid from "../VideosGrid/VideosGrid";
import useStyles from "./styles";

const HistoryPlaylist = () => {
    const classes = useStyles();
    const {playlist} = useContext(PlaylistContext);
    const sortedVideos = playlist?.history?.sort((a,b)=> {return b.date.toDate()-a.date.toDate()})
    console.log("sorted Videos => ", sortedVideos)
    return (
        <div style={{marginTop : "20rem"}}>
            history
            {/* <VideosGrid videos={playlist?.history} /> */}
            {sortedVideos?.map(ev => <h6>{ev.eachVideo.snippet.channelTitle}</h6>)}
        </div>
    )
}

export default HistoryPlaylist
