import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from "../../Api/MovieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    const response = await MovieApi.get(
      `?apiKey=${process.env.REACT_APP_API_KEY}&s=${term}&type=movie`
    );
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    const response = await MovieApi.get(
      `?apiKey=${process.env.REACT_APP_API_KEY}&s=${term}&type=series`
    );
    return response.data;
  }
);

export const fetchAsyncMoviesorShows = createAsyncThunk(
  "movies/fetchAsyncMoviesorShows",
  async (id) => {
    const imdbId = id.imdbId;
    console.log(imdbId);
    const response = await MovieApi.get(
      `?apiKey=${process.env.REACT_APP_API_KEY}&i=${imdbId}&plot=full`
    );
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  moviesorshows: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMoviesOrShows: (state) => {
      state.moviesorshows = {};
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchAsyncMovies.pending, () => {
      console.log("Pending");
    });
    builder.addCase(fetchAsyncMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
      console.log("Fullfuilled !");
    });
    builder.addCase(fetchAsyncMovies.rejected, () => {
      console.log("Rejected !");
    });
    builder.addCase(fetchAsyncShows.fulfilled, (state, action) => {
      state.shows = action.payload;
      console.log("Shows Succeeded!");
    });

    builder.addCase(fetchAsyncMoviesorShows.fulfilled, (state, action) => {
      state.moviesorshows = action.payload;
      console.log("Details Fetches Successfully!");
    });
  },
});

export const { removeSelectedMoviesOrShows } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getAllDetails = (state) => state.movies.moviesorshows;
export default movieSlice.reducer;

/* Action Creator - In React Redux, action creators are functions that create and return action objects.

  Action - An action object is a plain JavaScript object that describes a change that should be made to the application's state.

   Rtk Thunk is usefull to create Asynchronous Action Creators
*/
