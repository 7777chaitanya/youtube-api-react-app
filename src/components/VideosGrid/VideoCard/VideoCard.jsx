import React, { useState, useContext } from "react";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import useStyles from "./styles";
import { Box, Tooltip } from "@material-ui/core";
import { motion } from "framer-motion";
import IframePopover from "../IframePopover/IframePopover";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import addToLikedVideos from "../../../firestoreFunctions/addToLikedVideos";
import removeFromLikedVideos from "../../../firestoreFunctions/removeFromLikedVideos";
import addToSavedVideos from "../../../firestoreFunctions/addToSavedVideos";
import removeFromSavedVideos from "../../../firestoreFunctions/removeFromSavedVideos";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import PlaylistPopover from "./PlaylistPopover/PlaylistPopover";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";
import { useLocation } from "react-router-dom";
import removeVideoFromPlaylist from "../../../firestoreFunctions/removeVideoFromPlaylist";
import { PlaylistContext } from "../../../contexts/PlaylistContext";

export default function VideoCard({ eachVideo, playlistName }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const { playlist } = useContext(PlaylistContext);
  const location = useLocation();

  // console.log("video card => ",playlist)

  const [liked, setLiked] = useState(() => {
    return playlist?.likedVideos?.includes(eachVideo) ? true : false;
  });
  const [saved, setSaved] = useState(() => {
    return playlist?.savedVideos?.includes(eachVideo) ? true : false;
  });

  //iframe popover state
  const [anchorEl, setAnchorEl] = React.useState(false);

  const handleClick = (event) => {
    setAnchorEl(true);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleDislike = () => {
    removeFromLikedVideos(eachVideo);
    setLiked(false);
  };

  const handleLike = () => {
    addToLikedVideos(eachVideo);
    setLiked(true);
  };

  const returnRequiredLikeIcon = () => {
    if (liked) {
      return (
        <IconButton onClick={handleDislike} color="primary">
          <FavoriteIcon />
        </IconButton>
      );
    } else {
      return (
        <IconButton onClick={handleLike} color="secondary">
          <FavoriteBorderIcon />
        </IconButton>
      );
    }
  };

  const handleUnsave = () => {
    removeFromSavedVideos(eachVideo);
    setSaved(false);
  };

  const handleSave = () => {
    addToSavedVideos(eachVideo);
    setSaved(true);
  };

  const returnRequiredSaveIcon = () => {
    if (saved) {
      return (
        <IconButton onClick={handleUnsave} color="primary">
          <BookmarkIcon />
        </IconButton>
      );
    } else {
      return (
        <IconButton onClick={handleSave} color="secondary">
          <BookmarkBorderIcon />
        </IconButton>
      );
    }
  };

  //playlist popover state
  const [anchorEl1, setAnchorEl1] = React.useState(null);

  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };

  const handleClose1 = () => {
    setAnchorEl1(null);
  };

  const [openUrlCopiedSnackBar, setOpenUrlCopiedSnackBar] =
    React.useState(false);

  const handleShareButtonSnackBarOpen = () => {
    setOpenUrlCopiedSnackBar(true);
  };

  const handleShareButtonSnackBarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenUrlCopiedSnackBar(false);
  };

  const handleCopyImageUrl = () => {
    navigator.clipboard.writeText(
      `https://www.youtube.com/watch?v=${eachVideo.id.videoId}`
    );
    handleShareButtonSnackBarOpen();
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {eachVideo?.snippet?.channelTitle[0].toUpperCase()}
          </Avatar>
        }
     
        title={eachVideo?.snippet?.channelTitle}
        subheader={new Date(eachVideo?.snippet?.publishTime).toDateString()}
      />
      <motion.div whileHover={{ scale: 0.9 }} whileTap={{ scale: 1.0 }}>
        <CardMedia
          className={classes.media}
          image={eachVideo?.snippet?.thumbnails?.high?.url}
          onClick={handleClick}
        ></CardMedia>
      </motion.div>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {eachVideo?.snippet?.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        {returnRequiredLikeIcon()}
        {returnRequiredSaveIcon()}
        <Tooltip title="Add to playlist">
          <IconButton aria-label="add to favorites" onClick={handleClick1}>
            <PlaylistAddIcon color="secondary" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Copy video URL">
          <IconButton aria-label="share" onClick={handleCopyImageUrl}>
            <ShareIcon color="secondary" />
          </IconButton>
        </Tooltip>
        {location.pathname !== "/" && (
          <Tooltip title="Remove from playlist">
            <IconButton
              onClick={() => removeVideoFromPlaylist(eachVideo, playlistName)}
            >
              <RemoveCircleOutlineIcon color="secondary" />
            </IconButton>
          </Tooltip>
        )}
      </CardActions>
      <IframePopover
        anchorEl={anchorEl}
        handleClick={handleClick}
        handleClose={handleClose}
        eachVideo={eachVideo}
      />

      <PlaylistPopover
        anchorEl1={anchorEl1}
        handleClick1={handleClick1}
        handleClose1={handleClose1}
        eachVideo={eachVideo}
      />

      <Snackbar
        open={openUrlCopiedSnackBar}
        autoHideDuration={1000}
        onClose={handleShareButtonSnackBarClose}
      >
        <Alert onClose={handleShareButtonSnackBarClose} severity="success">
          Video URL copied!
        </Alert>
      </Snackbar>
    </Card>
  );
}
