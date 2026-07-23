import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utilis/firebase";
import { addUser, removeUser } from "../utilis/userSlice";
import { useEffect } from "react";
import { Logo, SUPPORT_LANGUAGES } from "../utilis/constants"
import { toggleGptSearchView } from "../utilis/gptSlice";
import lang from "../utilis/languageConstants";
import { changeLanguage } from "../utilis/configSlice";


const Header = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const user = useSelector(store => store.user);

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

    const handleSignOut = () => {
        signOut(auth)
        .then(()=>{
        })
        .catch((error)=>{
            navigate("/error");
        });
    };


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            
            const { vid, email, displayName, photoURL } = user;
            dispatch(
              addUser({
                vid: vid, 
                email: email, 
                displayName: displayName, 
                photoURL: photoURL 
              }));
              navigate("/browse");
          } else {
            dispatch(removeUser());
            navigate("/");
          }
        });

        // UnSubscribe when components unmounts
        return () => unSubscribe();
      }, []);


    const handleGptSearchClick = () => {
        // Toggle GPT Search Button
        dispatch(toggleGptSearchView());
        
    };

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));

    }
    
    
    return (
    <div className="fixed top-0 left-0 w-full px-8 py-3 bg-gradient-to-b from-black via-black/80 to-transparent z-50 flex justify-between items-center">
        <img 
            className="w-44"
            src={Logo}
            alt="logo" 
        />
        {user && (
            <div className="flex items-center justify-end gap-4 ml-auto">
                { showGptSearch && (   <select className="p-2 m-2 bg-gray-700 text-white rounded-lg" onChange={handleLanguageChange}>
                        {SUPPORT_LANGUAGES.map((lang)=>(
                            <option key={lang.identifier} value={lang.identifier}>
                                {lang.name}
                            </option>
                        ))}
                    </select> )}
                <button className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-lg transition"
                onClick={handleGptSearchClick}>
                    { showGptSearch? "Home": "GPT Search"}
                </button>
                <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
                <button onClick={handleSignOut} className="font-bold text-white " >
                    (Sign Out)
                </button>
            </div>
        )};

    </div>
    );
};


export default Header;