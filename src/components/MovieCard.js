import { IMG_URL } from "../utilis/constants";


const MovieCard = ({ posterPath }) => {

    if(!posterPath) return null;

    return (
        <div 
        className="
        flex-shrink-0
        w-28
        sm:w-32
        md:w-40
        lg:w-44
        xl:w-48
        cursor-pointer
        transition-all
        duration-300
        hover:scale-105
        hover:z-20
      "
      >
            <img
            className="
          w-full
          h-40
          sm:h-48
          md:h-60
          lg:h-64
          rounded-lg
          object-cover
          shadow-lg
          transition-all
          duration-300
          hover:shadow-2xl "
            src={IMG_URL + posterPath} />
        </div>
    )
}

export default MovieCard;