import React, { useContext, useEffect, useState } from "react";
import { useParams, useResolvedPath } from "react-router-dom";
import { Context } from "../store/appContext";
import { Comment } from "../component/comment";
import { Link } from "react-router-dom";
import "../../styles/movieDetails.css";



export const MovieDetails = () => {
    const { store, actions } = useContext(Context);
    const { theid } = useParams();
    const [cast, setCast] = useState([]);
    const [director, setDirector] = useState("");
    const [isOnTheWatchlist, setisOnTheWatchlist] = useState(false)
    const [streamingInfo, setStreamingInfo] = useState([]);



    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2ZhNzNkZjUyZTYyNWQ5NGQ1NzMyNGI1YTFlNDgzYSIsInN1YiI6IjY1OTQwNzAwY2U0ZGRjNmQzODdmMDIzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DNQabtAWxQcVNGg9_oMH8JWkdoAHIrOkmlBiwpj1oG8'
        }
    };

    const handleAddMovieToUserWatchlist = async () => {
        try {
            await actions.addMovieToWatchlist(tuUserID, theid);
            await actions.getUserWatchlist(tuUserID);  // Espera a que se actualice la watchlist
    
            const userWatchlist = store.User_watchlist;
            if (userWatchlist.some(movie => movie.id === parseInt(theid))) {
                setisOnTheWatchlist(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleDeleteMovieWatchlist = async (user_id, movie_id) => {
        try {
            await actions.deleteMovieFromWatchlist(user_id, movie_id);
            await actions.getUserWatchlist(user_id);  // Espera a que se actualice la watchlist
    
            const userWatchlist = store.User_watchlist;
            if (!userWatchlist.some(movie => movie.id === parseInt(movie_id))) {
                setisOnTheWatchlist(false);
            }
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {

        console.log(parseInt(theid))
        const fetchData = async () => {
            try {
                if (cast.length === 0) {
                    const response = await fetch(`https://api.themoviedb.org/3/movie/${theid}/credits?language=es-ES`, options);
                    const data = await response.json();
                    setCast(data.cast.slice(0, 4));
                }
                actions.getMoviesFromApi();
                actions.getComments();
                actions.getUserWatchlist(theid);
                handleAddMovieToUserWatchlist()

            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const tuUserID = store.userId
    const imdbRating = store.imdbRating
    const rottenRating = store.rottenRating




    const movie = store.movies.find(movie => movie.id === parseInt(theid));
    const relevantComments = store.allComments.filter(comment => comment.movie_id === parseInt(theid));

    useEffect(() => {
        const optionsForDirector = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2ZhNzNkZjUyZTYyNWQ5NGQ1NzMyNGI1YTFlNDgzYSIsInN1YiI6IjY1OTQwNzAwY2U0ZGRjNmQzODdmMDIzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DNQabtAWxQcVNGg9_oMH8JWkdoAHIrOkmlBiwpj1oG8'
            }
        };
    
        fetch(`https://api.themoviedb.org/3/movie/${theid}/credits?language=es-ES`, optionsForDirector)
            .then(response => response.json())
            .then((jsonData) => jsonData.crew.find(({ job }) => job === 'Director'))
            .then(directorData => {
                if (directorData) {
                    setDirector(directorData.name);
                } else {
                    setDirector("Información no disponible");
                }
            })
            .catch(err => console.error(err));
    }, []);







    return (
        <div className="fullMovieDetail">
            {movie ? (
                <div>
                    <div className="container">
                    {store.auth === true && (
    <div className="container comment">
        <div>
            {isOnTheWatchlist ? (
                <button onClick={() => handleDeleteMovieWatchlist(tuUserID, theid)} type="button" className="removeFromWatchlist">
                    <span className="button__text">Remove from watchlist</span>

                </button>
            ) : (
                <button onClick={handleAddMovieToUserWatchlist} type="button" className="addToWatchList">
                    <span className="button__text">Add to watchlist</span>

                </button>
            )}
        </div>
    </div>
)}
                        <div className="row mt-5 ">
                            <div className="d-flex col-md-4">
                                <img style={{ width: "350px", borderRadius: "15px" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            </div>
                            <div className="col-md-4">
                                <h1>{movie.title}</h1>
                                <p>{movie.overview}</p>
                                <p>Título original: <b>{movie.original_title}</b></p>
                                <div className="d-flex">
                                    {cast.map((actor, index) => (
                                        <div key={index} className="me-3">
                                            <img style={{ width: "80px", borderRadius: "15px" }} src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={movie.title} />
                                            <p className="text-center mt-2">{actor.name} - {actor.character}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-dark">
                                    <div className="card-body">
                                        <p className="movie-specs">IMDB Score: {imdbRating === null ? "Unknown" : imdbRating}</p>
                                        <p className="movie-specs">Rotten Tomatoes Score: {rottenRating === null ? "Unknown" : rottenRating}</p>
                                        <p className="movie-specs">Director: <b>{director}</b></p>
                                        <p className="movie-specs">Fecha de lanzamiento: {movie.release_date === null ? "Unknown" : movie.release_date}</p>
                                    </div>
                                    <button onClick={() => console.log(movie)} >CLICK ME</button>  
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid col-8 list-group">
                        <h2>Comentarios:</h2>
                        <ul className="list-group">
                            {relevantComments.reverse().map((comment, index) => (
                                <li className="list-group-item d-flex justify-content-between align-items-start bg-secondary text-light mb-2" key={index}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{comment.name} dice:</div>
                                        {comment.comment_body}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                    {store.auth === true ?
                        <div className="container-fluid col-8">
                            <Comment movieID={theid} userID={tuUserID} />
                        </div>
                        : <p className="container-fluid col-8 my-3">Debes <Link to="/login">iniciar sesión</Link> para dejar un comentario.</p>
                    }
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};