import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "../sass/Header.scss";
import { useDispatch } from "react-redux";
import { fetchAsyncMovies, fetchAsyncShows } from "../store/Movies/movieSlice";

export default function Header() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (search === "") return alert("Please enter search term!");
    dispatch(fetchAsyncMovies(search));
    dispatch(fetchAsyncShows(search));
    setSearch("");
  };

  return (
    <div className="header">
      <div className="header__title">
        <h1>Movie Info Website</h1>
      </div>
      <div className="header__search">
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Search Movies or Shows..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">
            <FaSearch size={16} />
          </button>
        </form>
      </div>
    </div>
  );
}
