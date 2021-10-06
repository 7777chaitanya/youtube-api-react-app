import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme=>({
    playlistDetailsBox:{
        [theme.breakpoints.down('sm')]: {
            width : "90vw"
          },
          [theme.breakpoints.up('sm')]: {
            width : "70vw"
          },
          height : '50vh',
          marginLeft : "auto",
          marginRight : "auto",
          display : "flex",
          flexDirection : "column",
          justifyContent : "space-evenly",
          alignItems : "center",

    }

}));

export default useStyles;