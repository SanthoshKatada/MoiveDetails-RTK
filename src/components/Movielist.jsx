import React from "react";
import "../sass/Movielist.scss";
import MovieCard from "./MovieCard";
import { useSelector } from "react-redux";
import { getAllMovies, getAllShows } from "../store/Movies/movieSlice";

export default function Movielist() {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  let renderMovies,
    renderShows = "";

  renderMovies =
    movies.Response === "True" ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movie_error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === "True" ? (
      shows.Search.map((show, index) => {
        return <MovieCard key={index} data={show} />;
      })
    ) : (
      <div className="movie_error">
        <h3>{shows.Error}</h3>
      </div>
    );
  return (
    <>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">{renderMovies}</div>
        </div>
      </div>

      <div className="show-wrapper">
        <div className="show-list">
          <h2>Shows</h2>
          <div className="show-container">{renderShows}</div>
        </div>
      </div>
    </>
  );
}
