import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div className="px-12 py-4">
      <h1 className="text-white text-3xl font-bold mb-5">{title}</h1>
      <div className="flex overflow-x-auto scrollbar-hide scroll-smooth">
        <div className="flex gap-4">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
