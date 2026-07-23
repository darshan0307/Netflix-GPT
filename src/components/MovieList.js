// import MovieCard from "./MovieCard";

// const MovieList = ({ title, movies }) => {
//   console.log(movies);
//   return (
//     <div className="px-12 py-4">
//       <h1 className="text-white text-3xl font-bold mb-5">{title}</h1>
//       <div className="flex overflow-x-auto scrollbar-hide scroll-smooth">
//         <div className="flex gap-4">
//           {movies?.map((movie) => (
//             <MovieCard key={movie.id} posterPath={movie.poster_path} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MovieList;



import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  if (!movies) return null;

  return (
    <div className="mb-10 px-6">

      {/* Movie Category Title */}
      <h2 className="text-2xl font-semibold text-white mb-4 tracking-wide">
        {title}
      </h2>

      {/* Movie Row */}
      <div className="relative group">

        {/* Left Gradient */}
        <div className="absolute left-0 top-0 h-full w-10 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>

        {/* Right Gradient */}
        <div className="absolute right-0 top-0 h-full w-10 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div className="flex gap-3 overflow-x-auto scroll-smooth scrollbar-hide pb-4">

          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
            />
          ))}

        </div>
      </div>
    </div>
  );
};

export default MovieList;