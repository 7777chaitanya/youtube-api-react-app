import React from 'react';
import Popover from '@material-ui/core/Popover';

import useStyles from "./styles";
import IframePopoverBody from './IframePopoverBody';


export default function IframePopover({anchorEl,handleClick,handleClose, eachVideo}) {
  const classes = useStyles();
 

  const open = (anchorEl);
  const id = open ? 'simple-popover' : undefined;

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
      >
          <IframePopoverBody eachVideo={eachVideo}/>
      </Popover>
    </div>
  );
}
