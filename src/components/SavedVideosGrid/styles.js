import { makeStyles } from "@material-ui/core";

const  useStyles = makeStyles(theme=>({
    noItemsPaper: {
        padding: "2rem",
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
      headerBox: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "2rem",
      },
}))

export default useStyles;