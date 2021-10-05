import {useContext} from "react";
import { PlaylistContext } from "../../../../contexts/PlaylistContext";
import useStyles from "./styles";
import {ListItem, ListItemText} from "@material-ui/core";
import {Link} from "react-router-dom";


const SidebarAllPlaylists = () => {
  const classes = useStyles();
  const { playlist } = useContext(PlaylistContext);
  return (
    <>
      {playlist?.allPlaylists.map((eachItem) => (
        <ListItem button component={Link} to={`playlist/${eachItem}`}>
          <ListItemText primary={eachItem} />
        </ListItem>
      ))}
    </>
  );
};

export default SidebarAllPlaylists;
