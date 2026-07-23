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
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black">

      {/* Background */}

      <img
        src={BG_URL}
        alt="Background"
        className="fixed inset-0 h-full w-full object-cover -z-20"
      />

      {/* Dark Overlay */}

      <div className="fixed inset-0 bg-black/75 -z-10"></div>

      {/* Content */}

      <div className="relative z-10 pt-24 sm:pt-28 lg:pt-32 pb-10">

        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">

          <GptSearchBar />

          <div className="mt-8">
            <GptMovieSuggestion />
          </div>

        </div>

      </div>

    </div>
  );
};

export default GptSearch;