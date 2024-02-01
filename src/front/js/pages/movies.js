import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { MovieForm } from "../pages/movieForm";
import "../../styles/movies.css";

export const Movies = () => {
    const { store, actions } = useContext(Context);
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

    useEffect(() => {
        actions.getPopularMovies();
        actions.getMoviesFromApi();
        actions.getMovieByName();
    }, []);

    const handleNextMovie = () => {
        setCurrentMovieIndex((prevIndex) => (prevIndex + 1) % store.popularMovies.length);
    };

    const handlePreMovie = () => {
        setCurrentMovieIndex((prevIndex) => (prevIndex - 1) % store.popularMovies.length);
    };

    const handlePropertyInputChange = (property) => {
        const updatedMovies = store.popularMovies.map((movie, index) => {
            if (index === currentMovieIndex) {
                return {
                    ...movie,
                    [property]: !movie[property],
                };
            }
            return movie;
        });

        actions.setStore({ popularMovies: updatedMovies });
    };

    const handleSaveMovie = () => {
        const currentMovie = store.popularMovies[currentMovieIndex];
        actions.saveMovie(currentMovie);
        alert("Propiedades agregadas");
    };

    const propertyLabels = [
        "Comedy", "Couple", "Party", "Solitary", "Action", "Drama", "Family", "Kids",
        "Animation", "Violence", "Crime", "Historical", "Science_Fiction", "Marathon", "Happy", "Hard_to_Watch",
        "Light_Film", "Motivating", "War", "Disney", "suspence", "Sunday_Movie", "Terror", "Christmas",
        "Halloween", "White_Noise", "plot_twits", "romantic", "disney_live", "new", "classic", "children", "cry", "live_action"
    ];

    const renderPropertyInputs = () => {
        const columnLabels = [];
        for (let i = 0; i < 6; i++) {
            columnLabels.push(propertyLabels.slice(i * 6, (i + 1) * 6));
        }

        const renderInputsForColumn = (labels) => {
            return labels.map((label, index) => (
                <div key={index} className="mb-3">
                    <label>
                        {label}:
                        <input
                            type="checkbox"
                            checked={store.popularMovies[currentMovieIndex][label.toLowerCase()]}
                            onChange={() => handlePropertyInputChange(label.toLowerCase())}
                        />
                    </label>
                </div>
            ));
        };

        return (
            <div className="container" style={{ marginTop: "1%" }}>
                <div className="row">
                    <div className="col-md-12">
                        <div className="container">
                            <div className="row">
                                {columnLabels.map((column, columnIndex) => (
                                    <div key={columnIndex} className="col-md-2">
                                        {renderInputsForColumn(column)}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="MovieApiContainer">
            <div className="container">
                <h1 style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {store.popularMovies.length > 0 && `${store.popularMovies[currentMovieIndex].title} // ${store.popularMovies[currentMovieIndex].original_title}`}
                </h1>
            </div>
            {store.popularMovies.length > 0 && (
                <div className="container">
                    <div className="row">
                        {/* Columna única con póster y detalles de la película */}
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <img style={{ width: "300px" }} src={`https://image.tmdb.org/t/p/w500${store.popularMovies[currentMovieIndex].poster_path}`} />
                                </div>
                                <div className="col-md-8">
                                    <p>Id de esta película: {store.popularMovies[currentMovieIndex].id}</p>
                                    <p>{store.popularMovies[currentMovieIndex].overview}</p>
                                    {renderPropertyInputs()}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Fila para los botones */}
                    <div className="row">
                        <div className="col-md-12">
                            <div className="container mt-4">
                                <button className="me-2 movieChangeButton" onClick={handleNextMovie}>Siguiente película</button>
                                <button className="me-2 movieChangeButton" onClick={handleSaveMovie}>Agregarle propiedades a la pelicula</button>
                                <button className="me-2" onClick={handlePreMovie}>Volver</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <MovieForm actions={actions} store={store} />
        </div>
    );
};