// import { useDispatch, useSelector } from "react-redux";
// import { API_OPTIONS } from "../utilis/constants";
// import { addTrailerVideo } from "../utilis/moviesSlice";
// import { useEffect } from "react";

// const useMovieTrailer = (movieId) => {
//   const dispatch = useDispatch();

//   const trailerVideo = useSelector(
//       (store) => store.movies.trailerVideo
//     );

//   const getMovieVideos = async () => {
//     try {
//       const data = await fetch(
//         `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
//         API_OPTIONS,
//       );

//       const json = await data.json();

//       console.log("Movie ID:", movieId);
//       console.log("TMDB Response:", json);

//       if (!json.results) {
//         console.error("TMDB API Error:", json);
//         return;
//       }
 
//       const filterData = json.results.filter(
//         (video) => video.type === "Trailer" && video.site === "YouTube",
//       );

//       const trailer = filterData.length ? filterData[0] : json.results[0];

//       dispatch(addTrailerVideo(trailer));
//     } catch (error) {
//       console.error("Fetch Error:", error);
//     }
//   };

//   useEffect(() => {
//   if (!trailerVideo) {
//     getMovieVideos();
//   }
// }, []);
// };

// export default useMovieTrailer;



import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utilis/constants";
import { addTrailerVideo } from "../utilis/moviesSlice";

const useMovieTrailer = (movieId) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (!movieId) return;

    const getMovieVideos = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );

        const json = await response.json();

        const trailers = json.results?.filter(
          (video) =>
            video.type === "Trailer" &&
            video.site === "YouTube"
        );

        const trailer =
          trailers?.length > 0
            ? trailers[0]
            : json.results?.[0];

        dispatch(addTrailerVideo(trailer || null));
      } catch (err) {
        console.error("Trailer Error:", err);
      }
    };

    getMovieVideos();
  }, [movieId, dispatch]);
};

export default useMovieTrailer;