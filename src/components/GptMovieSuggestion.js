import { useSelector } from "react-redux";
import MovieList from "./MovieList"


const GptMovieSuggestion = () => {

    const { movieResults, movieNames } = useSelector((store) => store.gpt);
    if (!movieNames) return null;

    return (
        <div className="px-10 pb-20 mt-12">
            <div>
                <h1 className="text-4xl font-bold text-white mb-10">
                🤖 AI Recommended Movies
                </h1>
                {movieNames.map((movieName, index) =>(
                    <MovieList 
                    key={movieName}
                    title={movieName}
                    movies={movieResults[index]}
                    />
                ))}
            </div>
        </div>
    );
};

export default GptMovieSuggestion;