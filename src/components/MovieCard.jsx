import React from "react";
import "../sass/Moviecard.scss";
import { Link } from "react-router-dom";

export default function MovieCard(props) {
  const { data } = props;
  return (
    <div className="movie-card">
      <Link to={`/movie/${data.imdbID}`} style={{ textDecoration: "none" }}>
        <div className="upper">
          <img src={data.Poster} alt="Poster" />
        </div>
        <div className="lower">
          <h3>{data.Title}</h3>
          <p>{data.Year}</p>
        </div>
      </Link>
    </div>
  );
}
