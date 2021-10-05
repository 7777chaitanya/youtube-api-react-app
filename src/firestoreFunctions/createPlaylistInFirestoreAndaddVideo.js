import { doc, updateDoc, arrayUnion} from "firebase/firestore";
import { db } from "../firebase";

// Add a new document in collection "cities"

export default async function createPlaylistInFirestoreAndaddVideo(playlistName, eachVideo, handleClose) {
    handleClose();
  const docRef = doc(db, "playlist", "yMMoDPe1NtIWtjXajgSb");
  try {
    await updateDoc(docRef, {
      [playlistName] : arrayUnion(eachVideo),
      allPlaylists : arrayUnion(playlistName)
    });
  } catch (e) {
    console.log(e.message);
  }
}
