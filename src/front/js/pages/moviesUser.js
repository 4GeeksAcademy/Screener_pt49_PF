import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";


import "../../styles/moviesUser.css"

export const MoviesUser = () => {
  const { store, actions } = useContext(Context);
  const [movieID, setMovieID] = useState('')
  const imdbRating = store.imdbRating
  const maxMoviesToRender = 8;
  const movies = store.movies;


  useEffect(() => {
    actions.getMoviesFromApi();
  }, []);

  // to get rating inster this code on the IMG tag  -  onMouseOver={()=>actions.getRating(movie.id)}

  return (
    <div className="container moviesUserContainer">
      <div className="pageTitle title text-start m-4">
        <h2>Nuestras recomendaciones </h2>
      </div>

      <div className="row">
        {store.movies.length > 0 &&
          movies.slice(0, maxMoviesToRender).map((movie) => (
            <>
              <div key={movie.id} className="mainPoster col-xs-6 col-sm-4 col-md-2 col-lg-1 ">
                <div className="cardPoster">
                  <Link to={`/moviedetails/${movie.id}`} className="text-decoration-none">
                    <img className="posterImage" style={{ width: "100%" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                  </Link>
                  <div className="text text-start">
                    <div className="card posterInfo">
                      <h6 className="card-header"><strong>{movie.title}</strong></h6>
                      <div className="ratingCont">
                        <i className="iconIMDB fa-brands fa-imdb" />
                        <b className="ratingNumber">8.4{imdbRating === null ? "Unknown" : imdbRating}</b>
                      </div>
                      <p className="">{movie.overview}</p>
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