import { doc, updateDoc, arrayRemove } from "firebase/firestore";
import { db } from "../firebase";

export default async function removeFromLikedVideos(playlistName) {
  const docRef = doc(db, "playlist", "yMMoDPe1NtIWtjXajgSb");
  try {
    await updateDoc(docRef, {
      allPlaylists : arrayRemove(playlistName),
      [playlistName] : []
    });
  } catch (e) {
    console.log(e.message);
  }
}
