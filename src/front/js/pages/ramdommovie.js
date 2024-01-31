import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/randomMovie.css";

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
            <button onClick={() => getRandomMovie()}>Get a random Movie!</button>
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
            <p className="text-center">No hay pelicula seleccionada!</p>
          )}
        </>
      ) : (
        <div className="container text-center mt-5 pt-4">
          <p><b>Aqui puedes obtener una pelicula al azar pero debes iniciar sesión primero. <Link to="/">¡Haz clic aquí para iniciar sesión!</Link></b></p>
        </div>
      )}
    </>

  )
}