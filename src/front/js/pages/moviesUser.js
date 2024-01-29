import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

import "../../styles/moviesUser.css"

export const MoviesUser = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getMoviesFromApi();
  }, []);

  return (
    
    <div className="container">
      <div className="title text-center m-4">
        <h1>Movies</h1>
    </div>
    <div className="row">
      {store.movies.length > 0 &&
        store.movies.map((movie) => (
          
          <div key={movie.id} className="col-md-2 mb-3">
            
            <Link to={`/moviedetails/${movie.id}`} className="text-decoration-none">
              <img  className="rounded-image" style={{ width: "100%" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </Link>
          </div>
          
        ))}
    </div>
  </div>
  
  );
};