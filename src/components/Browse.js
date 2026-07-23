import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopratedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryConatiner";


const Browse = () => {

    const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)

    useNowPlayingMovies();
    usePopularMovies();
    useTopratedMovies();
    useUpcomingMovies();

    return ( <div>
        <Header />
        { showGptSearch ? (
            <GptSearch />
        ) : (
            <>
            <MainContainer />
            <SecoundaryContainer />
            </>
        )}
        
    </div>
    )
};

export default Browse;