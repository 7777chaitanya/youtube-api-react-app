import React, { createContext, useEffect, useState } from "react";
import instance from "../api/youtubeAxiosInstance";

export const HomePageVideosContext = createContext();

export const HomePageVideosProvider = ({ children }) => {
  const [HomePageVideos, setHomePageVideos] = useState([]);
  const [searchTerm, setsearchTerm] = useState("javascript");

  useEffect(() => {
   handleSubmit();
   setsearchTerm("")
  }, [])

  const handleSubmit = async (e) => {
    e && e.preventDefault();
    const {data} = await instance.get("search", {
      params: {
        part: "snippet",
        order: "viewCount",
        safeSearch: "strict",
        maxResults: 16,
        key: process.env.REACT_APP_YOUTUBE_API_KEY,
        q: searchTerm,
      },
    });
    setHomePageVideos([data?.items]);
    console.log("response=>", data?.items);
  };

  const value = {
    HomePageVideos,
    setHomePageVideos,
    searchTerm,
    setsearchTerm,
    handleSubmit,
  };

  return (
    <HomePageVideosContext.Provider value={value}>
      {children}
    </HomePageVideosContext.Provider>
  );
};
