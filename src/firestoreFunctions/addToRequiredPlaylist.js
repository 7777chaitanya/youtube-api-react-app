import { doc, updateDoc, arrayUnion} from "firebase/firestore";
import { db } from "../firebase";

// Add a new document in collection "cities"

export default async function addToLikedVideos(eachVideo, eachItem, handleClose1) {
  const docRef = doc(db, "playlist", "yMMoDPe1NtIWtjXajgSb");
  handleClose1();
  try {
      let dummyObj = {}
    await updateDoc(docRef, {
      [eachItem] : arrayUnion(eachVideo),
    });
  } catch (e) {
    console.log(e.message);
  }
  
}
