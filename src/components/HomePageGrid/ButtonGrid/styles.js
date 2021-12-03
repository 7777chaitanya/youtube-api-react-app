import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(8),
    overflow: "auto",
    margin: theme.spacing(2),
    '&::-webkit-scrollbar': {
      display : "none"
    },
  },
  buttonGroup: {
    
  },
}));

export default useStyles;
