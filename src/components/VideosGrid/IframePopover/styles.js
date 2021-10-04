import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  typography: {
    padding: theme.spacing(2),
  },
  popOverCard:{
    marginLeft : "auto",
    marginRight : "auto",
    height : "auto",
    [theme.breakpoints.down('sm')]: {
      width : "95vw"
    },
    [theme.breakpoints.up('sm')]: {
      width : "70vw"
    },
  }
}));

export default useStyles;