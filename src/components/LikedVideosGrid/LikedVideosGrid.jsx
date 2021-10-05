import React, {useContext} from 'react';
import { PlaylistContext } from '../../contexts/PlaylistContext';
import VideosGrid from "../VideosGrid/VideosGrid"

import useStyles from "./styles";

const LikedVideosGrid = () => {
    const classes = useStyles();
    const {playlist} = useContext(PlaylistContext);
    return (
        <div style={{marginTop : "20rem"}}>
            LikedVideosGrid
            <VideosGrid videos={playlist?.likedVideos} playlistName="likedVideos"/>
        </div>
    )
}

export default LikedVideosGrid
