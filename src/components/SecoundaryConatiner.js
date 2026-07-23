import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecoundaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    movies.nowPlayingMovies && (
      <div className="
        relative
        z-20
        -mt-16
        sm:-mt-24
        lg:-mt-40
        bg-black
      ">
        <div className="
          px-4
          sm:px-6
          md:px-10
          lg:px-14
          xl:px-16
          pb-10
        ">
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
