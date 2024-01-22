import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const WatchlistUser = () => {
    
    useEffect(() => {
		
        actions.getUserWatchlist();
	  }, []);

	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			
			      <h1> WATCHLIST USER</h1>

                  { store.User_watchlist.map (( myWatchlist) => 

        <div className="container border">
            <p> 
                {myWatchlist.title }
            </p>
   
            <img style={{ width: "120px" }} src={`https://image.tmdb.org/t/p/w500${myWatchlist.poster_path}`} alt={myWatchlist.title} />
    

   

    <button  className="btn btn-primary"
    onClick={()=>actions.deleteWatchlist( myWatchlist.id)}>DELETE Watchlist</button>

   
    <button  className="btn btn-secondary"  
    onClick={ console.log (myWatchlist.id)}
    >EDIT Watchlist</button>

    
</div>
)}


           

            

			
		</div>
	);
};
