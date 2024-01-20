import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Comment = ({ movieID, UserID }) => {
    const { store, actions } = useContext(Context);
    const [comment, setComment] = useState('');

    const handlePostComment = () => {
        actions.postComment(comment, UserID, movieID);
        setComment('');
    };

    return (
        <>
            <div className="card text-center mx-5">
                <div className="card-body">
                    <h5 className="card-title">Enter your comment here</h5>
                    <div className="form-floating">
                        <textarea
                            onChange={(e) => setComment(e.target.value)}
                            value={comment}
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="commentArea"
                        ></textarea>
                        <input value={store.userId} className="form-control" placeholder="User ID" id="userID"></input>
                        <input value={movieID} className="form-control" placeholder="Movie ID" id="movieID"></input>
                        <label htmlFor="commentArea">Comment</label>
                    </div>
                    
                    {store.auth ? (
                        <button onClick={() => handlePostComment()} className="btn btn-primary">
                            Post
                        </button>
                    ) : (
                        <p>Debes <Link to="/">iniciar sesión</Link> para dejar un comentario.</p>
                    )}

                    <Link to={"/movies/comment_list"}>
                        <button>View Comments</button>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default Comment;