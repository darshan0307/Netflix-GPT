import { createSlice } from "@reduxjs/toolkit";



const moviesSlice = createSlice({
    name: "movies",
    initialState: {
        nowPlayingMovies: null,
        trailerVideo: null,
    },
    reducers: {
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload;
        },
        addPopularMovies: (state, action) => {
            state.nowPopularMovies = action.payload;
        },
        addTopMovies: (state, action) => {
            state.nowTopMovies = action.payload;
        },
        addUpcomingMovies: (state, action) => {
            state.nowUpcomingMovies = action.payload;
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload;
        },
    },
});

export const { addNowPlayingMovies, addPopularMovies, addTopMovies, addUpcomingMovies, addTrailerVideo } = moviesSlice.actions;

export default moviesSlice.reducer;