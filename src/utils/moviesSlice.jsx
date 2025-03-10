import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
   name: "movies",
   initialState: {
      nowPlayingMovies: null,
      trailerVideos: null,
      popularMovies: null,
      trendingMovies: null,

   },
   reducers:{
      addNowPlayingMovies: (state,action) => {
         state.nowPlayingMovies = action.payload;
      },
      addTrailerVideo: (state,action) => {
         state.trailerVideos = action.payload;
      },
      addPopularMovies: (state,action) => {
         state.popularMovies = action.payload;
      },
      addTrendingMovies: (state,action) => {
         state.trendingMovies = action.payload;
      },
   },
});

export const {addNowPlayingMovies,addTrailerVideo,addPopularMovies,addTrendingMovies} = moviesSlice.actions;

export default moviesSlice.reducer;