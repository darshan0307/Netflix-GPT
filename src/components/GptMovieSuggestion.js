import { useSelector } from "react-redux";
import MovieList from "./MovieList"


const GptMovieSuggestion = () => {

    const { movieResults, movieNames } = useSelector((store) => store.gpt);
    if (!movieNames) return null;

    return (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 pb-12 sm:pb-16 lg:pb-20">
            <div className="mb-8 sm:mb-10">
                <h1 className="
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    lg:text-5xl
                    font-bold
                    text-white
                    text-center
                ">
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