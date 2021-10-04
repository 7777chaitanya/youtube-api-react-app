import {useContext, useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import useStyles from "./styles";
import { HomePageVideosContext } from "../../contexts/HomePageVideosContext";
import SideDrawer from './SideDrawer/SideDrawer';

export default function NavBar() {
  const classes = useStyles();
  const { HomePageVideos, setHomePageVideos, searchTerm, setsearchTerm, handleSubmit } =
    useContext(HomePageVideosContext);

    const [state, setState] = useState({
      top: false,
      left: false,
      bottom: false,
      right: false,
    });
  
    const toggleDrawer = (anchor, open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
  
      setState({ ...state, [anchor]: open });
    };

  const handleSearchTermChange = (e) => {
    console.log(e.target.value);
    setsearchTerm(e.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer("left", true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6" noWrap>
            Video Streamer
          </Typography>
          <form action="submit" onSubmit={handleSubmit}>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
                inputProps={{ "aria-label": "search" }}
                onChange={handleSearchTermChange}
                value={searchTerm}
              />
            </div>
          </form>
        </Toolbar>
        <SideDrawer toggleDrawer={toggleDrawer} state={state}/>
      </AppBar>
      
    </div>
  );
}
