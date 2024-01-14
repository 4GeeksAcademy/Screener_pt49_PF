import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext";


import "../../styles/home.css";
import { UserForm } from "./userForm";

export const Users = () => {
    
    useEffect(() => {
		actions.getUser();
	  }, []);

	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			
			<h1> I am user </h1>

            <button onClick={ () =>actions.getUser() }>
                Users
            </button>

                { store.users.map (( myUser, index) => 

            <div className="container border">
            <p key= {index}>{myUser.email}</p>
            
            <p key= {index}> 
            {myUser. username}  
            </p>
            <button onClick={()=>actions.deleteUser(store.users.id)}>Eliminar user</button>
            </div>
            )}

			
		</div>
	);
};
