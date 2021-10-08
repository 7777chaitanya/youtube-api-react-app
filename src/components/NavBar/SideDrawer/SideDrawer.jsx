import useStyles from "./styles";
import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import SidebarListItems from "./SidebarListItems/SidebarListItems";
import SidebarAllPlaylists from "./SidebarAllPlaylists/SidebarAllPlaylists";
import AllOutIcon from "@material-ui/icons/AllOut";
import {Link} from "react-router-dom";
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';

export default function SideDrawer({ toggleDrawer, state }) {
  const classes = useStyles();

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <SidebarListItems />
      <Divider />
      <SidebarAllPlaylists />
      <Divider />
      <List>
        <ListItem button component={Link} to="/allPlaylists">
          <ListItemIcon>
            <PlaylistAddIcon />
          </ListItemIcon>
          <ListItemText primary="Create Playlist" />
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem button component={Link} to="/allPlaylists">
          <ListItemIcon>
            <AllOutIcon />
          </ListItemIcon>
          <ListItemText primary="All Playlists" />
        </ListItem>
      </List>
      <Divider />
     
    </div>
  );

  return (
    <Drawer
      anchor="left"
      open={state["left"]}
      onClose={toggleDrawer("left", false)}
    >
      {list("left")}
    </Drawer>
  );
}
