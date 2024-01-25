import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Watchlist = () => {

  const { store, actions } = useContext(Context);

    const handleDelMovie = async(userId) => {
      try {
        await actions.deleteWatchlist(userId);
        await actions.getUserWatchlist(userId);
      }catch (error) {
        console.error(error);
    }
  };
	return (
		<div className="text-center mt-5">
			      <h1> WATCHLIST de todos los usuarios </h1>
            { store.watchlist.map (( myWatchlist) => 
            <div key={myWatchlist.id} className="container border">
                <p>Id del usuario:{ myWatchlist.user_id}</p>
                <p>Id de la película{ myWatchlist.movie_id}  
                </p>
                <button onClick={()=>handleDelMovie(myWatchlist.user_id)} className="btn btn-primary">DELETE Watchlist</button>
            </div>
            )}
		</div>
	);
};
