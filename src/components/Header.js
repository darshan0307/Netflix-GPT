import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utilis/firebase";
import { addUser, removeUser } from "../utilis/userSlice";
import { useEffect } from "react";
import { Logo } from "../utilis/constants"


const Header = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();
    const user = useSelector(store => store.user);

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


    return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
        <img 
            className="w-44"
            src={Logo}
            alt="logo" 
        />
        {user && (
            <div className="flex p-2">
                <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
                <button onClick={handleSignOut} className="font-bold text-white" >
                    (Sign Out)
                </button>
            </div>
        )};

    </div>
    );
};


export default Header;