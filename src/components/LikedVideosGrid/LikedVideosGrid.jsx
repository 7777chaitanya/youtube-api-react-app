import React, {useContext} from 'react';
import { PlaylistContext } from '../../contexts/PlaylistContext';
import VideosGrid from "../VideosGrid/VideosGrid";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {IconButton} from "@material-ui/core";
import deletePlaylist from "../../firestoreFunctions/deletePlaylist"

import useStyles from "./styles";

const LikedVideosGrid = () => {
    const classes = useStyles();
    const {playlist} = useContext(PlaylistContext);
    return (
        <div style={{marginTop : "20rem"}}>
            LikedVideosGrid
            <IconButton onClick={() => deletePlaylist("likedVideos")}>
                <DeleteForeverIcon/>
            </IconButton>

            <VideosGrid videos={playlist?.likedVideos} playlistName="likedVideos"/>
        </div>
    )
}

export default LikedVideosGrid
