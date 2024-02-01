import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import "../../styles/private.css"


const Private = () => {
     // dar memoria  a las variables 
     const [name, setName]= useState("");
     const [surname, setSurname]= useState("");
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
    
     

     const{ store, actions}=useContext(Context)

     
        function EditPrivateData(e){
        e.preventDefault()
         actions.editprivateUser(name,surname, email, password)
    }

   


    return (

        
                    <div className="privateContainer">
                    {localStorage.userAuth === false ? <Navigate to="/Login" /> : null}
                    <div className=" card privateCard h-100 bg-dark">
                        <div className="card-body">
                            <div className="row gutters-1">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h1 className=" privateTitle mb-3">Mi perfil de usuario</h1>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group nombre mb-3">
                                        <label for="fullName"  className="mb-2">Nombre</label>
                                        <input type="text" className="form-control" id="fullName" placeholder="" 
                                        value={name}
                                        onChange={(e)=> setName(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="eMail"  className="mb-2">E-mail</label>
                                        <input type="email" className="form-control" id="eMail" placeholder="" 
                                        value={email}
                                        onChange={(e)=> setEmail(e.target.value)}/>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="surname" className="mb-2">Apellido</label>
                                        <input type="text" className="form-control" id="surname" placeholder=""
                                        value={surname}
                                        onChange={(e)=> setSurname(e.target.value)}/> 
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="website" className="mb-2">Password</label>
                                        <input type="password" className="form-control" id="website" placeholder=""
                                        value={password}
                                        onChange={(e)=> setPassword(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="row gutters-2">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ml-5 mt-5">
                                    <div className="preferencias mb-3"><h5>Mis preferencias</h5></div>
                                    <div className="custom-control custom-checkbox">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1" />
                                            <label className="form-check-label" for="flexCheckDefault1">
                                                Drama
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                            <label className="form-check-label" for="flexCheckDefault2">
                                                Acción
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                            <label className="form-check-label" for="flexCheckDefault2">
                                                Comedia
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                            <label className="form-check-label" for="flexCheckDefault2">
                                                Románticas
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                            <label className="form-check-label" for="flexCheckDefault2">
                                                Infantil
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2" />
                                            <label className="form-check-label" for="flexCheckDefault2">
                                                Terror
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ml-5 mt-5">
                                    <div className="subscripciones mb-3"><h5>Mis subscripciones</h5></div>
                                    <div className="custom-control custom-checkbox">
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                                            <label className="form-check-label" for="flexCheckDefault4">
                                                Notificaciones por email
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3" />
                                            <label className="form-check-label" for="flexCheckDefault3">
                                                Newsletter
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4" />
                                            <label className="form-check-label" for="flexCheckDefault4">
                                                Novedades
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row gutters mt-5">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <div className="text-right">
                                        <button type="button" id="submit" name="submit" className=" PrivateButton ">Guardar</button>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        
    );
}

export default Private