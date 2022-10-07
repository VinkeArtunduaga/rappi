import React, { useRef } from "react";
import { useUserContext } from "../context/userContext";
import {GoogleAuthProvider,signInWithPopup,} from "firebase/auth";
import { auth } from "../firebase";

const Signin = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser} = useUserContext();

  const loginWithGoogle = () => {
    const googleProvider = new GoogleAuthProvider()
    return signInWithPopup(auth, googleProvider)
  }

  const handleGoogleSignIn = async () => {
    await loginWithGoogle()
  }

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  return (
    <div className="form">
      <h2> Iniciar sesión </h2>
      <form onSubmit={onSubmit}>
        <input 
            placeholder="Email" 
            type="email" 
            ref={emailRef} 
        />
        <input 
            placeholder="Contraseña" 
            type="password" 
            ref={psdRef} 
        />
        <button type="submit">
            Iniciar sesión
        </button>

        <button onClick={handleGoogleSignIn} className="google">
            Iniciar sesión con Google
        </button>

      </form>
    </div>
  );
};

export default Signin;