import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import "../../styles/login.css"
import Logo from "../../img/Logo200x200.png";

const Login = () => {

    const { store, actions } = useContext(Context);
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    
        return (
           
            <div className="row w-100">
               
            <div className="col-md-6 col-md-12- text-center">
                <div className="Logo200">
                <img src={Logo} alt="Logo img" className="Logo200" />
                </div>
                </div>
                
             
            <div className="col-md-6 text-center">
                <div className="Login">
          
            {store.auth === true ? <Navigate to="/private"/> : null}
            <h1 className="text-center">Login</h1>
            <br></br>
            <form className="w-80 mx-auto" onSubmit={(e)=>actions.loginData(e,email,password)}>
                <div className="col-auto mb-4">
                    <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="staticEmail2" placeholder="email@example.com"/>
                </div>
                <div className="col-auto mb-4">
                    <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" id="inputPassword2" placeholder="Password"/>
                </div>
                <div className="col-auto">
                    <button type="submit " >Enter</button>
                </div>
            </form>
             </div>
             </div>
             </div>
             
    
        
      
    )
}

export default Login