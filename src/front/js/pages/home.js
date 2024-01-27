import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Logo from "../../img/Logo150x150.png";




export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			
			<img src={Logo} alt="Client img" className="rounded mr-3" />	

			<h1>Hi this is where you choose your film</h1>
			
		</div>
	);
};
