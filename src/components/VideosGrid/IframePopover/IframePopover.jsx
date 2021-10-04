import React from 'react';
import Popover from '@material-ui/core/Popover';

import useStyles from "./styles";
import IframePopoverBody from './IframePopoverBody';


export default function IframePopover({anchorEl,handleClick,handleClose}) {
  const classes = useStyles();
 

  const open = Boolean(anchorEl);
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
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
          <IframePopoverBody/>
      </Popover>
    </div>
  );
}
