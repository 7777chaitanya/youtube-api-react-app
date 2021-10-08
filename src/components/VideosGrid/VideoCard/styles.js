import { makeStyles } from "@material-ui/core";
import { red } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: 345,
      marginRight : "auto",
      marginLeft : "auto",
      marginBottom : "1rem",
      backgroundColor : "rgb(239,239,241)"
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: "rgb(147,104,247)",
    },
    iframeBox:{
        height : "30vh"
    }
  }));

export default useStyles;


