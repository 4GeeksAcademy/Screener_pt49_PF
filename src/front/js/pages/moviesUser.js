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

    <div className="container moviesUserContainer">
      <div className="pageTitle title text-start m-4">
        <h2>Nuestras recomendaciones </h2>
      <button onClick={()=>console.log(store.movies)}>Click me!</button>
      </div>
      <div className="row">
        {store.movies.length > 0 &&
          store.movies.map((movie) => (
            <>
              <div key={movie.id} className="mainPoster col-xs-6 col-sm-4 col-md-2 col-lg-1 ">
                <div className="cardPoster">
                  <Link to={`/moviedetails/${movie.id}`} className="text-decoration-none">
                    <img className="rounded-image" style={{ width: "90%" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                  </Link>
                  <div className="text">
                    <div className="posterInfo">
                      <h6>{movie.title}</h6>
                      <p>{movie.overview}</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ))}
      </div>
    </div>

  );
};