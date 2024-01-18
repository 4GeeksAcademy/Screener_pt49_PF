import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { UserForm } from "./usersForm";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			
			<UserForm/>
			
			
			<Link to = "/users">
			<button  className="btn btn-outline-primary"> Link me to My users List</button>
			</Link>

			
			<h1>Hello Rigo!!</h1>
			<Link to={"/moviesUser"} ><button>Todas las peliculas</button></Link>
			<Link to={"/movies"} ><button>Crear una pelicula</button></Link>
			<Link to={"/moviesApi"} ><button>Admin de peliculas</button></Link>
			<Link to={"/movies/comment"} ><button>Crear Comentario</button></Link>
			<Link to={"/movies/comment_list"} ><button>ver comentarios</button></Link>
			<div className="alert alert-info">
				{store.message || "Loading message from the backend (make sure your python backend is running)..."}
			</div>
			<p>
				This boilerplate comes with lots of documentation:{" "}
				<a href="https://start.4geeksacademy.com/starters/react-flask">
					Read documentation
				</a>
			</p>
		</div>
	);
};
