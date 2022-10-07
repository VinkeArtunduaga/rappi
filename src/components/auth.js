import React, { useState } from "react";
import Signin from "./signin";
import Signup from "./signup";

const Auth = () => {
  const [index, setIndex] = useState(false);
  const toggleIndex = () => {
    setIndex((prevState) => !prevState);
  };
  return (
    <div className="container">
      {!index ? <Signin /> : <Signup />}
      <p onClick={toggleIndex}>
        {!index ? "¿Nuevo usuario? Haz click aquí " : "¿Ya tienes una cuenta?"}
      </p>
    </div>
  );
};

export default Auth;