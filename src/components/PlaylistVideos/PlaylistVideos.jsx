import React from 'react';
import { useParams } from 'react-router-dom';

const PlaylistVideos = (props) => {
    const params = useParams();
    console.log("Params => ", params)
    return (
       <h1>hi</h1>
    )
}

export default PlaylistVideos
