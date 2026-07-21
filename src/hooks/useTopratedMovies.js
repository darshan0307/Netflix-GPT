import { useEffect } from "react";
import { API_OPTIONS } from "../utilis/constants";
import { useDispatch } from "react-redux";
import { addTopMovies } from "../utilis/moviesSlice";



const useTopratedMovies = () => {

    const dispatch = useDispatch();

    const getTopMovies = async () => {
        const data = await fetch("https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
            API_OPTIONS
        );
        const json = await data.json();
        dispatch(addTopMovies(json.results))
    };

    useEffect(()=>{
        getTopMovies();
    }, []);

}


export default useTopratedMovies;