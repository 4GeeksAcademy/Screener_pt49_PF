import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import "../../styles/login.css"
import bgLogin from "../../img/loginBgResized.png";
import { Link } from "react-router-dom";


const Login = () => {

    const { store, actions } = useContext(Context);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    return (
        <div className="mainContainerLogin row w-100">
            <div className="col-5 d-none d-md-block">
                <div className="">
                    <img className="bgLogin" src={bgLogin} alt="Logo img" />
                </div>
            </div>
            <div className="loginContainer col-sm-12 col-md-10 col-lg-7 text-center">
                <div className="card loginCard bg-dark">
                    {store.auth === true ? <Navigate to="/" /> : null}
                    <div className="cardTitle card-header bg-dark border-light rounded">
                        <h2>Iniciar sesión</h2>
                    </div>
                    <form className="loginForm" onSubmit={(e) => actions.loginData(e, email, password)}>
                        <div className="col-auto mb-4 px-4">
                            <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" id="staticEmail2" placeholder="usuario@gmail.com" />
                        </div>
                        <div className="col-auto mb-4 px-4">
                            <label htmlFor="inputPassword2" className="visually-hidden">Contraseña</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="inputPassword2" placeholder="Contraseña" />
                        </div>
                        <div className="col-auto mb-3">
                            <button className="loginButton" type="submit " >Entrar</button>
                        </div>
                        <a className="text-center">¿Has olvidado la contraseña?</a>
                    </form>
                    <p className="preguntaCuenta">¿No tienes cuenta?</p>
                    <div className="crearCuenta">
                        <Link to="/signup"><a>Crear cuenta</a></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login