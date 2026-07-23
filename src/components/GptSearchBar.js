import { useDispatch, useSelector } from "react-redux";
import lang from "../utilis/languageConstants";
import openai from "../utilis/openai";
import { useRef } from "react";
import { API_OPTIONS } from "../utilis/constants";
import { addGptMovieResult } from "../utilis/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const langKey = useSelector((store) => store.config.lang);

  const SearchText = useRef(null);

  // Search movie in TMDB

  const searchMovieTMDB = async (movie) => {
    // const data = await fetch(
    //     "https://api.themoviedb.org/3/search/movie?query=" +
    //      movie +
    //     "include_adult=false&language=en-US&page=1",
    //     API_OPTIONS
    // );

    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        encodeURIComponent(movie) +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS,
    );

    const json = await data.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    const gptQuery = `
You are a movie recommendation system.

Recommend exactly 5 Indian movies based on:

"${SearchText.current.value}"

Rules:
- Return ONLY movie names.
- No numbering.
- No descriptions.
- No markdown.
- Separate each movie with a comma.

Example:
Kantara, Tumbbad, Raaz, Bhoothnath, Phoonk
`;

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      //   model: "gpt-3.5-turbo",
      model: "llama-3.3-70b-versatile",
    });

    if (!gptResults.choices) {
      // TODO: Write Error Handling
    }

    const gptMovies = gptResults.choices?.[0]?.message?.content.split(",");

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }),
    );
  };

  return (
    <div className="flex justify-center pt-32 px-4">
      <form
        className="
    w-full
    max-w-4xl
    grid
    grid-cols-12
    bg-black/80
    backdrop-blur-md
    rounded-2xl
    shadow-2xl
    border
    border-gray-700
    overflow-hidden"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={SearchText}
          type="text"
          className="
            col-span-9
            bg-transparent
            text-white
            placeholder-gray-400
            px-6
            py-5
            outline-none
            text-lg"
          placeholder={lang[langKey].GptSearchPlaceholder}
        />
        <button
          className="
            col-span-3
            bg-red-600
            hover:bg-red-700
            text-white
            text-lg
            font-semibold
            transition"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
