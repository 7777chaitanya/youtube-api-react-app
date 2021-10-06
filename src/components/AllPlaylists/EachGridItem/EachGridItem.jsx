import React from 'react';
import useStyles from "./styles";
import {Typography} from "@material-ui/core";

const EachGridItem = ({item}) => {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h1">{item}</Typography>
        </div>
    )
}

export default EachGridItem
