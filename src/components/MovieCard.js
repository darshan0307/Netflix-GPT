import { IMG_URL } from "../utilis/constants";


const MovieCard = ({ posterPath }) => {

    if(!posterPath) return null;

    return (
        <div 
        className="
        w-36
        md:w-40
        lg:w-44
        flex-shrink-0
        cursor-pointer
        transition-all
        duration-300
        hover:scale-105"
      >
            <img
            className="rounded-xl shadow-xl w-full h-56 object-cover"
            src={IMG_URL + posterPath} />
        </div>
    )
}

export default MovieCard;