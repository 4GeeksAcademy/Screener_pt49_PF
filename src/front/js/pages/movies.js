import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { MovieForm } from "../pages/movieForm";
import "../../styles/home.css";

export const Movies = () => {
    const { store, actions } = useContext(Context);
    const [currentMovieIndex, setCurrentMovieIndex] = useState(0);

    useEffect(() => {
        actions.getPopularMovies();
        actions.getMoviesFromApi();
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
        "Halloween", "White_Noise", "plot_twits"
    ];

    const renderPropertyInputs = () => {
        const firstColumnLabels = propertyLabels.slice(0, 10);
        const secondColumnLabels = propertyLabels.slice(10, 20);
        const thirdColumnLabels = propertyLabels.slice(20);

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
            <div className="container" style={{marginTop: "80px"}}>
            <div className="row">
                <div className="col-md-4">
                    {renderInputsForColumn(firstColumnLabels)}
                </div>
                <div className="col-md-4">
                    {renderInputsForColumn(secondColumnLabels)}
                </div>
                <div className="col-md-4">
                    {renderInputsForColumn(thirdColumnLabels)}
                </div>
            </div>
            </div>
        );
    };

    return (
        <>  
            <h1>Movies de la API TMDB</h1>
            {store.popularMovies.length > 0 && (
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>{store.popularMovies[currentMovieIndex].title}</h2>
                            <img style={{ width: "180px" }} src={`https://image.tmdb.org/t/p/w500${store.popularMovies[currentMovieIndex].poster_path}`} />
                            <p>{store.popularMovies[currentMovieIndex].id}</p>
                        </div>
                        <div className="col-md-9">
                            {renderPropertyInputs()}
                        </div>
                        <div className="col-12">
                            <p>{store.popularMovies[currentMovieIndex].overview}</p>
                            <div className="container">
                                <button className="me-2" onClick={handleNextMovie}>Siguiente pelicula</button>
                                <button className="me-2" onClick={handlePreMovie}>Pelicula anterior</button>
                                <button className="me-2" onClick={handleSaveMovie}>Agregarle propiedades a la pelicula</button>
                            </div>
                        </div>
                        </div>
                            <MovieForm actions={actions} store={store} />
                </div>
            )}
        </>
    );
};