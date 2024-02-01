import React, { useContext, useEffect, useState } from "react";
import { useParams, useResolvedPath } from "react-router-dom";
import { Context } from "../store/appContext";
import { Comment } from "../component/comment";
import { Link } from "react-router-dom";
import "../../styles/movieDetails.css";
import IMDbLogo from "../../img/IMDblogo.png";
import RottenLogo from "../../img/rottenlogo.png";



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
            await actions.getUserWatchlist(user_id); 

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
                actions.getRating(theid);
                handleAddMovieToUserWatchlist()

            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const tuUserID = store.userId
    const rottenRating = store.rottenRating
    const imdbRating = store.imdbRating




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
                
             </div>
        )}
            <div className="row mt-5 ">
                <div className="d-flex col-md-4">
                    <img className="movieDetailsPoster" style={{ maxWidth: "100%", borderRadius: "15px", maxHeight:"90%" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
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
                                <div className="card infoMovieCard">
                                    <div className="card-body">
                                        <p className="movie-specs"><img style={{width: "20%"}} src={IMDbLogo} />{imdbRating === null ? "Unknown" : imdbRating}</p>
                                        <p className="movie-specs"><img style={{width: "24%"}} src={RottenLogo} /> {rottenRating === null ? "Unknown" : rottenRating}</p>
                                        <p className="movie-specs">Director: <b>{director}</b></p>
                                        <p className="movie-specs">Fecha de lanzamiento: {movie.release_date === null ? "Unknown" : <b>{movie.release_date}</b>}</p>
                                    </div> 
                                </div>
                                {store.auth === true && (
                                <div>

                                    {isOnTheWatchlist ? (
                                        <button  onClick={() => handleDeleteMovieWatchlist(tuUserID, theid)} type="button" className="removeFromWatchlistButton">Eliminar de la watchlist</button>
                            ) : (
                                        <button onClick={handleAddMovieToUserWatchlist} type="button" className="addToWatchListButton text-center">Agregar a la watchlist</button>
                            )}
                                </div>
                                 )}
                            </div>
            
                        </div>
                        <div className="container border-top border-white mt-4 my-3 mb-5"></div>
                    </div>
                    {store.auth === true ?
                        <div className="container-fluid col-8">
                            <Comment movieID={theid} userID={tuUserID} />
                        </div>
                        : <p className="text-center container-fluid col-8 my-3">Debes <Link to="/login">iniciar sesión</Link> para dejar un comentario.</p>
                    }
                    <div className="container-fluid col-8 list-group movieDetailsContainer">
                        <h2 className="mb-3">Comentarios:</h2>
                        <ul className="list-group">
                            {relevantComments.reverse().map((comment, index) => (
                                <li className="list-group-item d-flex justify-content-between align-items-start bg-secondary text-light mb-3 movieDetailsCommentBox" key={index}>
                                    <div className="ms-2 me-auto">
                                        <div className="fw-bold">{comment.name}:</div>
                                        <div className="container border-top border-white mb-2"></div>
                                        {comment.comment_body}
                                    </div>
                                </li>
                    ))}
                        </ul>
                    </div>
        </div>
                    ) : (
        <p>Cargando...</p>
                    )}
    </div>
    );
};