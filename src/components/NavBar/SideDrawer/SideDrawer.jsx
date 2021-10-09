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
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

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
      {/* <Divider />
      <List>
        <ListItem button component={Link} to="/allPlaylists">
          <ListItemIcon>
            <PlaylistAddIcon />
          </ListItemIcon>
          <ListItemText primary="Create Playlist" />
        </ListItem>
      </List> */}
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

      <List>
      <a href="https://github.com/Chaitanya7666" target="_blank" className={classes.socialMediaLinks}>
        <ListItem button >
          <ListItemIcon>
            <GitHubIcon color="primary" />
          </ListItemIcon>
          <ListItemText primary="Github" />
        </ListItem>
        </a>

        <a
          href="https://www.linkedin.com/in/chaitanya-j-1799791b4/"
          target="_blank"
          className={classes.socialMediaLinks}
        >
        <ListItem button  >
          <ListItemIcon>
            <LinkedInIcon color="primary"/>
          </ListItemIcon>
          <ListItemText primary="Linkedin" />
        </ListItem>
        </a>

        <a href="https://twitter.com/chaitanya7666" target="_blank" className={classes.socialMediaLinks}>
        <ListItem button  >
          <ListItemIcon>
            <TwitterIcon color="primary"/>
          </ListItemIcon>
          <ListItemText primary="Twitter" />
        </ListItem>
        </a>
      </List>
     
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
