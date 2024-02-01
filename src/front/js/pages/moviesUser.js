import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


import "../../styles/moviesUser.css"

export const MoviesUser = () => {
  const { store, actions } = useContext(Context);

  const [movieID, setMovieID] = useState('')

  const imdbRating = store.imdbRating

  // to get rating inster this code on the IMG tag  -  onMouseOver={()=>actions.getRating(movie.id)}


  useEffect(() => {
    actions.getMoviesFromApi();
  }, []);

  return (
    <div className="container moviesUserContainer">
      <div className="pageTitle title text-start m-4">
        <h2>Nuestras recomendaciones </h2>
      </div>
      <div className="row">
        {store.movies.length > 0 &&
          store.movies.map((movie) => (
            <>
              <div key={movie.id} className="mainPoster col-xs-6 col-sm-4 col-md-2 col-lg-1 ">
                <div className="cardPoster">
                  <Link to={`/moviedetails/${movie.id}`} className="text-decoration-none">
                    <img onMouseOver={()=>actions.getRating(movie.id)} className="posterImage" style={{ width: "100%" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                  </Link>
                  <div className="text">
                    <div className="card posterInfo">
                      <h6 className="card-header"><strong>{movie.title}</strong></h6>
                      <b className=" pb-3 text-center"><i className="iconIMDB fa-brands fa-imdb"/> 8 {imdbRating === null ? "Unknown" : imdbRating}</b>
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