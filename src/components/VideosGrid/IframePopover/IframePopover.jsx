import React from 'react';
import Popover from '@material-ui/core/Popover';

import useStyles from "./styles";
import IframePopoverBody from './IframePopoverBody';
import addToHistoryVideos from "../../../firestoreFunctions/addToHistoryVideos";


export default function IframePopover({anchorEl,handleClick,handleClose, eachVideo}) {
  const classes = useStyles();
 

  const open = (anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleAddToHistoryPlaylist = () => {
    console.log("ev id=> ",eachVideo.id.videoId);
    addToHistoryVideos(eachVideo);
    
}

  return (
    <div>
      {/* <Button aria-describedby={id} variant="contained" color="primary" onClick={handleClick}>
        Open Popover
      </Button> */}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
        onClick={handleAddToHistoryPlaylist}
      >
          <IframePopoverBody eachVideo={eachVideo}/>
      </Popover>
    </div>
  );
}
