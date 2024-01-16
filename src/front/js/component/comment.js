import React, { Component, useContext, useState } from "react";
import { Context } from "../store/appContext";
// import "../../styles/comment.css";

export const Comment = () => {
    const { store, actions } = useContext(Context);
    const [comment, setComment] = useState('') 
    const [commentID, setCommentID] = useState('') 
    const [movieID, setMovieID] = useState('') 

    const [allComments, setAllComments] = useState('') 

    return(
    <>
        <div className="card text-center mx-5">
            <div className="card-body">
                <h5 className="card-title">Enter your comment here</h5>
                <div className="form-floating">
                    <textarea onChange={(e)=> setComment(e.target.value)} value= {comment} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    <input onChange={(e)=> setCommentID(e.target.value)} value= {commentID} className="form-control" placeholder="Leave a comment ID here" id="floatingTextarea"></input>
                    <input onChange={(e)=> setMovieID(e.target.value)} value= {movieID} className="form-control" placeholder="Leave a movie ID here" id="floatingTextarea"></input>
                    <label htmlFor="floatingTextarea">Comments</label>
                </div>
                <button onClick={()=>actions.postComment(comment,commentID,movieID)} className="btn btn-primary">Post</button>
            </div>
        </div>
        
        <div className="card text-center mx-5">
            <ul className="list-group">
                {store.allComments.map((item)=>
                    <li className="list-group-item">{item.comment_body}
                        <button onClick={()=>actions.deleteComment(commentID)} type="button" className="btn btn-danger mx-4">Delete</button>
                    </li>
                )}
            </ul>
        </div>
        
    </>
    );
};

export default Comment