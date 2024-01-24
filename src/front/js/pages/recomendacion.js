import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/getRecomendation.css";



export const Recomendacion = () => {
  const { store, actions } = useContext(Context);

  useEffect(() => {
    actions.getMoviesFromApi();
  }, []);

  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const stepA = () => {
    setCurrentStep(2)
  }

  

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
                      <fieldset style={{ display: currentStep === 1 ? 'block' : 'none' }}>
                          <div className="form-card">
                            <h2 className="fs-title">Para quien es la pelicula?</h2>
                            <button type="button" onClick={stepA}>Para mi solo</button>
                          </div>
                            <input type="button" name="next" className="next action-button" onClick={()=>setCurrentStep(2)} value="Next Step"/>
                        </fieldset>

                        <fieldset style={{ display: currentStep === 2 ? 'block' : 'none' }}>
                          <div className="form-card">
                            <h2 className="fs-title">Como la quieres?</h2>
                            <button type="button" onClick={()=>setCurrentStep(3)}>una comedia</button>
                          </div>
                            <input type="button" name="previous" className="previous action-button-previous" onClick={prevStep} value="Previous"/>
                            <input type="button" name="next" className="next action-button" onClick={nextStep} value="Next Step"/>
                        </fieldset>

                        <fieldset style={{ display: currentStep === 3 ? 'block' : 'none' }}>
                          <div className="form-card">
                          <h2 className="fs-title">Quieres que sea animada?</h2>
                          <button type="button" onClick={()=>setCurrentStep(4)}>no</button>

                                </div>
                                <input type="button" name="previous" className="previous action-button-previous" onClick={prevStep} value="Previous"/>
                                <input type="button" name="make_payment" className="next action-button" onClick={nextStep} value="Confirm"/>
                            </fieldset>
                            
                            <fieldset style={{ display: currentStep === 4 ? 'block' : 'none' }}>
  <div className="form-card">
    <h2 className="fs-title text-center">Hoy te recomendamos</h2>
    <br/>
    <div className="row justify-content-center">
      {store.movies
        .filter(movie => movie.comedy && !movie.animation && movie.solitary)
        .sort(() => Math.random() - 0.5)
        .slice(0, 4)
        .map((movie, index) => (
          <div key={index} className= {index === 0 ? "col-12 text-center" : "col-4 text-center mt-2"}>
            {index === 0 ? (
              <>
              <h2 className="mb-4">{movie.title}</h2>
              </>
            ) : (
              <h5>{movie.title}</h5>
            )}
            <Link to={`/moviedetails/${movie.id}`} key={movie.id} className="ms-1 mt-1">
            <img style={{ width: index === 0 ? "50%" : "50%", }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} /> 
            </Link>
          </div>
        ))}
    </div>
    <div className="row justify-content-center">
      <div className="col-7 text-center">
        <h5>Opciones de más botones por aquí</h5>
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