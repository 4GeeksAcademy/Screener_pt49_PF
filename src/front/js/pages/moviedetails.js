import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Comment } from "../component/comment";

export const MovieDetails = () => {
    const { store, actions } = useContext(Context);
    const { theid } = useParams();
    

    useEffect(() => {
        actions.getMoviesFromApi();
        actions.getComments()
    }, [])

    // Buscar la película en el store usando el ID
    const movie = store.movies.find(movie => movie.id === parseInt(theid));
    const relevantComments = store.allComments.filter(comment => comment.movie_id === parseInt(theid));

    return (
        <div>
            {movie ? (
            <div>
                <div class="container">
                <img style={{ width: "55rem", opacity:"1" }} src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} alt={movie.title} />
                    <div class="row mt-5 ">
                        <div class="col-md-4">
                            <img style={{ width: "350px" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                        </div>
                        <div class="col-md-4">
                        <h1>{movie.title}</h1>
                        <p>{movie.overview}</p>
                        Fecha de estreno: <p><b>{movie.release_date}</b></p>
                        Titulo original:<p><b>{movie.original_title}</b></p>
                        </div>
                        <Comment movieID={theid} />
                 </div>
                </div>
                <div className="col-md-4">
                                <p>Comentarios:</p>
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