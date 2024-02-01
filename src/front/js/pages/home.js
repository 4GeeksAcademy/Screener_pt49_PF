import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";
import { Footer } from "../component/footer";
import { MoviesUser } from "../pages/moviesUser";
import apNow from "../../img/apNow.png";



export const Home = () => {
	const { store, actions } = useContext(Context);
	const isAuthenticated = store.auth;


	return (
		<>
			<div className="homeBody text-center mt-5">
				<div  className="firstLanding" src={apNow} style={{backgroundImage: `url(${apNow})`}}>
					<h1 className="firstLandingH1">
						Selección de joyas cinematográficas 
						<br></br>
						basada en tus gustos
					</h1>
					<h5 className="firstLandingH5">
						Si eres de los que pueden pasar horas buscando buen cine ¡estas en el lugar correcto!					
					</h5>
					<div className="row">
						<div className="col-12 toolContainer">
						{isAuthenticated && (
							<Link to={"/randomMovie"}>
								<button className="toolButton type1"><span className="btn-text">Ruleta de películas</span></button>
							</Link>
						)}
							<Link to={"/recomendacion"}>
								<button className="toolButton type1"><span className="btn-text">Recomiendame una pelicula</span></button>
							</Link>
                            {isAuthenticated && (
                                <Link to={"/watchlistUser"}>
                                    <button className="toolButton type1">
                                        <span className="btn-text">AI en tu watchlist</span>
                                    </button>
                                </Link>
                            )}
						</div>
					</div>
				</div>
				<div className="secondLanding row">
					<MoviesUser />
				</div>
				{/* <div className="thirdLanding row">
					<MoviesUser />
				</div> */}
			</div >
			<Footer />
		</>
	);
};
