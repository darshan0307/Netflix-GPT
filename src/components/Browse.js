import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryConatiner";


const Browse = () => {

    useNowPlayingMovies();

    return ( <div>
        <Header />
        <MainContainer />
        <SecoundaryContainer />
        
    </div>
    )
};

export default Browse;