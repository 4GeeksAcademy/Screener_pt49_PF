import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";

const Login = () => {

    const { store, actions } = useContext(Context);
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    

        return (
        <div className="text-center">
            <h1 className="text-center">Login</h1>
            <form className="w-50 mx-auto" onSubmit={(e)=>actions.loginData(e,email,password)}>
                <div className="col-auto mb-4">
                    <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
                    <input type="text" onChange={(e)=>setEmail(e.target.value)} className="form-control" id="staticEmail2" placeholder="email@example.com"/>
                </div>
                <div className="col-auto mb-4">
                    <label htmlFor="inputPassword2" className="visually-hidden">Password</label>
                    <input type="password" onChange={(e)=>setPassword(e.target.value)} className="form-control" id="inputPassword2" placeholder="Password"/>
                </div>
                <div className="col-auto">
                    <button type="submit" className="btn btn-primary mb-3">Enter</button>
                </div>
            </form>
        </div>
    )
}

export default Login