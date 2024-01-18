import React, { useState, useContext, useEffect } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { useParams } from "react-router-dom";


export const EditUser = () => {



	 // dar memoria  a las variables 
	 const [email, setEmail] = useState("");
	 const [password, setPassword] = useState("");
	 const [username, setUsername]= useState("");

     const { theid } = useParams();

     const{ store, actions}=useContext(Context)
     
    const handleEditUser=() =>{
            const userdata={email, password, username};

            actions.editUser(theid ,userdata)
        }

            const getId =()=> {
                    console.log( theid )
            }
            
	return (
		<div>
 
          
          <form className="w-50 mx-auto " > 
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input 
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}
                    type="email"
                    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
				<div className="mb-3">
                    <label htmlFor="exampleInputUsername1" className="form-label">Username</label>
                    <input 
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    type="username" className="form-control" id="exampleInputUserName1"/>
                </div>

                <button onClick={()=>handleEditUser()}
                 type="submit" className="btn btn-primary">Edit</button>
                 
                		
        </form>

        <button onClick={()=>getId() }> 
              Traeme el id 
        </button>
        </div>
	);
};
