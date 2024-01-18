import React, { Component, useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
// import "../../styles/comment.css";
export const Comment = () => {
    const { store, actions } = useContext(Context);
    const [comment, setComment] = useState('') 
    const [commentID, setCommentID] = useState('User ID') 
    const [movieID, setMovieID] = useState('Movie ID') 

    const handlepostComment = () => {
        actions.postComment(comment,commentID,movieID);
        setComment('');
        setCommentID('User ID');
        setMovieID('Movie ID');


    };

    return(
    <>
        <div className="card text-center mx-5">
            <div className="card-body">
                <h5 className="card-title">Enter your comment here</h5>
                <div className="form-floating">
                    <textarea onChange={(e)=> setComment(e.target.value)} value= {comment} className="form-control" placeholder="Leave a comment here" id="commentArea"></textarea>
                    <input onChange={(e)=> setCommentID(e.target.value)} value= {commentID} className="form-control" placeholder="Leave a comment ID here" id="userID"></input>
                    <input onChange={(e)=> setMovieID(e.target.value)} value= {movieID} className="form-control" placeholder="Leave a movie ID here" id="movieID"></input>
                    <label htmlFor="commentArea">Comment</label>
                </div>
                <button onClick={()=>handlepostComment()} className="btn btn-primary">Post</button>
                <Link to={"/movies/comment_list"} ><button>ver comentarios</button></Link>
            </div>
        </div>   
    </>
    );
};
export default Comment