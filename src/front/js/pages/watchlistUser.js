import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";



import { Link } from "react-router-dom";


export const WatchlistUser = () => {

    const [deletionCompleted, setDeletionCompleted] = useState(false);
    const { store, actions } = useContext(Context);
    const theId = store.userId
    
    useEffect(() => {
        actions.getUserWatchlist(store.userId);
	  }, []);
      if (deletionCompleted) {
        setDeletionCompleted(false);
      }

    const handleDeleteMovieWatchlist = async (user_id, movie_id ) => {
        await actions.deleteMovieFromWatchlist(user_id, movie_id);
        await actions.getUserWatchlist(user_id);
        setDeletionCompleted(true);
    };

	return (
		<div className="text-center mt-5">
			
			      <h1> WATCHLIST USER</h1>

                  { store.User_watchlist.map ((myWatchlist) => 

        <div key={myWatchlist.id} className="container border">
            <p> 
                {myWatchlist.title }
            </p>
   
            <img style={{ width: "120px" }} src={`https://image.tmdb.org/t/p/w500${myWatchlist.poster_path}`} alt={myWatchlist.title} />
    

   

    <button  className="btn btn-primary"
    onClick={()=>handleDeleteMovieWatchlist(theId, myWatchlist.id )}>DELETE Watchlist</button>


    
</div>
)}


           

            

			
		</div>
	);
};
