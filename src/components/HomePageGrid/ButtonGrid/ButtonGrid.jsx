import {useContext} from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import useStyles from "./styles";
import { HomePageVideosContext } from '../../../contexts/HomePageVideosContext';



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
        "startup news"

    
    ];

    const {
        HomePageVideos,
        setHomePageVideos,
        searchTerm,
        setsearchTerm,
        handleSubmit,
      } = useContext(HomePageVideosContext);

    const handleButtonClick = (item) => {
        console.log(item);
        setsearchTerm(item)
    }


  return (
    <div className={classes.root}>
      <ButtonGroup color="primary" aria-label="outlined primary button group" className={classes.buttonGroup}>
        
        {coursesArray.map(item => (<Button focusVisible  onClick={()=> handleButtonClick(item)}>{item}</Button>))}
      
        
      </ButtonGroup>
     </div>
  );
}
