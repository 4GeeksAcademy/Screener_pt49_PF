import React, { useState, useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/signup.css";
import bgLogin from "../../img/loginBgResized.png";
import { Navigate } from "react-router-dom";




export const Signup = () => {

    // dar memoria  a las variables 
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [username, setUsername] = useState("");
    const [age, setAge] = useState("");

    const { store, actions } = useContext(Context)


    function sendData(e) {
        e.preventDefault()
        actions.postUser(email, password, username, age)
    }
    return (
        <div className="mainContainerSignup row w-100">
            <div className="col-5 d-none d-md-block">
                <div className="">
                    <img className="bgLogin" src={bgLogin} alt="Logo img" />
                </div>
            </div>
            <div className="signupContainer col-sm-12 col-md-10 col-lg-7 text-center">
            {store.isRegistered === true ? <Navigate to="/login" /> : null}

                <div className="card signupCard bg-dark">
                    <div className="cardTitle card-header bg-dark border-light rounded">
                        <h1>Crear cuenta</h1>
                    </div>
                    <form className="w-80 mx-auto p-4 " onSubmit={sendData} >
                        <div className="mb-3">
                            <label htmlFor="exampleInputEmail1" className="form-label">Correo electronico</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />

                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                            <input
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password" className="form-control" id="exampleInputPassword1" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputUsername1" className="form-label">Username</label>
                            <input
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                type="username" className="form-control" id="exampleInputPassword1" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputUsername1" className="form-label">Edad</label>
                            <input
                                value={age}
                                onChange={(e) => setAge(e.target.value)}
                                type="number" className="form-control" id="exampleInputPassword1" required />
                        </div>
                        <button onClick={<Navigate to="/login"/>} className="signupButton" type="submit" >Registrarse</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Signup