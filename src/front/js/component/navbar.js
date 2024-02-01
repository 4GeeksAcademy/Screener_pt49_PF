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

	document.addEventListener('DOMContentLoaded', function () {
		window.addEventListener('scroll', myFunctionForSticky);
		var navbar = document.getElementById("navbar");
		var sticky = navbar.offsetTop;
		function myFunctionForSticky() {
			if (window.scrollY >= sticky) {
				console.log("window.pageYOffset >= sticky");
			} else {
				console.log("Not window.pageYOffset >= sticky");
			}
			if (window.scrollY <= sticky) {
				navbar.classList.add("sticky");
			} else {
				navbar.classList.remove("sticky");
			}
		}
		function myFunctionForResponsive() {
			navbar.classList.toggle('responsive');
		}
	})

	return (
		<>
			<nav id="navbar" className="navbar fixed-top navbar-expand-lg">
				<div className="container-fluid main">
					<div className="logoButton col-sm-2 col-md-3 col-lg-1 text-start">
						<Link to="/">
							<img src={LogoNavbar} alt="Client img" className="rounded" style={{ height: 50, width: 120 }} />
						</Link>
					</div>
					<div className="col-lg-9 d-none d-md-block text-start">
						<button className="navButton" >Peliculas</button>
						<button className="navButton" >Series</button>
						<button className="navButton" >Colecciones</button>
						<button className="navButton" >Festivales</button>
						<button className="navButton" >Smart Favorites</button>
						<Link to={"/watchlistUser"} >
							{store.auth === true ? <button className="navButton btn text-light">Mi lista<span className="badge bg-secondary rounded-pill ms-2">{store.watchlist.length}</span>
							</button> : null}
						</Link>
						<button className="navDropdown nav-item dropdown">
							<a className="navButton nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Más</a>
							<ul className="bg-dark text-light dropdown-menu">
								<li><a className="dropdownButton dropdown-item" href="#">Ultimos dias</a></li>
								<li><a className="dropdownButton dropdown-item" href="#">Novedades</a></li>
								<li><a className="dropdownButton dropdown-item" href="#">Proximamente</a></li>
								<li><a className="dropdownButton dropdown-item" href="#">Blog</a></li>
								<li><hr className="dropdown-divider" /></li>
								<li><a className="dropdownButton dropdown-item" href="#">Ayuda</a></li>
							</ul>
						</button>
					</div>
					<div className="logButton btn-group col-lg-3 col-sm-5 col-md-4">
						<div className="">
							{store.auth === true ? <Link to={"/private"} ><button className="navButton">Perfil</button></Link> : null}
							{store.adminLogin === true ? <button className="navButton" onClick={() => actions.adminLogOut()} >ADMIN Logout</button> : null}
							{store.auth === true ? <Link to="/"><button className="navButton" onClick={() => actions.logOut()} >Cerrar sesion</button></Link> :
								<div className="btn-group" role="group" aria-label="Basic example">
									<Link to="/login"><button className="navButton" type="button" >Iniciar sesion</button></Link>
								</div>
							}
						</div>
					</div>
				</div>
			</nav>
		</>
	);
};