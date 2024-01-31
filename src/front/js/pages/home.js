import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import Logo from "../../img/Logo150x150.png";
import { Footer } from "../component/footer";
import { MoviesUser } from "../pages/moviesUser";




export const Home = () => {
	const { store, actions } = useContext(Context);


	return (
		<>
			<div className="homeBody text-center mt-5">
				<div className="firstLanding">
					<h1 className="firstLandingH1">
						Joyas cinematográficas diseñadas solo para ti
					</h1>
					<h5 className="firstLandingH5">
						Si eres como nosotros que nunca sabe que ver, y con ello puedes pasar horas, ¡estas en el lugar correcto!
					</h5>
					<div className="row">
						<div className="col-6 toolContainer">
							<Link to="/chatgpt">
								<button className="borderRecomendation"><span className="toolButton"><span className="getRecomendationButton">¡Que la IA me sorprenda!</span></span></button>
							</Link>
						</div>
						<div className="col-6 toolContainer">
							<Link to={"/recomendacion"}>
								<button className="borderRecomendation"><span className="toolButton"><span className="getRecomendationButton">Quiero elegir yo</span></span></button>
							</Link>
						</div>
					</div>
				</div>
				<div className="secondLanding row">
					<MoviesUser />
				</div>
			</div >
			<Footer />
		</>
	);
};
