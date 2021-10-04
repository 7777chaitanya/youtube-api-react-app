import React from "react";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import {useHistory} from "react-router-dom";

const SidebarListItems = () => {
    const handleButtonClick = (buttonContent) => {
        console.log(buttonContent)
        history.push(`/${buttonContent}`);
    }

    const history = useHistory();

  return (
    <List>
      <ListItem button onClick={()=>handleButtonClick("Liked Videos")}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Liked Videos" />
      </ListItem>

      <ListItem button onClick={()=>handleButtonClick("Saved Videos")}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Saved Videos" />
      </ListItem>

    </List>
  );
};

export default SidebarListItems;
