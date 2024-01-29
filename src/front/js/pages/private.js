import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import { Navigate } from "react-router-dom";
import "../../styles/private.css"


const Private = () => {

    const { store, actions } = useContext(Context);


    return (

        <div className="container">
            <div className="row gutters mt-5">
                <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="row gutters-1">
                                <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                                    <h2 className="mb-2 mt-2 text-center ">Mi perfil de usuario</h2>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="fullName">Nombre</label>
                                        <input type="text" className="form-control" id="fullName" placeholder="introduce tu nombre" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="eMail">E-mail</label>
                                        <input type="email" className="form-control" id="eMail" placeholder="nombre@.com" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="surname">Apellido</label>
                                        <input type="text" className="form-control" id="surname" placeholder="introduce tu apellido" />
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                                    <div className="form-group">
                                        <label for="website">Password</label>
                                        <input type="password" className="form-control" id="website" placeholder="password" />
                                    </div>
                                </div>
                            </div>
                            <div className="row gutters-2">
                                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ml-5 mt-5">
                                    <div><h4>Mis preferencias</h4></div>
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
                                    <div><h4>Mis subscripciones</h4></div>
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
                                        <button type="button" id="submit" name="submit" className="btn btn-success">Guardar</button>
                                        <button type="button" id="submit" name="submit" className="btn btn-secondary">Actualizar</button>
                                        <button type="button" id="submit" name="submit" className="btn btn-danger">Eliminar</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Private