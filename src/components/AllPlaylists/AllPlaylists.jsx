import {useContext} from 'react';
import { PlaylistContext } from '../../contexts/PlaylistContext';
import useStyles from "./styles";
import {Grid} from "@material-ui/core";
import EachGridItem from "./EachGridItem/EachGridItem";

const AllPlaylists = () => {
    const {playlist} = useContext(PlaylistContext);

    return (
       <Grid container>
           {playlist.allPlaylists?.map(item => <Grid 
            item 
            key={item}
            xs={6}
            sm={4}
            md={3}
            
            >

               <EachGridItem item={item}/>
           </Grid>)}
       </Grid>
    )
}

export default AllPlaylists
