import React, {useContext} from 'react';
import { PlaylistContext } from '../../contexts/PlaylistContext';
import VideosGrid from "../VideosGrid/VideosGrid";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import {IconButton, Typography} from "@material-ui/core";
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

            {playlist?.likedVideos?.length==0 ?
            <Typography variant="h5">There are no liked videos</Typography>
            :

            <VideosGrid videos={playlist?.likedVideos} playlistName="likedVideos"/>}
        </div>
    )
}

export default LikedVideosGrid
