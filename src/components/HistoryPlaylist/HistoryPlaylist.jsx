import React, {useContext} from 'react';
import { PlaylistContext } from '../../contexts/PlaylistContext';
import VideosGrid from "../VideosGrid/VideosGrid";
import useStyles from "./styles";

const HistoryPlaylist = () => {
    const classes = useStyles();
    const {playlist} = useContext(PlaylistContext);
    return (
        <div style={{marginTop : "20rem"}}>
            history
            <VideosGrid videos={playlist?.history} />
        </div>
    )
}

export default HistoryPlaylist
