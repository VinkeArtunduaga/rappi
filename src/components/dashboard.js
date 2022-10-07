import React from "react";
import { useUserContext } from "../context/userContext";

const Dashboard = () => {
  const { user, logoutUser } = useUserContext();
  return (
    <div className="form">
      <form>
        <h1>Dashboard </h1>
        <h2>Nombre : {user.displayName}</h2>
        <h2>Email : {user.email}</h2>
        <button onClick={logoutUser}>Cerrar sesión</button>
      </form>  
    </div>
  );
};

export default Dashboard;