import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecoundaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="">
        <div className="bg-black relative z-20 -mt-20 px-12">
            <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
            <MovieList title={"TopRated Movies"} movies={movies.nowTopMovies} />
            <MovieList title={"Popular"} movies={movies.nowPopularMovies} />
            <MovieList title={"Trending"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Upcoming Movies"} movies={movies.nowUpcomingMovies} />
            <MovieList title={"Continious Watching"} movies={movies.nowPlayingMovies} />
            <MovieList title={"Comedy Movies"} movies={movies.nowPlayingMovies} />
      </div>
      </div>
    )
  );
};

export default SecoundaryContainer;
