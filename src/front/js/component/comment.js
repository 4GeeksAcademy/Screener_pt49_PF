import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Comment = ({ movieID, UserID }) => {
    const { store, actions } = useContext(Context);
    const [comment, setComment] = useState('');
    const handlePostComment = async () => {
        try {
            await actions.postComment(comment, store.userId, movieID);
            setComment('');
            await actions.getComments();
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <div className="text-center mx-5">
                <div className="container-fluid">
                    <h5 className="m-3">Enter your comment here</h5>
                    <div className="form-floating">
                        <textarea
                            onChange={(e) => setComment(e.target.value)}
                            value={comment}
                            className="form-control"
                            placeholder="Leave a comment here"
                            id="commentArea"
                        ></textarea>
                        <input value={store.userId} className="d-none form-control" placeholder="User ID"></input>
                        <input value={movieID} className="d-none form-control" placeholder="Movie ID" id="movieID"></input>
                        <label htmlFor="commentArea">Comment</label>
                    </div>
                        <button onClick={() => handlePostComment()} className="btn btn-secondary m-3">
                            Post
                        </button>
                    </div>
                    {store.auth === false ? <p>Debes <Link to="/">iniciar sesión</Link> para dejar un comentario.</p> : null}
            </div>
        </>
    );
};

export default Comment;