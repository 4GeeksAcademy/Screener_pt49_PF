import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const User = () => {
    
    useEffect(() => {
		actions.getUser();
	  }, []);

	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			
			      <h1> MY USERS LIST </h1>

                <button  className="btn btn-outline-primary"
                onClick={ () =>actions.getUser() }>
                  GET My users List
                </button>

            { store.users.map (( myUser, index) => 

            <div className="container border">
                <p key= {index}>{myUser.email}</p>
                
                <p key= {index}> 
                {myUser.username}  
                </p>
                <button  className="btn btn-primary"
                onClick={()=>actions.deleteUser( myUser.id)}>DELETE user</button>

                <Link to="/editForm">
                <button  className="btn btn-secondary"
                onClick={()=>actions.editUser( myUser.id)}>EDIT user</button>
                </Link>
                
            </div>
            )}

			
		</div>
	);
};
