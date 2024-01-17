import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/home.css";

export const MoviesApi = () => {
  const { store, actions } = useContext(Context);
  const [deletionCompleted, setDeletionCompleted] = useState(false);

  useEffect(() => {
    actions.getMoviesFromApi();
    if (deletionCompleted) {
      // Si la eliminación está completa, resetea el estado
      setDeletionCompleted(false);
    }
  }, [deletionCompleted]);

  const handleDeleteMovie = async (movieId) => {
    await actions.deleteMovieFromAPI(movieId);
    // Indica que la eliminación está completa
    setDeletionCompleted(true);
  };

  return (
    <>
      <h1>Movies de la API</h1>
      {store.movies.length > 0 &&
        store.movies.map((movie) => (
          <div className="container border" key={movie.id}>
            <h2>{movie.title}</h2>
            <p>Id: {movie.id}</p>
            <div>
              <img style={{ width: "120px" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              <button className="ms-4" onClick={() => handleDeleteMovie(movie.id)}>
                Eliminar pelicula
              </button>
              {/* Utiliza Link para redirigir al formulario de edición */}
              <Link to={`/editmovie/${movie.id}`} className="ms-4">
                Editar pelicula
              </Link>
            </div>
            <p>ID: {movie.id}</p>
          </div>
        ))}
    </>
  );
};