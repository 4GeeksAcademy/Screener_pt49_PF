import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/getRecomendation.css";

export const GetRecomendation = () => {
  const { store, actions } = useContext(Context);

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  

    return (
        <>
          <div className="container-fluid" id="grad1">
            <div className="row justify-content-center mt-0">
              <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                  <h2><strong>Recomiendame una pelicula!</strong></h2>
                    <div className="row">
                    <div className="col-md-12 mx-0">
                      <form id="msform">
                      {/* <!-- progressbar --> */}
                        <ul id="progressbar">
                          <li id="account" className={currentStep >= 1 ? "active" : ""}><strong>Con quien?</strong></li>
                          <li id="personal" className={currentStep >= 2 ? "active" : ""}><strong>Que tipo</strong></li>
                          <li id="payment" className={currentStep >= 3 ? "active" : ""}><strong>Otra pregunta!</strong></li>
                          <li id="confirm" className={currentStep >= 4 ? "active" : ""}><strong>Tu película!</strong></li>
                        </ul>
                      {/* <!-- fieldsets --> */}
                      <fieldset style={{ display: currentStep === 1 ? 'block' : 'none' }}>
                          <div className="form-card">
                            <h2 className="fs-title">Pregunta 1</h2>
                            <p>Aqui van los botones que se usan de input</p>
                          </div>
                            <input type="button" name="next" className="next action-button" onClick={nextStep} value="Next Step"/>
                        </fieldset>

                        <fieldset style={{ display: currentStep === 2 ? 'block' : 'none' }}>
                          <div className="form-card">
                            <h2 className="fs-title">Pregunta 2</h2>
                            <p>Este debe variar en base a lo que se seleciono del primero</p>
                          </div>
                            <input type="button" name="previous" className="previous action-button-previous" onClick={prevStep} value="Previous"/>
                            <input type="button" name="next" className="next action-button" onClick={nextStep} value="Next Step"/>
                        </fieldset>

                        <fieldset style={{ display: currentStep === 3 ? 'block' : 'none' }}>
                          <div className="form-card">
                          <h2 className="fs-title">Pregunta 3</h2>
                          <p>Aqui va la ultima pregunta</p>

                                </div>
                                <input type="button" name="previous" className="previous action-button-previous" onClick={prevStep} value="Previous"/>
                                <input type="button" name="make_payment" className="next action-button" onClick={nextStep} value="Confirm"/>
                            </fieldset>
                            
                            <fieldset style={{ display: currentStep === 4 ? 'block' : 'none' }}>
                                <div className="form-card">
                                    <h2 className="fs-title text-center">Esta es tu película!</h2>
                                    <br/>
                                    <div className="row justify-content-center">
                                        <div className="col-3">
                                            <img src="https://i.ebayimg.com/images/g/ISMAAOSw5P5glq8I/s-l1600.jpg" className="fit-image"/>
                                        </div>
                                    </div>
                                    <br/>
                                    <div className="row justify-content-center">
                                        <div className="col-7 text-center">
                                            <h5>Opciones de mas botones por aqui</h5>
                                            <button type="button" className="btn btn-primary" onClick={() => setCurrentStep(1)}>Volver a empezar</button>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                      </form>
                    </div>

                    </div>
                </div>
              </div>
            </div>
          </div>
          
        </>
        
      )
          }