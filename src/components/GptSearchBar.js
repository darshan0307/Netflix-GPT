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
          flex
          w-full
          max-w-5xl
          flex-col
          gap-3
          rounded-2xl
          border
          border-gray-700
          bg-black/80
          p-4
          backdrop-blur-md
          shadow-2xl
          sm:flex-row
        "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={SearchText}
          type="text"
          className="
            flex-1
            rounded-xl
            bg-gray-900
            px-5
            py-4
            text-base
            text-white
            placeholder-gray-400
            outline-none
            focus:ring-2
            focus:ring-red-600
          "
          placeholder={lang[langKey].GptSearchPlaceholder}
        />
        <button
          className="
            rounded-xl
            bg-red-600
            px-8
            py-4
            font-semibold
            text-white
            transition
            hover:bg-red-700
            disabled:cursor-not-allowed
            disabled:bg-gray-600
          "
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
