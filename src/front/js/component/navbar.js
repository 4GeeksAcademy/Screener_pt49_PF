import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Screener</span>
				</Link>
				<div className="ml-auto">
					<Link to="/">
						{store.auth === true ? <button onClick={()=>actions.logOut()} className="btn btn-primary">Logout</button> : null}
					</Link>
					<Link to={"/watchlistUser"} >
					{store.auth === true ? <button className="btn btn-outline-primary">Watchlist User</button> : null}
					</Link>
				</div>
				<div className="ml-auto">
					<Link to="adminLogin">
						{store.adminLogin === true ? <button onClick={()=>actions.adminLogOut()} className="btn btn-primary">ADMIN Logout</button> : null}
					</Link>
				</div>
			</div>
		</nav>
	);
};
