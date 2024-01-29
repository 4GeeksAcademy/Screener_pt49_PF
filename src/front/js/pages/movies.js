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
        const firstColumnLabels = propertyLabels.slice(0, 8);
        const secondColumnLabels = propertyLabels.slice(8, 17);
        const thirdColumnLabels = propertyLabels.slice(17, 26);
        const fourthColumnLabels = propertyLabels.slice(26);

        const renderInputsForColumn = (labels) => {
            return labels.map((label, index) => (
                <div key={index}>
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
            <div className="container" style={{marginTop: "2%"}}>
            <div className="row">
                <div className="col-md-3">
                    {renderInputsForColumn(firstColumnLabels)}
                </div>
                <div className="col-md-3">
                    {renderInputsForColumn(secondColumnLabels)}
                </div>
                <div className="col-md-3">
                    {renderInputsForColumn(thirdColumnLabels)}
                </div>
                <div className="col-md-3">
                    {renderInputsForColumn(fourthColumnLabels)}
                </div>
            </div>
            </div>
        );
    };

    return (
        <div className="MovieApiContainer">  
            <div className="container">
                <h1>Películas listadas para agregar a la Api</h1>
            </div>
            {store.popularMovies.length > 0 && (
                <div className="container">
                    <div className="row">
                        {/* Columna izquierda con póster y detalles de la película */}
                        <div className="col-md-4">
                            <div>
                                <button className="me-2 movieChangeButton" onClick={handleNextMovie}>Siguiente pelicula</button>
                                <h2>{store.popularMovies[currentMovieIndex].title} // {store.popularMovies[currentMovieIndex].original_title}</h2>
                                <img style={{ width: "180px" }} src={`https://image.tmdb.org/t/p/w500${store.popularMovies[currentMovieIndex].poster_path}`} />
                                <p>Id de esta película: {store.popularMovies[currentMovieIndex].id}</p>
                            </div>
                        </div>
                        {/* Columna derecha con inputs */}
                        <div className="col-md-8">
                            {renderPropertyInputs()}
                            <p>{store.popularMovies[currentMovieIndex].overview}</p>
                            <div className="container">
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