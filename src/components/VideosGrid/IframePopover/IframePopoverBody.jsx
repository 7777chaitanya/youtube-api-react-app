import React from 'react';
import useStyles from "./styles";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const IframePopoverBody = () => {
    const classes = useStyles();
    return (
        <Typography className={classes.typography}>The content of the Popover.</Typography>


    )
}

export default IframePopoverBody
