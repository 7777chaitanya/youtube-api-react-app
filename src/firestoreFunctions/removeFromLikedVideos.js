import { doc, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from "../firebase";

export default async function removeFromLikedVideos(eachVideo) {
  const docRef = doc(db, "playlist", "yMMoDPe1NtIWtjXajgSb");
  try {
    await updateDoc(docRef, {
      "likedVideos" : arrayRemove(eachVideo),
    });
  } catch (e) {
    console.log(e.message);
  }
}
