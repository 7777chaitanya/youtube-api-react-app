import { doc, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from "../firebase";

export default async function removeFromSavedVideos(eachVideo) {
  const docRef = doc(db, "playlist", "yMMoDPe1NtIWtjXajgSb");
  try {
    await updateDoc(docRef, {
      "Saved Videos" : arrayRemove(eachVideo),
    });
  } catch (e) {
    console.log(e.message);
  }
}
