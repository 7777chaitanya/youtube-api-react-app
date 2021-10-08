import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme=>({
  headerBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "1rem",
  },
  noItemsPaper: {
    padding: "1rem",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80vw",
      margin: "auto",
    },
    [theme.breakpoints.up("sm")]: {
      maxWidth: "60vw",
      margin: "auto",
    },
  },
  deleteIcon:{
    "&:hover": {
        color: "red"
      }
  },
  headerDivider:{
    marginBottom : "1rem"
  }
}));

export default useStyles;
