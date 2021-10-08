import { useContext } from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import useStyles from "./styles";
import { HomePageVideosContext } from "../../../contexts/HomePageVideosContext";
import instance from "../../../api/youtubeAxiosInstance";

export default function ButtonGrid() {
  const classes = useStyles();
  const coursesArray = [
    "javascript",
    "c programming",
    "c++",
    "python",
    "react js",
    "vue js",
    "javascript closures",
    "js conf",
    "dapps using js",
    "CS50",
    "block chain",
    "shopify",
    "startup news",
  ];

  const {
    HomePageVideos,
    setHomePageVideos,
    searchTerm,
    setsearchTerm,
    handleSubmit,
  } = useContext(HomePageVideosContext);

  const handleButtonClick = async (item) => {
    try{
    const {data} = await instance.get("search", {
      params: {
        part: "snippet",
        order: "viewCount",
        safeSearch: "strict",
        maxResults: 16,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        q: item,
      },
    });
    setHomePageVideos([data?.items]);
    console.log("response=>", data?.items);
  }
  catch(error){
    console.log(error.message)
  }
  };

  return (
    <div className={classes.root}>
      {searchTerm}
      <ButtonGroup
        color="secondary"
        aria-label="outlined primary button group"
        className={classes.buttonGroup}
      >
        {coursesArray.map((item) => (
          <Button  onClick={() => handleButtonClick(item)} key={item}>
            {item}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  );
}
