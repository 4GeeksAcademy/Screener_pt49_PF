import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { UserForm } from "./usersForm";
import  Login  from "./login";

// import  Navbar_admin  from "./component/navbar_admin";
export const AdminPanel = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="text-center mt-5">
            {store.adminLogin === false ? <Navigate to="/adminLogin"/> : null}
            <Link to = "/users"><button  className="btn btn-outline-primary">Administrador de usuarios</button></Link>
            <Link to={"/movies"} ><button className="btn btn-outline-primary">Crear una película de la lista</button></Link>
            <Link to={"/movieByName"} ><button className="btn btn-outline-primary">Crear una película por nombre</button></Link>
            <Link to={"/moviesApi"} ><button className="btn btn-outline-primary">Administrador de peliculas</button></Link>
            <Link to={"/movies/comment_list"}><button className="btn btn-outline-primary">Administrador de comentarios</button></Link>
            <Link to={"/watchlist"} ><button className="btn btn-outline-primary">Watchlist</button></Link>
        </div>
    );
};

