import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Comment } from "../component/comment";

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

    useEffect(() => {
        console.log(tuUserID)
        const fetchData = async () => {
            try {
                if (cast.length === 0) {
                    const response = await fetch(`https://api.themoviedb.org/3/movie/${theid}/credits?language=es-ES`, options);
                    const data = await response.json();
                    setCast(data.cast.slice(0, 5));
                }
                actions.getComments();
                actions.getMoviesFromApi();
            } catch (error) {
                console.error(error);
            }
        };
    
        fetchData();
    }, []);

    const tuUserID = store.userID

    const movie = store.movies.find(movie => movie.id === parseInt(theid));
    const relevantComments = store.allComments.filter(comment => comment.movie_id === parseInt(theid));

    return (
        <div>
            {movie ? (
                <div>
                    <div className="container">
                        <img style={{ width: "55rem", opacity: "1" }} src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
                        <div className="row mt-5 ">
                            <div className="col-md-4">
                                <img style={{ width: "350px" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                            </div>
                        <div className="col-md-4">
                            <h1>{movie.title}</h1>
                            <p>{movie.overview}</p>
                            <p>Título original: <b>{movie.original_title}</b></p>

                        <div className="d-flex">
                             {cast.map((actor, index) => (
                                <div key={index} className="me-3">
                                <img style={{ width: "100px" }} src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={movie.title} />
                                <p className="text-center mt-2">{actor.name} - {actor.character}</p>
                                </div>
                            ))}
                        </div>
                        </div>
                        <div>
                        <button>Agregar a la Watchlist</button>
                        </div>
                            <Comment movieID={theid} userID={tuUserID} />
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h2>Comentarios:</h2>
                        <ul>
                            {relevantComments.map((comment, index) => (
                                <li key={index}>
                                    <p>Usuario id: {comment.user_id}</p>
                                    <p>Comentario: {comment.comment_body}</p>
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