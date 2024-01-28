import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Logo from "../../img/Logo150x150.png";
import { Footer } from "../component/footer";




export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<>
			<div className="text-center mt-5">
				<img src={Logo} alt="Client img" className="rounded mr-3" />
				<div>
					<Link to={"/recomendacion"}>
						<button className="borderRecomendation"><span className="btn2"><span className="getRecomendationButton">Recomiendame una película!</span></span></button>
					</Link>
				</div>
				<h1>Hi this is where you choose your film</h1>
			</div >
			<Footer />
		</>
	);
};
