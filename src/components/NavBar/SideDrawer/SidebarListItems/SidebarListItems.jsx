import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import {useHistory} from "react-router-dom";
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import BookmarksIcon from '@material-ui/icons/Bookmarks';
import HistoryIcon from '@material-ui/icons/History';

const SidebarListItems = () => {
    const handleButtonClick = (buttonContent) => {
        console.log(buttonContent)
        history.push(`/${buttonContent}`);
    }

    const history = useHistory();

  return (
    <List>
      <ListItem button onClick={()=>handleButtonClick("likedVideos")}>
        <ListItemIcon>
          <ThumbUpAltIcon />
        </ListItemIcon>
        <ListItemText primary="Liked Videos" />
      </ListItem>

      <ListItem button onClick={()=>handleButtonClick("savedVideos")}>
        <ListItemIcon>
          <BookmarksIcon />
        </ListItemIcon>
        <ListItemText primary="Saved Videos" />
      </ListItem>

      <ListItem button onClick={()=>handleButtonClick("history")}>
        <ListItemIcon>
          <HistoryIcon />
        </ListItemIcon>
        <ListItemText primary="History" />
      </ListItem>

    </List>
  );
};

export default SidebarListItems;
