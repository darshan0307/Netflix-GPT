import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopratedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryConatiner";


const Browse = () => {

    useNowPlayingMovies();
    usePopularMovies();
    useTopratedMovies();
    useUpcomingMovies();

    return ( <div>
        <Header />
        <MainContainer />
        <SecoundaryContainer />
        
    </div>
    )
};

export default Browse;