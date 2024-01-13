import React, { useState } from "react";

import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";

export const UserForm = () => {

	 // dar memoria  a las variables 
	 const [email, setEmail] = useState("");
	 const [password, setPassword] = useState("");
	 const [username, setUsername]= useState("")

 		function sendData(e){
		e.preventDefault()
		console.log("send data")
		console.log(email, password)

		const requestOptions = {
    			method: 'POST',
      			headers:{"content-type": "application/json"},
      			body: JSON.stringify(
             {

           			 "email": email,
        			 "password": password,
					 "username": username

             }
       )

      };

				
			fetch("https://stunning-trout-4j77wgq5j46w2qg9g-3001.app.github.dev/api/user", requestOptions)
			.then(response => response.json())
			.then(result => console.log(result))
			

	}

	return (
		<div>
 
          
          <form className="w-50 mx-auto " onSubmit={sendData}> 
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                    type="email"
                    className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" class="form-label">Password</label>
                    <input 
                    value={password}
                    onChange={(e)=> setPassword(e.target.value)}
                    type="password" class="form-control" id="exampleInputPassword1"/>
                </div>
				<div className="mb-3">
                    <label htmlFor="exampleInputUsername1" class="form-label">Username</label>
                    <input 
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    type="username" class="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>

			    <button type="submit" className="btn btn-primary">Edit</button>
				<button type="submit" className="btn btn-primary">Delete</button>
				
        </form>
        </div>
	);
};
