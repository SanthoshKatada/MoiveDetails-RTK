import React, { useEffect } from "react";
import "../sass/Home.scss";
import Movielist from "./Movielist";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../store/Movies/movieSlice";

export default function Home() {
  const dispatch = useDispatch();
  const moiveText = "Harry";
  const showText = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(moiveText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);
  return (
    <div>
      <Movielist />
    </div>
  );
}
