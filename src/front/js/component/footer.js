import React, { Component } from "react";
import "../../styles/footer.css"

export const Footer = () => (
  <footer className="pb-2">
    <div className="col-12">
      <div className="social-icons d-flex justify-content-center mb-3">
        <div className="text-center me-5 fa-lg">
          <i className="fa-brands fa-instagram fa-lg"></i>       
        </div>
        <div className="text-center me-5">
          <i className="fa-brands fa-facebook fa-lg"></i>
        </div>
        <div className="text-center me-5">
          <i className="fa-brands fa-twitter fa-lg"></i>
        </div>
        <div className="text-center me-5">
          <i className="fa-brands fa-github fa-lg"></i>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center">
      <div className="row">
        <div className="col-lg-3 col-md-4 col-sm-6">
          <h5 className="mb-4">Quienes somos</h5>
          <p className="text-secondary">Nuestro equipo</p>
          <p className="text-secondary" >Valores</p>
          <p className="text-secondary">Objetivos</p>
        </div>
        <div className="col-lg-3 col-md-4 col-sm-6">
          <ul className="d-none d-sm-block">
            <li>
              <h5 className="mb-4 d-none d-sm-block">Normativa</h5>
            </li>
            <li>
              <p className="text-secondary">Aviso legal</p>
              <p className="text-secondary">Condiciones generales</p>
              <p className="text-secondary">Politica de privacidad</p>
            </li>
          </ul>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3 d-none d-sm-block">
          <h5 className="mb-4">Fuentes</h5>
          <p className="text-secondary">TMDB</p>
          <p className="text-secondary">RapidApi</p>
        </div>
        <div className="col-sm-6 col-md-4 col-lg-3">
          <h5 className="mb-4">Contacto</h5>
          <p className="text-secondary">contacto@screener.com</p>
        </div>
      </div>
    </div>
  </footer>
);

