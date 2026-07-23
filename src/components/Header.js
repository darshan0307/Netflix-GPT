// // import { useNavigate } from "react-router-dom";
// // import { useDispatch, useSelector } from "react-redux";
// // import { onAuthStateChanged, signOut } from "firebase/auth";
// // import { auth } from "../utilis/firebase";
// // import { addUser, removeUser } from "../utilis/userSlice";
// // import { useEffect } from "react";
// // import { Logo, SUPPORT_LANGUAGES } from "../utilis/constants"
// // import { toggleGptSearchView } from "../utilis/gptSlice";
// // import lang from "../utilis/languageConstants";
// // import { changeLanguage } from "../utilis/configSlice";


// // const Header = () => {

// //     const dispatch = useDispatch();

// //     const navigate = useNavigate();
// //     const user = useSelector(store => store.user);

// //     const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

// //     const handleSignOut = () => {
// //         signOut(auth)
// //         .then(()=>{
// //         })
// //         .catch((error)=>{
// //             navigate("/error");
// //         });
// //     };


// //     useEffect(() => {
// //         const unSubscribe = onAuthStateChanged(auth, (user) => {
// //           if (user) {
            
// //             const { vid, email, displayName, photoURL } = user;
// //             dispatch(
// //               addUser({
// //                 vid: vid, 
// //                 email: email, 
// //                 displayName: displayName, 
// //                 photoURL: photoURL 
// //               }));
// //               navigate("/browse");
// //           } else {
// //             dispatch(removeUser());
// //             navigate("/");
// //           }
// //         });

// //         // UnSubscribe when components unmounts
// //         return () => unSubscribe();
// //       }, []);


// //     const handleGptSearchClick = () => {
// //         // Toggle GPT Search Button
// //         dispatch(toggleGptSearchView());
        
// //     };

// //     const handleLanguageChange = (e) => {
// //         dispatch(changeLanguage(e.target.value));

// //     }
    
    
// //     return (
// //     <div className="fixed top-0 left-0 w-full px-8 py-3 bg-gradient-to-b from-black via-black/80 to-transparent z-50 flex justify-between items-center">
// //         <img 
// //             className="w-44"
// //             src={Logo}
// //             alt="logo" 
// //         />
// //         {user && (
// //             <div className="flex items-center justify-end gap-4 ml-auto">
// //                 { showGptSearch && (   <select className="p-2 m-2 bg-gray-700 text-white rounded-lg" onChange={handleLanguageChange}>
// //                         {SUPPORT_LANGUAGES.map((lang)=>(
// //                             <option key={lang.identifier} value={lang.identifier}>
// //                                 {lang.name}
// //                             </option>
// //                         ))}
// //                     </select> )}
// //                 <button className="px-4 py-2 bg-purple-700 hover:bg-purple-800 text-white rounded-lg transition"
// //                 onClick={handleGptSearchClick}>
// //                     { showGptSearch? "Home": "GPT Search"}
// //                 </button>
// //                 <img className="w-12 h-12" alt="usericon" src={user?.photoURL} />
// //                 <button onClick={handleSignOut} className="font-bold text-white " >
// //                     (Sign Out)
// //                 </button>
// //             </div>
// //         )};

// //     </div>
// //     );
// // };


// // export default Header;



// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { onAuthStateChanged, signOut } from "firebase/auth";
// import { auth } from "../utilis/firebase";
// import { addUser, removeUser } from "../utilis/userSlice";
// import { useEffect, useState } from "react";
// import { Logo, SUPPORT_LANGUAGES } from "../utilis/constants";
// import { toggleGptSearchView } from "../utilis/gptSlice";
// import { changeLanguage } from "../utilis/configSlice";

// const Header = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const user = useSelector((store) => store.user);
//   const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

//   const [mobileMenu, setMobileMenu] = useState(false);

//   const handleSignOut = () => {
//     signOut(auth)
//       .then(() => {})
//       .catch(() => navigate("/error"));
//   };

//   useEffect(() => {
//     const unSubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         const { uid, email, displayName, photoURL } = user;

//         dispatch(
//           addUser({
//             uid,
//             email,
//             displayName,
//             photoURL,
//           })
//         );

//         navigate("/browse");
//       } else {
//         dispatch(removeUser());
//         navigate("/");
//       }
//     });

//     return () => unSubscribe();
//   }, []);

//   const handleGptSearchClick = () => {
//     dispatch(toggleGptSearchView());

//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   return (
//     <header className="fixed top-0 left-0 z-50 w-full bg-gradient-to-b from-black via-black/90 to-transparent">

//       <div className="flex items-center justify-between px-4 py-3 md:px-8">

//         {/* Logo */}

//         <img
//           className="w-28 sm:w-36 md:w-44"
//           src={Logo}
//           alt="Netflix Logo"
//         />

//         {user && (
//           <>
//             {/* Desktop */}

//             <div className="hidden md:flex items-center gap-4">

