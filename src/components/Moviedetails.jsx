import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaStar, FaThumbsUp, FaFilm, FaCalendar } from "react-icons/fa";

import "../sass/Moviedetails.scss";
import {
  fetchAsyncMoviesorShows,
  getAllDetails,
  removeSelectedMoviesOrShows,
} from "../store/Movies/movieSlice";

export default function Moviedetails() {
  const id = useParams();
  const dispatch = useDispatch();
  const response = useSelector(getAllDetails);
  console.log(response);

  useEffect(() => {
    dispatch(fetchAsyncMoviesorShows(id));
    return () => {
      dispatch(removeSelectedMoviesOrShows());
    };
  }, [dispatch, id]);

  return (
    <div className="movie-section">
      {Object.keys(response).length === 0 ? (
        <div className="loading"> Loading ... </div>
      ) : (
        <>
          <div className="image">
            <img src={response.Poster} alt={response.Title} />
            <div className="movie-title">{response.Title}</div>
          </div>
          <div className="movie-rating">
            <span>
              IMDB Rating{" "}
              <i>
                <FaStar color="#FF9E00" />: {response.imdbRating}
              </i>
            </span>
            <span>
              IMDB Votes{" "}
              <i>
                <FaThumbsUp color="#FAFAFA" />
              </i>{" "}
              : {response.imdbVotes}
            </span>
            <span>
              Runtime{" "}
              <i>
                <FaFilm color="rgb(191 , 213 , 214)" />
              </i>{" "}
              : {response.Runtime}
            </span>
            <span>
              Year{" "}
              <i>
                <FaCalendar color="peachpuff" />
              </i>{" "}
              : {response.Year}
            </span>
          </div>
          <div className="movie-plot">{response.Plot}</div>
          <div className="movie-info">
            <div>
              <span>Directors</span>
              <span>{response.Director}</span>
            </div>
            <div>
              <span>Stars</span>
              <span>{response.Actors}</span>
            </div>
            <div>
              <span>Genres</span>
              <span>{response.Genre}</span>
            </div>
            <div>
              <span>Language</span>
              <span>{response.Language}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
