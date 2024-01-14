import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { UserForm } from "./userForm";
import { Link } from "react-router-dom";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			
			<UserForm/>
			
			
			<Link to = "/users">
			<button> link me to users</button>
			</Link>

			
		</div>
	);
};
