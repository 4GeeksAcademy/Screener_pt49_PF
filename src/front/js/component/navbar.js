import { Link } from "react-router-dom";
import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import "../../styles/navbar.css"
import LogoNavbar from "../../img/logoNavbar.png";


export const Navbar = () => {

	useEffect(() => {
		actions.getUserWatchlist(store.userId);
	}, []);

	const { store, actions } = useContext(Context);
	return (
		<>
			<nav className="navbar fixed-top navbar-expand-lg">
				<div className="container-fluid main">
					<div className="logoButton col-sm-2 col-md-3 col-lg-1 text-start">
						<Link to="/">
							<img src={LogoNavbar} alt="Client img" className="rounded" style={{ height: 50, width: 120 }} />
						</Link>
					</div>
					<div className="generalButtons col-lg-8 d-none d-md-block text-start">
						<Link to={"/moviesUser"} ><button >Peliculas</button></Link>
						<Link to={"/randomMovie"} ><button >Pelicula aleatoria</button></Link>
						<Link to={"/watchlistUser"} >
							{store.auth === true ? <button className="btn text-light">Peliculas guardadas<span className="badge bg-secondary rounded-pill ms-2">{store.watchlist.length}</span>
							</button> : null}
						</Link>
					</div>
					<div className="logButton btn-group col-lg-3 col-sm-5 col-md-4">
						<div className="">
							{store.auth === true ? <Link to={"/private"} ><button >Perfil</button></Link> : null}
							{store.adminLogin === true ? <button onClick={() => actions.adminLogOut()} >ADMIN Logout</button> : null}
							{store.auth === true ? <Link to="/"><button onClick={() => actions.logOut()} >Cerrar sesion</button></Link> :
								<div className="btn-group" role="group" aria-label="Basic example">
									<Link to="/login"><button type="button" >Iniciar sesion</button></Link>
								</div>
							}
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};