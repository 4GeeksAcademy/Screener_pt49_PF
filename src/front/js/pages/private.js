import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/private.css"


const Private = () => {

    const { store, actions } = useContext(Context);

 
        return (

            <div class="container">
            <div class="row gutters mt-5">
            <div class="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-12">
            <div class="card h-100">
                <div class="card-body">
                    <div class="account-settings">
                        <div class="user-profile">
                            <div class="user-avatar">
                            <img src="https://picsum.photos/270/200" alt="user img" className="rounded mr-3" />
                            </div>
                            <h5 class="user-name mt-5">Nombre:</h5>
                            <h6 class="user-email">E-mail:</h6>
                        </div>
                        <div class="about">
                            <h5>Sobre mi</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vestibulum semper mauris, nec pretium lorem ullamcorper ut. Etiam egestas lorem in elit sodales convallis. </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-12 col-sm-12 col-12">
            <div class="card h-100">
                <div class="card-body">
                    <div class="row gutters-1">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <h2 class="mb-2 ">Mi perfil de usuario</h2>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label for="fullName">Nombre</label>
                                <input type="text" class="form-control" id="fullName" placeholder="Nombre"/>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label for="eMail">E-mail</label>
                                <input type="email" class="form-control" id="eMail" placeholder="Email"/>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label for="surname">Apellido</label>
                                <input type="text" class="form-control" id="surname" placeholder="Apellido"/>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                                <label for="website">Password</label>
                                <input type="password" class="form-control" id="website" placeholder="password"/>
                            </div>
                        </div>
                    </div>
                    
                <div class="row gutters-2">
                         <div class="col mb-3">
                            <div class="form-group">
                              <label>Sobre mi</label>
                              <textarea class="form-control" rows="5" placeholder=""></textarea>
                            </div>
                          </div>
                        
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12">
                            <div class="form-group">
                            <label for="website">New Password</label>
                                <input type="password" class="form-control" id="website" placeholder="password"/>
                            </div>
                        </div>
                <div class="row gutters-3">
                        <div class="col mb-3">
                            <div class="form-group">
                                <label>Preferencias</label>
                                <textarea class="form-control" rows="5" placeholder=""></textarea>
                         </div>
                    </div>
                  
                    <div class="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12 ml-5 ">
                        <div><h4>Mis subscripciones</h4></div>
                             
                        <div class="row">
                          <div class="col">
                          <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="notifications-blog" checked=""/>
                                <label class="custom-control-label" for="notifications-blog"> Notificaciones Email</label>
                              </div>
                            
                            
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="notifications-blog" checked=""/>
                                <label class="custom-control-label" for="notifications-blog">Blog </label>
                              </div>
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="notifications-news" checked=""/>
                                <label class="custom-control-label" for="notifications-news">Newsletter</label>
                              </div>
                              <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="notifications-offers" checked=""/>
                                <label class="custom-control-label" for="notifications-offers">Preferencias</label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    
                 <div class="row gutters mt-5">
                        <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                            <div class="text-right">
                                <button type="button" id="submit" name="submit" class="btn btn-success">Guardar</button>
                                <button type="button" id="submit" name="submit" class="btn btn-secondary">Actualizar</button>
                                <button type="button" id="submit" name="submit" class="btn btn-danger">Eliminar</button>
                            </div>
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