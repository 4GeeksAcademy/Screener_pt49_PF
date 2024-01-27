import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import "../../styles/login.css"
import bgLogin from "../../img/bg-login.png";
import { Link } from "react-router-dom";

const Login = () => {

    const { store, actions } = useContext(Context);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    return (
        <div className="row body-row w-100">
            <div className="col-lg-8 d-none d-sm-block">
                <div className="">
                    <img className="m-none" src={bgLogin} alt="Logo img" style={{
                        resizeMode: 'cover',
                        height: 600,
                        width: 1400,
                    }} />
                </div>
            </div>
            <div className="login.card.colum col-sm-12 col-md-5 col-lg-4 text-center">
                <div className="card bg-dark" style={{ width: 400, marginTop: 100, height: 400 }}>
                    {store.auth === true ? <Navigate to="/private" /> : null}
                    <div className="card-header bg-dark border-light rounded">
                        <h2>Iniciar sesion</h2>
                    </div>
                    <form className="w-80 mx-auto p-4" onSubmit={(e) => actions.loginData(e, email, password)}>
                        <div className="col-auto mb-4 px-4">
                            <label htmlFor="staticEmail2" className="visually-hidden">Email</label>
                            <input type="text" onChange={(e) => setEmail(e.target.value)} className="form-control" id="staticEmail2" placeholder="usuario@gmail.com" />
                        </div>
                        <div className="col-auto mb-4 px-4">
                            <label htmlFor="inputPassword2" className="visually-hidden">Contraseña</label>
                            <input type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" id="inputPassword2" placeholder="Contraseña" />
                        </div>
                        <div className="col-auto mb-3">
                            <button type="submit " >Entrar</button>
                        </div>
                        <a className="text-center">¿Has olvidado la contraseña?</a>
                    </form>
                    <div>
                        <Link to="/signup"><button type="button">Crear cuenta nueva</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login