//               {showGptSearch && (
//                 <select
//                   onChange={(e) => dispatch(changeLanguage(e.target.value))}
//                   className="rounded-lg bg-gray-700 px-3 py-2 text-white"
//                 >
//                   {SUPPORT_LANGUAGES.map((language) => (
//                     <option
//                       key={language.identifier}
//                       value={language.identifier}
//                     >
//                       {language.name}
//                     </option>
//                   ))}
//                 </select>
//               )}

//               <button
//                 onClick={handleGptSearchClick}
//                 className="rounded-lg bg-purple-700 px-5 py-2 text-white transition hover:bg-purple-800"
//               >
//                 {showGptSearch ? "Home" : "GPT Search"}
//               </button>

//               <img
//                 src={user?.photoURL}
//                 alt="User"
//                 className="h-10 w-10 rounded-full border border-white object-cover"
//               />

//               <button
//                 onClick={handleSignOut}
//                 className="rounded-lg bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
//               >
//                 Sign Out
//               </button>

//             </div>

//             {/* Mobile Menu Button */}

//             <button
//               onClick={() => setMobileMenu(!mobileMenu)}
//               className="text-3xl text-white md:hidden"
//             >
//               ☰
//             </button>
//           </>
//         )}
//       </div>

//       {/* Mobile Menu */}

//       {mobileMenu && user && (

//         <div className="space-y-4 bg-black/95 p-5 md:hidden">

//           {showGptSearch && (
//             <select
//               onChange={(e) => dispatch(changeLanguage(e.target.value))}
//               className="w-full rounded-lg bg-gray-700 p-3 text-white"
//             >
//               {SUPPORT_LANGUAGES.map((language) => (
//                 <option
//                   key={language.identifier}
//                   value={language.identifier}
//                 >
//                   {language.name}
//                 </option>
//               ))}
//             </select>
//           )}

//           <button
//             onClick={handleGptSearchClick}
//             className="w-full rounded-lg bg-purple-700 p-3 text-white"
//           >
//             {showGptSearch ? "Home" : "GPT Search"}
//           </button>

//           <div className="flex items-center gap-3">

//             <img
//               src={user?.photoURL}
//               alt="User"
//               className="h-12 w-12 rounded-full object-cover"
//             />

//             <span className="text-white">
//               {user?.displayName}
//             </span>

//           </div>

//           <button
//             onClick={handleSignOut}
//             className="w-full rounded-lg bg-red-600 p-3 text-white"
//           >
//             Sign Out
//           </button>

//         </div>

//       )}

//     </header>
//   );
// };

// export default Header;







import { useRef, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from "react-redux";

import Header from "./Header";
import checkValidaData from "../utilis/validate";
import { auth } from "../utilis/firebase";
import { addUser } from "../utilis/userSlice";
import { user_url, BG_URL } from "../utilis/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidaData(
      email.current.value,
      password.current.value
    );

    setErrorMessage(message);

    if (message) return;

    // ------------------ SIGN UP ------------------

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name.current.value,
            photoURL: user_url,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;

              dispatch(
                addUser({
                  uid,
                  email,
                  displayName,
                  photoURL,
                })
              );
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
        })
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    }

    // ------------------ SIGN IN ------------------

    else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then(() => {})
        .catch((error) => {
          setErrorMessage(error.code + " - " + error.message);
        });
    }
  };

  const toggleSignINForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">

      <Header />

      {/* Background */}

      <img
        className="fixed inset-0 h-full w-full object-cover"
        src={BG_URL}
        alt="Background"
      />

      {/* Overlay */}

      <div className="fixed inset-0 bg-black/60"></div>

      {/* Login Form */}

      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">

        <form
          onSubmit={(e) => e.preventDefault()}
          className="w-full max-w-md rounded-xl bg-black/80 p-6 shadow-2xl sm:p-8"
        >

          <h1 className="mb-6 text-2xl font-bold text-white sm:text-3xl">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignInForm && (
            <input
              ref={name}
              type="text"
              placeholder="Full Name"
              className="mb-4 w-full rounded-lg bg-gray-700 px-4 py-3 text-sm text-white outline-none transition focus:ring-2 focus:ring-red-600 sm:text-base"
            />
          )}

          <input
            ref={email}
            type="email"
            placeholder="Email Address"
            className="mb-4 w-full rounded-lg bg-gray-700 px-4 py-3 text-sm text-white outline-none transition focus:ring-2 focus:ring-red-600 sm:text-base"
          />

          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="mb-2 w-full rounded-lg bg-gray-700 px-4 py-3 text-sm text-white outline-none transition focus:ring-2 focus:ring-red-600 sm:text-base"
          />

          {errorMessage && (
            <p className="mb-4 text-sm font-semibold text-red-500">
              {errorMessage}
            </p>
          )}

          <button
            onClick={handleButtonClick}
            className="mb-5 w-full rounded-lg bg-red-600 py-3 text-base font-bold text-white transition hover:bg-red-700"
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <p
            className="cursor-pointer text-center text-sm text-gray-300 transition hover:text-white sm:text-base"
            onClick={toggleSignINForm}
          >
            {isSignInForm
              ? "New to Netflix? Sign up now."
              : "Already have an account? Sign In"}
          </p>

        </form>

      </div>
    </div>
  );
};

export default Login;
