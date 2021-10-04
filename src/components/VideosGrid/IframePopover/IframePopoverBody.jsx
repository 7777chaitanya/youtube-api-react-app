import React from "react";
import useStyles from "./styles";
import Typography from "@material-ui/core/Typography";
import { Card } from "@material-ui/core";

const IframePopoverBody = () => {
  const classes = useStyles();
  return (
    <Card className={classes.popOverCard}>
      <Typography className={classes.typography}>
        The content of the Popover.
      </Typography>
    </Card>
  );
};

export default IframePopoverBody;
