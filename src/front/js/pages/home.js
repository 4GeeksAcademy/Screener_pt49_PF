import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { UserForm } from "./usersForm";
import  Login  from "./login";


export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			
			<Login />
			
			
			<Link to = "/users">
				<button  className="btn btn-outline-primary"> Link me to My users List</button>
			</Link>
			<Link to = "/signup">
				<button  className="btn btn-outline-primary">Signup</button>
			</Link>

			
			<Link to={"/movies"} ><button className="btn btn-outline-primary">Movies</button></Link>
			<Link to={"/moviesApi"} ><button className="btn btn-outline-primary">Movies de la api</button></Link>
		</div>
	);
};
