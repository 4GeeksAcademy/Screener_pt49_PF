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
			
			<Link to = "/signup">
				<button  className="btn btn-outline-primary">Signup</button>
			</Link>


			
			<Link to={"/movies"} ><button className="btn btn-outline-primary">Movies</button></Link>
			<Link to={"/moviesApi"} ><button className="btn btn-outline-primary">Movies de la api</button></Link>
			<Link to={"/watchlist"} ><button className="btn btn-outline-primary">Watchlist</button></Link>
			<Link to={"/watchlistUser"} ><button className="btn btn-outline-primary">Watchlist User</button></Link>
			

			<Link to={"/moviesUser"} ><button className="btn btn-outline-primary">All Movies</button></Link>
			<Link to={"/randomMovie"} ><button className="btn btn-outline-primary">Random movie</button></Link>

		</div>
	);
};
