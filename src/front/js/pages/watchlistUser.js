import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";

export const WatchlistUser = () => {

    const [deletionCompleted, setDeletionCompleted] = useState(false);
    const { store, actions } = useContext(Context);
    const theId = store.userId

    useEffect(() => {
        actions.getUserWatchlist(store.userId);
    }, []);
    
    const handleDeleteMovieWatchlist = async (user_id, movie_id ) => {
        try {
            await actions.deleteMovieFromWatchlist(user_id, movie_id);
            setDeletionCompleted(true)           
            actions.getUserWatchlist(user_id);            
        } catch (error) {
            console.error(error);
        }
    };
    
	return (
		<div className="text-center mt-5">
            {store.auth === false ? <Navigate to="/Login"/> : null}
            <h1> WATCHLIST USER</h1>
            { store.User_watchlist.map ((myWatchlist) => 
                <div key={myWatchlist.id} className="container border">
                    <p>{myWatchlist.title }</p>
                    <img style={{ width: "120px" }} src={`https://image.tmdb.org/t/p/w500${myWatchlist.poster_path}`} alt={myWatchlist.title} />
                    <button  className="btn btn-primary" onClick={()=>handleDeleteMovieWatchlist(theId, myWatchlist.id )}>Delete</button>
                </div>
            )}
		</div>
	);
};
