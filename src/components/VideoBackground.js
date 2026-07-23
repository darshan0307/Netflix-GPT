import { useSelector } from "react-redux";
import useMovieTrailer from "../hooks/useMovieTrailer";

const VideoBackground = ({ movieId }) => {
  // fetch trailer video

  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useMovieTrailer(movieId);

  return (
    <div className="relative w-full overflow-hidden">
      <iframe
        className="
          h-[55vw]
          w-full
          sm:h-[56.25vw]
          lg:h-screen
          lg:min-h-[700px]
          scale-125
          lg:scale-100
        "
        src={`https://www.youtube.com/embed/${trailerVideo?.key}?autoplay=1&mute=1&controls=1`}
        title="YouTube player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/30 to-transparent"></div>
    </div>
  );
};

export default VideoBackground;
