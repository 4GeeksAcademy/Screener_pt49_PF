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


    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2ZhNzNkZjUyZTYyNWQ5NGQ1NzMyNGI1YTFlNDgzYSIsInN1YiI6IjY1OTQwNzAwY2U0ZGRjNmQzODdmMDIzMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DNQabtAWxQcVNGg9_oMH8JWkdoAHIrOkmlBiwpj1oG8'
        }
    };

    const handleAddMovieToUserWatchlist = () => {
        actions.addMovieToWatchlist(tuUserID, theid)
        const userWatchlist = store.User_watchlist;
        console.log(userWatchlist);
        console.log(theid);

        if (userWatchlist.some(movie => movie.id === parseInt(theid))) {
            alert("Esta película ya está en la watchlist.");
        } else {
            console.log("No está.");
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                if (cast.length === 0) {
                    const response = await fetch(`https://api.themoviedb.org/3/movie/${theid}/credits?language=es-ES`, options);
                    const data = await response.json();
                    setCast(data.cast.slice(0, 4));
                }
                actions.getMoviesFromApi();
                actions.getComments();
                actions.getUserWatchlist();
                // actions.getRating(theid);
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, []);

    const tuUserID = store.userId
    const movieRating = store.imdbRating

    const movie = store.movies.find(movie => movie.id === parseInt(theid));
    const relevantComments = store.allComments.filter(comment => comment.movie_id === parseInt(theid));

    return (
        <div className="fullMovieDetail">
            {movie ? (
                <div>
                    <div className="container">
                        {store.auth === true ? 
                            <div className="container comment">
                                <div>
                                    <button onClick={()=>handleAddMovieToUserWatchlist()} type="button" className="addToWatchList">
                                        <span className="button__text">Add to watchlist</span>
                                        <span className="button__icon">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" stroke="currentColor" height="24" fill="none" className="svg">
                                                <line y2="19" y1="5" x2="12" x1="12"></line>
                                                <line y2="12" y1="12" x2="19" x1="5"></line>
                                            </svg>
                                        </span>
                                    </button>
                                </div>
                            </div>
                                : null
                        }
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
                                            <img style={{ width: "60px", borderRadius: "15px"}} src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={movie.title} />
                                            <p className="text-center mt-2">{actor.name} - {actor.character}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="card bg-secondary">
                                    <p>IMDB Score: {"movieRating"}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {store.auth === true ? 
                        <div className="container-fluid col-8">
                            <Comment movieID={theid} userID={tuUserID} />
                        </div>
                            : <p className="container-fluid col-8 my-3">Debes <Link to="/login">iniciar sesión</Link> para dejar un comentario.</p>
                    }
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
                </div>
            ) : (
                <p>Cargando...</p>
            )}
        </div>
    );
};