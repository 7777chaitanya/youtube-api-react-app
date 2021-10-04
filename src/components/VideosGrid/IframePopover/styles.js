import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  
  iframeBox:{
    margin : "auto",
    [theme.breakpoints.down('sm')]: {
      width : "95vw",
      height : "50vh",


    },
    [theme.breakpoints.up('sm')]: {
      width : "80vw",
      height : "80vh",

    },
  }
}));

export default useStyles;