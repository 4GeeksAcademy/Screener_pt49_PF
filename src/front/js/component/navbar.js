import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import "../../styles/navbar.css"
import LogoNavbar from "../../img/logoNavbar.png";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar fixed-top navbar-expand-lg">
			<div className="container">
				<Link to="/">
					<img src={LogoNavbar} alt="Client img" className="rounded mr-3" style={{height: 50, width: 120}}/>
				</Link>
				<div className="ml-auto">
					<Link to={"/watchlistUser"} >
						{store.auth === true ? <button className="btn">My watchlist<span className="badge bg-secondary rounded-pill ms-2">{store.User_watchlist.length}</span>
						</button> : null}
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="adminLogin">
						{store.adminLogin === true ? <button onClick={() => actions.adminLogOut()} >ADMIN Logout</button> : null}
					</Link>
					<div className="col">
						<div className="btn-group">
							<Link to={"/moviesUser"} ><button >All Movies</button></Link>
							<Link to={"/randomMovie"} ><button >Random movie</button></Link>
							{store.auth === true ? <Link to="/"><button onClick={() => actions.logOut()} >Logout</button></Link> :
								<div className="btn-group" role="group" aria-label="Basic example">
									<Link to="/login"><button type="button" >Login</button></Link>
								</div>
							}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
