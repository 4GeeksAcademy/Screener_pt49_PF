import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { UserForm } from "./usersForm";
import  Login  from "./login";


export const AdminPanel = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			
			
			<Link to = "/users"><button  className="btn btn-outline-primary">Administrador de usuarios</button></Link>
			<Link to={"/movies"} ><button className="btn btn-outline-primary">Create a Movie</button></Link>
			<Link to={"/moviesApi"} ><button className="btn btn-outline-primary">Administrador de peliculas</button></Link>
			<Link to={"/movies/comment_list"}><button className="btn btn-outline-primary">Administrador de comentarios</button></Link>
		</div>
	);
};
