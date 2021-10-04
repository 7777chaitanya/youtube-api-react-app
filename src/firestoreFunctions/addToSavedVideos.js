import { doc, updateDoc, arrayUnion} from "firebase/firestore";
import { db } from "../firebase";

// Add a new document in collection "cities"

export default async function addToSavedVideos(eachVideo) {
  const docRef = doc(db, "playlist", "yMMoDPe1NtIWtjXajgSb");
  try {
    await updateDoc(docRef, {
      "savedVideos" : arrayUnion(eachVideo),
    });
  } catch (e) {
    console.log(e.message);
  }
}
