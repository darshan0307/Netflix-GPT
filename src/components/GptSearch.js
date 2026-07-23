// import { BG_URL } from "../utilis/constants";
// import GptMovieSuggestion from "./GptMovieSuggestion";
// import GptSearchBar from "./GptSearchBar";


// const GptSearch = () => {
//     return(
//     <div>
//         <div className="fixed ">
//             {<img className="absolute -z-10"
//                 src={BG_URL}
//                 alt="Background" 
//             /> }
//         </div>
//         <GptSearchBar />
//         <GptMovieSuggestion />
//     </div>
//     );
// };

// export default GptSearch;


import { BG_URL } from "../utilis/constants";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen">

      {/* Background Image */}
      <img
        className="fixed top-0 left-0 w-full h-full object-cover -z-20"
        src={BG_URL}
        alt="Background"
      />

      {/* Dark Overlay */}
      <div className="fixed inset-0 bg-black/70 -z-10"></div>

      {/* Content */}
      <div className="relative z-10">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>

    </div>
  );
};

export default GptSearch;