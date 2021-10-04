import React, { createContext, useEffect, useState } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";



export const PlaylistContext = createContext();

export const PlaylistProvider = ({ children }) => {
  const [playlist, setPlaylist] = useState([]);

  useEffect(async () => {
    const unsub = onSnapshot(doc(db, "playlist", "yMMoDPe1NtIWtjXajgSb"), (doc) => {
        console.log("Current data: ", doc.data());
        setPlaylist(doc.data());
    });

    return ()=>{
        unsub();
    }
  }, [])

  const value = { playlist, setPlaylist };

  return (
    <PlaylistContext.Provider value={value}>
      {children}
    </PlaylistContext.Provider>
  );
};
