import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { MovieForm } from "../pages/movieForm";

export const MovieByName = () => {
    const { store, actions } = useContext(Context);
    const [inputValue, setInputValue] = useState("");
    const [mappedIndex, setMappedIndex] = useState(0);

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSearch = async () => {
        await actions.getMovieByName(inputValue);
        setMappedIndex(0);
    };

    const handleMapForward = () => {
        setMappedIndex((prevIndex) => Math.min(prevIndex + 1, store.moviesByName.results.length - 1));
    };

    const handleMapBackward = () => {
        setMappedIndex((prevIndex) => Math.max(prevIndex - 1, 0));
    };

    const handlePropertyInputChange = (property) => {
        const currentMovie = store.moviesByName.results[mappedIndex];
    
        // Aseguramos que todas las propiedades existan en la película actual
        const updatedMovie = {
            ...currentMovie,
            [property]: !currentMovie[property],
        };
    
        // Aseguramos que todas las propiedades de propertyLabels estén presentes y se establezcan en false si no están seleccionadas
        propertyLabels.forEach(label => {
            if (label.toLowerCase() !== property && updatedMovie[label.toLowerCase()] === undefined) {
                updatedMovie[label.toLowerCase()] = false;
            }
        });
    
        actions.setStore({
            moviesByName: {
                ...store.moviesByName,
                results: store.moviesByName.results.map((movie, index) => (index === mappedIndex ? updatedMovie : movie))
            }
        });
    };

    const handleSaveMovie = () => {
        const currentMovie = store.moviesByName.results[mappedIndex];
        actions.saveMovie(currentMovie);
        alert("Propiedades agregadas");
    };

    const propertyLabels = [
        "Comedy", "Couple", "Party", "Solitary", "Action", "Drama", "Family", "Kids",
        "Animation", "Violence", "Crime", "Historical", "Science_Fiction", "Marathon", "Happy", "Hard_to_Watch",
        "Light_Film", "Motivating", "War", "Disney", "suspense", "Sunday_Movie", "Terror", "Christmas",
        "Halloween", "White_Noise", "plot_twists"
    ];

    const renderInputsForColumn = (labels) => {
        return labels.map((label, index) => (
            <div key={index}>
                <label>
                    {label}:
                    <input
                        type="checkbox"
                        checked={store.moviesByName.results[mappedIndex][label.toLowerCase()]}
                        onChange={() => handlePropertyInputChange(label.toLowerCase())}
                    />
                </label>
            </div>
        ));
    };

    return (
        <>
            <h1 className="ms-5">Buscar películas por nombre y agregarlas a la Api</h1>
            <div>
                <input className="ms-5 mt-4" style={{width:"50rem", height:"2rem", }} type="text" value={inputValue} onChange={handleInputChange} placeholder="Ingrese el nombre de la película" />
            </div>
            <div>
                <button style={{width:"17rem"}} className="ms-5 mt-1" onClick={handleSearch}>Buscar</button>
            </div>
            
            <button className=" ms-5 mt-1" onClick={handleMapForward}>Siguiente película</button>
            <button className="ms-1" onClick={handleMapBackward}>Película anterior</button>
            

            {store.moviesByName.results && store.moviesByName.results.length > 0 && (
                <div className="container mt-4">
                    <h2>{store.moviesByName.results[mappedIndex].title}</h2>
                    <p>Movie id: {store.moviesByName.results[mappedIndex].id}</p>
                    <img
                        style={{ width: "120px" }}
                        src={`https://image.tmdb.org/t/p/w500${store.moviesByName.results[mappedIndex].poster_path}`}
                        alt={store.moviesByName.results[mappedIndex].title}
                    />
                    <p>{store.moviesByName.results[mappedIndex].overview}</p>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                {renderInputsForColumn(propertyLabels.slice(0, 9))}
                            </div>
                            <div className="col-md-4">
                                {renderInputsForColumn(propertyLabels.slice(9, 18))}
                            </div>
                            <div className="col-md-4">
                                {renderInputsForColumn(propertyLabels.slice(18))}
                            </div>
                        </div>
                    </div>

                    <button className="mt-4" onClick={handleSaveMovie}>Agregarle propiedades a la película</button>
                    <MovieForm actions={actions} store={store} />
                </div>
            )}
        </>
    );
};
