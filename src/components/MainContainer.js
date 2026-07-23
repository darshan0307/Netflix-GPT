// import { useSelector } from "react-redux";
// import VideoBackground from "./VideoBackground";
// import VideoTitle from "./VideoTitle";



// const MainContainer = () => {

//     const movies = useSelector((store) => store.movies?.nowPlayingMovies);

//     if (!movies) return;

//     const mainMovie = movies[0];
//     console.log(mainMovie)

//     const { original_title, overview, id } = mainMovie;

//     return (
//         <div>
//             <VideoTitle title={original_title} overview={overview} />
//             <VideoBackground movieId={id} />
//         </div>
//     )
// };

// export default MainContainer;



import { useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = () => {
  const movies = useSelector(
    (store) => store.movies?.nowPlayingMovies
  );

  if (!movies || movies.length === 0) return null;

  const mainMovie = movies[0];

  const {
    original_title,
    overview,
    id,
  } = mainMovie;

  return (
    <section className="relative h-[60vh] sm:h-[75vh] lg:h-screen w-full overflow-hidden bg-black">

      {/* Trailer Background */}

      <VideoBackground movieId={id} />

      {/* Movie Details */}

      <VideoTitle
        title={original_title}
        overview={overview}
      />

    </section>
  );
};

export default MainContainer;