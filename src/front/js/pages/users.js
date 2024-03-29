import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";


export const User = () => {
    
    useEffect(() => {
		actions.getUser();
    actions.deleteUser();
	  }, []);

	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			
			      <h1> MY USERS LIST </h1>

           

            { store.users.map (( myUser) => 

            <div className="container border">
                <p key= {myUser.id}>{myUser.email}</p>
                
                <p key= {myUser.id}> 
                {myUser.username}  
                </p>
                <p>{ myUser.id} </p>
                <button  
                onClick={()=>actions.deleteUser(myUser.id)}>DELETE user</button>

                <Link to={`/editForm/${myUser.id}`}>
                <button  
                >EDIT user</button>
                </Link>
                
            </div>
            )}

			
		</div>
	);
};
