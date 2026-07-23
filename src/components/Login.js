import checkValidaData from "../utilis/validate";
import Header from "./Header";
import { useRef, useState } from "react";

import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utilis/firebase";
import { addUser } from "../utilis/userSlice";
import { useDispatch } from "react-redux";
import { user_url } from "../utilis/constants"
import { BG_URL } from "../utilis/constants";


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
      password.current.value,
    );
    setErrorMessage(message);

    if (message) return;

    if (!isSignInForm) {
      // Signup Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: user_url

          })
          .then(() => {
            const { vid, email, displayName, photoURL } = auth.currentUser;
            dispatch(
              addUser({
                vid: vid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          
          })
    
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
          // ..
        });
    } else {
      // Sign in

      signInWithEmailAndPassword(auth,
        email.current.value, 
        password.current.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " - " + errorMessage);
        });
    }
  };

  const toggleSignINForm = () => {
    setIsSignInForm(!isSignInForm);
  };
  return (
    <div>
      <Header />
      <div>
        {<img className="absolute h-screen w-screen object-cover"
            src={BG_URL}
            alt="Background" 
          /> }
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute left-1/2 top-1/2 w-96 -translate-x-1/2 -translate-y-1/2 rounded-xl bg-black/80 p-8 text-white shadow-2xl"
      >
        <h1 className="mb-6 text-3xl font-bold">
          {isSignInForm ? "Sign in" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="mb-3 w-full rounded-lg bg-gray-600 px-4 py-3 outline-none focus:ring-2 focus:ring-red-600"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email-Adress"
          className="mb-3 w-full rounded bg-gray-600 px-4 py-3 outline-none focus:ring-2 focus:ring-red-600"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="mb-3 w-full rounded bg-gray-600 px-4 py-3 outline-none focus:ring-2 focus:ring-red-600"
        />

        <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

        <button
          className="mb-4 w-full rounded bg-red-600 p-4 text-lg font-bold transition hover:bg-red-700"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign in" : "Sign Up"}
        </button>
        <p className="cursor-pointer text-gray-300 hover:text-white" onClick={toggleSignINForm}>
          {isSignInForm
            ? "New to Netflix? signup now"
            : "Already registered? Sign in Now..."}
        </p>
      </form>
    </div>
  );
};

export default Login;
