import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "../../styles/getRecomendation.css";

// ... (importaciones y otros códigos)

export const Recomendacion = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getMoviesFromApi();
  }, []);

  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = () => setCurrentStep(currentStep + 1);
  const goToPrevStep = () => setCurrentStep(currentStep - 1);
  const [recommendationKey, setRecommendationKey] = useState(0);

  const regenerateRecommendations = () => {
    setRecommendationKey((prevKey) => prevKey + 1);
  };

  const renderMovies = (filterFunction) => (
    <TransitionGroup key={recommendationKey} className="row justify-content-center">
      {store.movies
        .filter(filterFunction)
        .sort(() => Math.random() - 0.5)
        .slice(0, 4)
        .map((movie, index) => (
          <CSSTransition key={index} timeout={500} classNames="fade">
            <div className={index === 0 ? "col-12 text-center" : "col-4 text-center mt-2"}>
              {index === 0 ? (
                <>
                  <h2 className="mb-4">{movie.title}</h2>
                </>
              ) : (
                <h5>{movie.title}</h5>
              )}
              <Link to={`/moviedetails/${movie.id}`} key={movie.id} className="ms-1 mt-1">
                <img style={{ width: index === 0 ? "50%" : "50%" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
              </Link>
            </div>
          </CSSTransition>
        ))}
    </TransitionGroup>
  );

  const fieldsets = [
    {
      display: currentStep === 1, 
      content: (
        <>
          {/* Primera pregunta */}

          <div className="form-card">
            <h2 className="fs-title">Con quien vas a ver la pelicula?</h2>
            <button type="button" onClick={() => setCurrentStep(2)}>Solo</button>
            <button type="button" onClick={() => setCurrentStep(2)}>Con mi pareja</button>
            <button type="button" onClick={() => setCurrentStep(2)}>Con niños</button>
            <button type="button" onClick={() => setCurrentStep(2)}>Con Amigos</button>

          </div>
        </>
      )
    },
    {
      display: currentStep === 2, 
      content: (
        <>
          {/* Solo 1.1 */}

          <div className="form-card">
            <h2 className="fs-title">Que estas buscando hoy?</h2>
            <button type="button" onClick={() => setCurrentStep(5)}>Necesito algo de fondo para trabajar o limpiar</button>
            <button type="button" onClick={() => setCurrentStep(3)}>Algo suave, una comedia o de esas light</button>
            <button type="button" onClick={() => setCurrentStep(9)}>Quiero algo emocionante</button>
            <button type="button" onClick={() => setCurrentStep(14)}>Venga vamos a llorar un rato</button>
          </div>
          <input type="button" name="previous" className="previous action-button-previous" onClick={()=>setCurrentStep(1)} value="Previous" />
        </>
      )
    },
    {
      display: currentStep === 3, 
      content: (
        <>
          {/* Solo 1.2 */}

          <div className="form-card">
            <h2 className="fs-title">Y una cosa más...</h2>
            <button type="button" onClick={() => setCurrentStep(6)}>De disney o animada</button>
            <button type="button" onClick={() => setCurrentStep(7)}>Unas buenas risas</button>
            <button type="button" onClick={() => setCurrentStep(8)}>Una dominguera</button>
          </div>
          <input type="button" name="previous" className="previous action-button-previous" onClick={()=>setCurrentStep(2)} value="Previous" />
        </>
      )
    },
    {
      display: currentStep === 9, 
      content: (
        <>
          {/* Solo 1.3 */}

          <div className="form-card">
            <h2 className="fs-title">Emociones fuertes? Dinos un poco más</h2>
            <button type="button" onClick={() => setCurrentStep(10)}>Algo de accion!</button>
            <button type="button" onClick={() => setCurrentStep(11)}>Una historica</button>
            <button type="button" onClick={() => setCurrentStep(12)}>Dame terror ó suspenso</button>
            <button type="button" onClick={() => setCurrentStep(13)}>De esas que te dejan pensando todo el día</button>
          </div>
          <input type="button" name="previous" className="previous action-button-previous" onClick={()=>setCurrentStep(2)} value="Previous" />
        </>
      )
    },

    {
      display: currentStep === 14, 
      content: (
        <>
          {/* Solo 1.4 */}

          <div className="form-card">
            <h2 className="fs-title">A llorar se a dicho</h2>
            <button type="button" onClick={() => setCurrentStep(15)}>Drama, drama y mas drama</button>
            <button type="button" onClick={() => setCurrentStep(16)}>Peliculas dificiles de ver</button>
            <button type="button" onClick={() => setCurrentStep(17)}>Una buena motivadora</button>
          </div>
          <input type="button" name="previous" className="previous action-button-previous" onClick={()=>setCurrentStep(2)} value="Previous" />
        </>
      )
    },

    



      // Recomendacion Solo/Necesito algo de fondo para trabajar o limpiar
    {
      display: currentStep === 5,
      content: (
        <>
          <div className="form-card">
            <h2 className="fs-title text-center">La película que no vas a ver:</h2>
            {renderMovies((movie) => movie.white_noise)}
          </div>
          <button type="button" onClick={regenerateRecommendations}>Dame otra Recomendacion</button>
        </>
      )
    },
    // Recomendacion Solo 1/Algo de disney o animado
    {
      display: currentStep === 6,
      content: (
        <>
          <div className="form-card">
            <h2 className="fs-title text-center">Conecta con tu niño interior</h2>
            {renderMovies((movie) => movie.disney || movie.animation && !movie.drama)}
          </div>
          <button type="button" onClick={regenerateRecommendations}>Dame otra Recomendacion</button>
        </>
      )
    },
    // Recomendacion Solo 1/Unas buenas risas
    {
      display: currentStep === 7,
      content: (
        <>
          <div className="form-card">
            <h2 className="fs-title text-center">Unas risas seguras con:</h2>
            {renderMovies((movie) => movie.comedy && !movie.disney && !movie.animation)}
          </div>
          <button type="button" onClick={regenerateRecommendations}>Dame otra Recomendacion</button>
        </>
      )
    },
        // Recomendacion Solo 1/Una dominguera
        {
          display: currentStep === 8,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center">Domingo de mantita y...</h2>
                {renderMovies((movie) => movie.comedy || movie.sunday_movie || movie.solitary)}
              </div>
              <button type="button" onClick={regenerateRecommendations}>Dame otra Recomendacion</button>
            </>
          )
        },
                // Recomendacion Solo 2/Accion
        {
          display: currentStep === 10,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center">Accion? para eso esta:</h2>
                {renderMovies((movie) => movie.action || movie.violence && !movie.animation)}
              </div>
              <button type="button" onClick={regenerateRecommendations}>Dame otra Recomendacion</button>
            </>
          )
        },
          // Recomendacion Solo 2/ historica
        {
          display: currentStep === 11,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center">Historias reales, gente real:</h2>
                {renderMovies((movie) => movie.historical)}
              </div>
              <button type="button" onClick={regenerateRecommendations}>Dame otra Recomendacion</button>
            </>
          )
        },
            // Recomendacion Solo 2/Terror o suspenso
        {
          display: currentStep === 12,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center">Viendo películas de terror solo? Pues a ver como te va con:</h2>
                {renderMovies((movie) => movie.terror || movie.suspence)}
              </div>
              <button type="button" onClick={regenerateRecommendations}>Dame otra Recomendacion</button>
            </>
          )
        },

                    // Recomendacion Solo 2/te dejan pensando todo el día
        {
          display: currentStep === 13,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center">Hoy te recomendamos</h2>
                {renderMovies((movie) => movie.plot_twits)}
              </div>
              <button type="button" onClick={regenerateRecommendations}>Dame otra Recomendacion</button>
            </>
          )
        },
              // Recomendacion Solo 3/te dejan pensando todo el día
        {
          display: currentStep === 15,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center">Vamos a llorar un rato con</h2>
                {renderMovies((movie) => movie.drama)}
              </div>
              <button type="button" onClick={regenerateRecommendations}>Dame otra Recomendacion</button>
            </>
          )
        },

        {
          display: currentStep === 16,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center">Una dificil y cruda:</h2>
                {renderMovies((movie) => movie.hard_to_watch)}
              </div>
              <button type="button" onClick={regenerateRecommendations}>Dame otra Recomendacion</button>
            </>
          )
        },

        {
          display: currentStep === 17,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center">Emotiva y motivadora como:</h2>
                {renderMovies((movie) => movie.motivating)}
              </div>
              <button type="button" onClick={regenerateRecommendations}>Dame otra Recomendacion</button>
            </>
          )
        },

        
  ];

  return (

              <>
              <div className="container-fluid" id="grad1">
                <div className="row justify-content-center mt-0">
                  <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
                    <div className="card px-0 pt-4 pb-0 mt-3 mb-3">
                      <h2 style={{ color: "black" }}><strong>Recomiendame una pelicula!</strong></h2>
                      <button type="button" onClick={() => setCurrentStep(1)}>Inicio</button>
                      <div className="row">
                        <div className="col-md-12 mx-0">
                          <form id="msform">
                            {fieldsets.map((fieldset, index) => (
                              <CSSTransition key={index} timeout={500} classNames="fade">
                                <fieldset key={index} style={{ display: fieldset.display ? 'block' : 'none' }}>
                                  {fieldset.content}
                                </fieldset>
                              </CSSTransition>
                            ))}
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              </>
              );
              };

              export default Recomendacion;
