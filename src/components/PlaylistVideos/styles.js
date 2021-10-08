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
      goToTopButtonBox:{
        position : "fixed",
        zIndex : "100",
        bottom : "2rem",
        right : "2rem",
        border : "1px solid gray",
        borderRadius : "50px",
        backgroundColor : "rgb(147,104,247)"
    },
   
}))

export default useStyles;