import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Signup = () => {

	 // dar memoria  a las variables 
	 const [email, setEmail] = useState("");
	 const [password, setPassword] = useState("");
	 const [username, setUsername]= useState("");
	 const [age, setAge]= useState("");

     const{ store, actions}=useContext(Context)

     
 		function sendData(e){
		e.preventDefault()
		 actions.postUser(email,password,username,age)
	}
	return (
        <div className="text-center">
            <h1>Signup</h1>         
            <form className="w-50 mx-auto " onSubmit={sendData} > 
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                        <input 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        type="email"
                        className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"required/>
                
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input 
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        type="password" className="form-control" id="exampleInputPassword1"required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputUsername1" className="form-label">Username</label>
                        <input 
                        value={username}
                        onChange={(e)=> setUsername(e.target.value)}
                        type="username" className="form-control" id="exampleInputPassword1"required/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputUsername1" className="form-label">Age</label>
                        <input 
                        value={age}
                        onChange={(e)=> setAge(e.target.value)}
                        type="number" className="form-control" id="exampleInputPassword1"required/>
                    </div>
                    <button 
                    type="submit" className="btn btn-primary">Save</button>				
            </form>
        </div>
	);
};

export default Signup