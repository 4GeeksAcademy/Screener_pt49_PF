import { Link } from "react-router-dom";
import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
			<div className="container">
				<Link to="/">
					<span className="navbar-brand mb-0 h1">Screener</span>
				</Link>
				<div className="ml-auto">
					<Link to={"/watchlistUser"} >
					{store.auth === true ? <button className="btn btn-outline-primary">Watchlist User</button> : null}
					</Link>
				</div>

				<div className="ml-auto">
					<Link to="adminLogin">
						{store.adminLogin === true ? <button onClick={()=>actions.adminLogOut()} className="btn btn-primary">ADMIN Logout</button> : null}
					</Link>
					<div className="col">
						<div className="btn-group">
							<Link to={"/moviesUser"} ><button className="btn btn-outline-primary">All Movies</button></Link>
							<Link to={"/randomMovie"} ><button className="btn btn-outline-primary">Random movie</button></Link>
							{store.auth === true ? <Link to="/"><button onClick={()=>actions.logOut()} className="btn btn-primary">Logout</button></Link> : 
							<div className="btn-group" role="group" aria-label="Basic example">
								<Link to = "/signup"><button type="button" className="btn btn-success">Signup</button></Link>
								<Link to = "/login"><button type="button" className="btn btn-success">Login</button></Link>
							</div>
							}
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
};
