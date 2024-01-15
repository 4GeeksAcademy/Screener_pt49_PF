import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const MovieEditForm = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams(); // Obtén el id de la película de los parámetros de la URL

  const [movieData, setMovieData] = useState({
    title: "",
    release_date: "",
    poster_path: "",
    // ... Agrega aquí todas las demás propiedades del objeto movie
  });

  useEffect(() => {
    console.log("theid:", theid);
    console.log("store.movies:", store.movies);
    const movieToEdit = store.movies.find((movie) => movie.id === parseInt(theid));
    if (movieToEdit) {
      setMovieData({
        title: movieToEdit.title,
        release_date: movieToEdit.release_date,
        poster_path: movieToEdit.poster_path,
        // ... Agrega aquí todas las demás propiedades del objeto movie
      });
    }
  }, [theid, store.movies]);

  const handleInputChange = (e) => {
    // Maneja los cambios en los campos del formulario
    setMovieData({
      ...movieData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSaveChanges = () => {
    actions.editMovie(parseInt(theid), movieData);
  };

  return (
    <>
      <h1>Editar Película</h1>
      <form>
        <div>
        <label>Título:</label>
        <input type="text" name="title" value={movieData.title} onChange={handleInputChange} />
        </div>

        <div>
        <label>Fecha de lanzamiento:</label>
        <input type="text" name="release_date" value={movieData.release_date} onChange={handleInputChange} />
        </div>

        <div>
        <label>Ruta del póster:</label>
        <input type="text" name="poster_path" value={movieData.poster_path} onChange={handleInputChange} />
        </div>

        
        <button type="button" onClick={handleSaveChanges}>
          Guardar Cambios
        </button>
      </form>
    </>
  );
};