import { IMG_URL } from "../utilis/constants";


const MovieCard = ({ posterPath }) => {
    return (
        <div className="w-44 rounded-lg shadow-lg">
            <img alt="Movie Card"
            src={IMG_URL + posterPath} />
        </div>
    )
}

export default MovieCard;