import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const Watchlist = () => {
    
    useEffect(() => {
		actions.getWatchlist();
        actions.deleteWatchlist();
	  }, []);

	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			
			      <h1> WATCHLIST </h1>


            { store.watchlist.map (( myWatchlist) => 

            <div className="container border">
                <p key= { myWatchlist.id}>{ myWatchlist.user_id}</p>
                
                <p key= { myWatchlist.id}> { myWatchlist.movie_id}  
                </p>

                <p>{  myWatchlist.id} </p>

                <button  className="btn btn-primary"
                onClick={()=>actions.deleteWatchlist( myWatchlist.id)}>DELETE Watchlist</button>

                
                <button  className="btn btn-secondary"
                >EDIT Watchlist</button>
            
                
            </div>
            )}

			
		</div>
	);
};
