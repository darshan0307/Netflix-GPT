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
  if (!movies || movies.length === 0) return null;

  return (
    <section className="mb-8 px-4 sm:px-6 md:px-10 lg:px-14">

      {/* Category Title */}

      <h2
        className="
          mb-4
          text-lg
          sm:text-xl
          md:text-2xl
          font-bold
          text-white
          tracking-wide
        "
      >
        {title}
      </h2>

      <div className="relative">

        {/* Left Shadow */}

        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-8 bg-gradient-to-r from-black to-transparent"></div>

        {/* Right Shadow */}

        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-8 bg-gradient-to-l from-black to-transparent"></div>

        {/* Movie Row */}

        <div
          className="
            flex
            gap-3
            overflow-x-auto
            scroll-smooth
            scrollbar-hide
            pb-4
          "
        >
          {movies.map((movie) => (
            <MovieCard
              key={movie.id}
              posterPath={movie.poster_path}
            />
          ))}
        </div>

      </div>

    </section>
  );
};

export default MovieList;