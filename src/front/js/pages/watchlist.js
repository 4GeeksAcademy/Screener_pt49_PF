import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import "../../styles/watchlist.css";


import { Link } from "react-router-dom";


export const Watchlist = () => {
    
    useEffect(() => {
		actions.getWatchlist();
	  }, []);

	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			
			      <h1> WATCHLIST de todos los usuarios </h1>


            { store.watchlist.map (( myWatchlist) => 

            <div key={myWatchlist.id} className="container border">
                <p>Id del usuario:{ myWatchlist.user_id}</p>
                <p>Id de la película{ myWatchlist.movie_id}  
                </p>
                <button onClick={()=>actions.deleteWatchlist(myWatchlist.user_id)} >DELETE Watchlist</button>

            
                
            </div>
            )}

			
		</div>
	);
};
