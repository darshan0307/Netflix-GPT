export const Logo = 
    "https://occ.a.nflxso.net/dnmt/api/v6/iL4oJVDYZ8KLSrJ6eG2OwtghbfQ/AAAAAUkLCBtHBbguPPqzaFOzEv4Pw_eS79j0y7ADR4hkB30-HkahpsUb5yvfzgKsfU2oNda-7hpkfYLnXhjc23JVT07PHsGgfsaHAB7qOhy2_5gn-nuKOVSUSBzn-i-O3ea2QQaXx3PYkHes.svg"


export const user_url =
     "https://tse4.mm.bing.net/th/id/OIP.KpCQxS8KP5duAfAD4vAKkAHaHa?r=0&pid=Api&P=0&h=180"



export const BG_URL = "https://images.hdqwalls.com/download/one-piece-netflix-poster-kn-3840x2160.jpg"



export const API_OPTIONS = {
    method: "GET",
    headers: {
        accept: "application/json",
        Authorization:
        "Bearer " + process.env.REACT_APP_TMDB_KEY
        
        
    },
};


export const IMG_URL = "https://image.tmdb.org/t/p/w500";


export const SUPPORT_LANGUAGES = [
    { identifier: "en", name: "English"},
    { identifier: "Hindi", name: "Hindi"},
    { identifier: "Telugu", name: "Telugu"},
    { identifier: "Tamil", name: "Tamil"},
    { identifier: "Kannada", name: "Kannada"},
]


const apiKey = process.env.REACT_APP_OPENAI_KEY;
