import React, { Component, useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext";
// import "../../styles/comment_list.css";

export const Comment_list = () => {
    const { store, actions } = useContext(Context);
    const [newText, setNewText] = useState("");
    const [id, setId] = useState('');
    useEffect(() => {
        actions.getComments();

    }, []);

    const handledelComment = (commentID) =>{
        actions.delComment(commentID)
        actions.getComments()
    }
    
    return(
        <>        
        <div className="card text-center mx-5">
            <ul className="list-group">
            {store.allComments.map((item)=>             
                    <li key= {item.comment_id} className="list-group-item">{item.comment_body}
                        <p>{item.comment_id}</p>
                        <button data={item.comment_id} onClick={()=>setId(item.comment_id)} type="button" className="btn btn-secondary mx-4" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</button>
                        <button onClick={()=>handledelComment(item.comment_id)} type="button" className="btn btn-danger mx-4">Delete</button>
                    </li>                                                                
            )}
            </ul>
        </div>  
        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">Edit your comment</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <textarea onChange={(event)=> setNewText(event.target.value)} value= {newText} className="form-control" placeholder="Leave a comment here" id="floatingTextarea"></textarea>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button onClick={()=>actions.editComment(id,newText)} value= {newText} type="button" className="btn btn-primary">Save changes</button>
                        <button onClick={()=>console.log(newText)} type="button" className="btn btn-primary">Check content</button>
                    </div>
                </div>
            </div>
        </div>      
    </>
    );
};
export default Comment_list