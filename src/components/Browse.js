// import { useSelector } from "react-redux";
// import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
// import usePopularMovies from "../hooks/usePopularMovies";
// import useTopratedMovies from "../hooks/useTopratedMovies";
// import useUpcomingMovies from "../hooks/useUpcomingMovies";
// import GptSearch from "./GptSearch";
// import Header from "./Header";
// import MainContainer from "./MainContainer";
// import SecoundaryContainer from "./SecoundaryConatiner";


// const Browse = () => {

//     const showGptSearch = useSelector((store)=> store.gpt.showGptSearch)

//     useNowPlayingMovies();
//     usePopularMovies();
//     useTopratedMovies();
//     useUpcomingMovies();

//     return ( <div>
//         <Header />
//         { showGptSearch ? (
//             <GptSearch />
//         ) : (
//             <>
//             <MainContainer />
//             <SecoundaryContainer />
//             </>
//         )}
        
//     </div>
//     )
// };

// export default Browse;




import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopratedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";

import Header from "./Header";
import MainContainer from "./MainContainer";
import SecoundaryContainer from "./SecoundaryConatiner";
import GptSearch from "./GptSearch";

const Browse = () => {
  const showGptSearch = useSelector(
    (store) => store.gpt.showGptSearch
  );

  useNowPlayingMovies();
  usePopularMovies();
  useTopratedMovies();
  useUpcomingMovies();

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden">

      {/* Header */}

      <Header />

      {/* Page Content */}

      <main className="pt-16 sm:pt-20">

        {showGptSearch ? (
          <GptSearch />
        ) : (
          <>
            <MainContainer />
            <SecoundaryContainer />
          </>
        )}

      </main>

    </div>
  );
};

export default Browse;