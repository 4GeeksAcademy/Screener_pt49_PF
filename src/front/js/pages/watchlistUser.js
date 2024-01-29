import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../../styles/watchlistUser.css";

export const WatchlistUser = () => {
    const [deletionCompleted, setDeletionCompleted] = useState(false);
    const { store, actions } = useContext(Context);
    const theId = store.userId;

    useEffect(() => {
        actions.getUserWatchlist(store.userId);
    }, []);

    const handleDeleteMovieWatchlist = async (user_id, movie_id) => {
        try {
            await actions.deleteMovieFromWatchlist(user_id, movie_id);
            setDeletionCompleted(true);
            actions.getUserWatchlist(user_id);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="text-center mt-5">
            {/* {store.auth === false ? <Navigate to="/Login"/> : null} */}
            <h2> Todas las películas que tienes pendientes por ver </h2>
            <div className="row container mx-auto">
                {store.User_watchlist.map((myWatchlist) => (
                    
                    <div key={myWatchlist.id} className="col-md-3 position-relative">
                        <div className="position-relative">
                        <Link to={`/moviedetails/${myWatchlist.id}`} key={myWatchlist.id} className="ms-1 mt-1">
                            <img className="posterWatchlistUser"
                                src={`https://image.tmdb.org/t/p/w500${myWatchlist.poster_path}`}
                                alt={myWatchlist.title}/>
                        </Link>
                            <button
                                className="btn btn-danger position-absolute top-0 end-0 mt-2 mr-2 deleteButton"
                                onClick={() => handleDeleteMovieWatchlist(theId, myWatchlist.id)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};