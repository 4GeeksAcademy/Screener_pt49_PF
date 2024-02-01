import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/randomMovie.css";
import { Navigate } from "react-router-dom";


export const RandomMovie = () => {
  const { store, actions } = useContext(Context);
  const [randomMovie, setrandomMovie] = useState(null);

  useEffect(() => {
    actions.getMoviesFromApi();
  }, []);

  const getRandomMovie = () => {
    const movies = store.movies;
    if (movies && movies.length > 0) {
      const randomIndex = Math.floor(Math.random() * movies.length);
      const selectedRandomMovie = movies[randomIndex];
      setrandomMovie(selectedRandomMovie)
    }
  };

  return (
    <>
      {store.auth ? (
        <>
          <div className="mainCont container text-center">

            <button onClick={() => getRandomMovie()} className="toolButton type1 mt-5 mb-2"><span className="btn-text">Una película al azar</span></button>
          </div>
          {randomMovie ? (
            <>
              <div className="container text-center">
                <h2>{randomMovie.title}</h2>
                <Link to={`/moviedetails/${randomMovie.id}`} key={randomMovie.id} className="ms-1 mt-1">
                  <img style={{ width: "30%" }} src={`https://image.tmdb.org/t/p/w500${randomMovie.poster_path}`} alt={randomMovie.title} />
                </Link>
              </div>
            </>
          ) : (
            <p className="text-center">Haz click para obtener una película al azar</p>
          )}
        </>
      ) : (
        <div className="container text-center mt-5 pt-4">
          <p><b>Aqui puedes obtener una pelicula al azar pero debes iniciar sesión primero. <Link to="/login">¡Haz clic aquí para iniciar sesión!</Link></b></p>
        </div>
      )}
    </>

  )
}