// import { useEffect } from "react";
// import { API_OPTIONS } from "../utilis/constants";
// import { useDispatch, useSelector } from "react-redux";
// import { addPopularMovies } from "../utilis/moviesSlice";



// const usePopularMovies = () => {

//     const dispatch = useDispatch();

//     const popularMovies = useSelector(
//         (store) => store.movies.popularMovies
//     );

//     const getPopularMovies = async () => {
//         const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
//             API_OPTIONS
//         );
//         const json = await data.json();
//         console.log(json.results);
//         dispatch(addPopularMovies(json.results))
//     };

//     useEffect(()=>{
//         !popularMovies && getPopularMovies();
//     }, []);

// }


// export default usePopularMovies;







import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utilis/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector(
    (store) => store.movies.nowPopularMovies
  );

  useEffect(() => {
    if (popularMovies) return;

    const getPopularMovies = async () => {
      try {
        const response = await fetch(
          "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
          API_OPTIONS
        );

        const json = await response.json();
        dispatch(addPopularMovies(json.results));
      } catch (err) {
        console.error(err);
      }
    };

    getPopularMovies();
  }, [popularMovies, dispatch]);
};

export default usePopularMovies;