import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import "../../styles/navbar.css"
import Logo from "../../img/Logo100x100.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg bg-body-light">
			<div className="container">
				<Link to="/">
				<img src={Logo} alt="Client img" className="rounded mr-3" />
				</Link>
				<div className="ml-auto">
					<Link to={"/watchlistUser"} >
						{store.auth === true ? <button className="btn">My watchlist<span className="badge bg-secondary rounded-pill ms-2">{store.watchlist.length}</span>
					</button> : null}
					</Link>
				</div>    

				<div className="ml-auto">
					<Link to="adminLogin">
						{store.adminLogin === true ? <button onClick={()=>actions.adminLogOut()} >ADMIN Logout</button> : null}
					</Link>
					<div className="col">
						<div className="btn-group">
							<Link to={"/moviesUser"} ><button >All Movies</button></Link>
							<Link to={"/randomMovie"} ><button >Random movie</button></Link>
							{store.auth === true ? <Link to="/"><button onClick={()=>actions.logOut()} >Logout</button></Link> : 
							<div className="btn-group" role="group" aria-label="Basic example">
								<Link to = "/signup"><button type="button">Signup</button></Link>
								<Link to = "/login"><button type="button" >Login</button></Link>
							</div>
							}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
