import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
  eachItemCard: {
    maxWidth: "20vw",
    minWidth: "20vw",
    padding: "1rem",
    margin: "1rem",
    backgroundColor: "rgb(220,220,220)",
    "&:hover": {
      backgroundColor: "rgb(147,104,247)",
    },
    [theme.breakpoints.down("sm")]: {
        maxWidth: "40vw",
        minWidth: "40vw",
    },
    // [theme.breakpoints.up("sm")]: {
        
    // },
  },
}));

export default useStyles;
