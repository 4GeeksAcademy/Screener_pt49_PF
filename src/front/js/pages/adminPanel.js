import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/adminPanel.css";
import { UserForm } from "./usersForm";
import Login from "./login";

// import  Navbar_admin  from "./component/navbar_admin";
export const AdminPanel = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="adminButtonsContainer mt-5">
      {store.adminLogin === false ? <Navigate to="/adminLogin" /> : null}
      <div className="btn-row">
        <Link to={"/movies"}>
          <button className="adminButtons btn btn-light btn-lg">Crear una película de la lista</button>
        </Link>
        <Link to={"/movieByName"}>
          <button className="adminButtons btn btn-light btn-lg">Crear una película por nombre</button>
        </Link>
        <Link to={"/moviesApi"}>
          <button className="adminButtons btn btn-light btn-lg">Administrador de peliculas</button>
        </Link>
        <Link to="/users">
          <button className="adminButtons btn btn-light btn-lg">Administrador de usuarios</button>
        </Link>
        <Link to={"/movies/comment_list"}>
          <button className="adminButtons btn btn-light btn-lg">Administrador de comentarios</button>
        </Link>
        <Link to={"/watchlist"}>
          <button className="adminButtons btn btn-light btn-lg">Watchlist</button>
        </Link>
      </div>
    </div>
  );
};

