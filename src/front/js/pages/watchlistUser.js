import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/watchlistUser.css"



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
        <div className="container">
		    <div className="title text-center m-4">
			
			      <h1> My Watchlist</h1>
                  <br></br>

                    <div className="row">
                    { store.User_watchlist.map ((myWatchlist) => 

                <div key={myWatchlist.id} className="col-md-4 mb-3">
                    <p> 
                        {myWatchlist.title }
                    </p>
        
                    <img className="rounded-image" style={{ width: "100%" }} src={`https://image.tmdb.org/t/p/w500${myWatchlist.poster_path}`} alt={myWatchlist.title} />
            
                    <button  className="button mt-5"
                    onClick={()=>handleDeleteMovieWatchlist(theId, myWatchlist.id )}>Borrar película</button>
                    
                </div>
                        )}

        </div>	
		</div>
        </div>
	);
};
