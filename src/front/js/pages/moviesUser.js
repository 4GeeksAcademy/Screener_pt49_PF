import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const MoviesUser = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getMoviesFromApi();
  }, []);

  return (
    <div className="container">
      <h1>Movies</h1>
      <div className="d-flex flex-wrap">
        {store.movies.length > 0 &&
          store.movies.map((movie) => (
            <Link to={`/moviedetails/${movie.id}`} key={movie.id} className="ms-4">
              <img style={{ width: "150px" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </Link>
          ))}
      </div>
    </div>
  );
};