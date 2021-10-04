import React from "react";
import useStyles from "./styles";
import Typography from "@material-ui/core/Typography";
import { Card,Box} from "@material-ui/core";

const IframePopoverBody = ({eachVideo}) => {
  const classes = useStyles();
  return (
   
      <Box className={classes.iframeBox}>
      <iframe
        frameBorder="0"
        height="100%"
        width="100%"
        title="Video Player"
        src={`https://www.youtube.com/embed/${eachVideo.id.videoId}`}
        
      />
      </Box>
  );
};

export default IframePopoverBody;
