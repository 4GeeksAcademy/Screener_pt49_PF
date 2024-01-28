import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
import "../../styles/recomendation.css";


export const Recomendacion = () => {
  const { store, actions } = useContext(Context);
  useEffect(() => {
    actions.getMoviesFromApi();
  }, []);

  const [currentStep, setCurrentStep] = useState(0);
  const handleInicioClick = () => {
    setCurrentStep(1);
  };

  const getRandomMovies = () => {

    const moviesCopy = [...store.movies];
    const compareRandom = () => Math.random() - 0.5;
    moviesCopy.sort(compareRandom);
    const randomMovies = moviesCopy.slice(0, 12); 
    return randomMovies.map(movie => (
      <img key={movie.id} style={{ width: "120px", margin: "2px" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
    ));
  };

  const [recommendationKey, setRecommendationKey] = useState(0);

  const regenerateRecommendations = () => {
    setRecommendationKey((prevKey) => prevKey + 1);
  };



const renderMovies = (filterFunction) => (
  <div className="row justify-content-center">
    {store.movies
      .filter(filterFunction)
      .sort(() => Math.random() - 0.5)
      .slice(0, 4)
      .map((movie, index) => (
        <div key={index} className={index === 0 ? "col-12 text-center" : "col-4 text-center mt-2"}>
          <div className="movie-container">
            {index === 0 ? (
              <>
                <h2 className="mb-4">{movie.title}</h2>
              </>
            ) : (
              <h5>{movie.title}</h5>
            )}
            <Link to={`/moviedetails/${movie.id}`} key={movie.id} className="ms-1 mb-3">
              <img style={{ width: index === 0 ? "50%" : "50%" }} src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
            </Link>
          </div>
        </div>
      ))}
  </div>
);
  const fieldsets = [
    {
      display: currentStep === 1, 
      content: (
        <>
          {/* Primera pregunta */}

          <div className="form-card">
            <h2 className="fs-title text-center mb-3">¿Con quien vas a ver la película?</h2>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(2)}>Solo</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(18)}>Con mi pareja</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(27)}>Con niños</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(37)}>Con Amigos</button>

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
            <h2 className="fs-title text-center mb-3">¿Qué estás buscando hoy?</h2>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(5)}>Necesito algo de fondo para trabajar o limpiar</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(3)}>Algo suave, una comedia o de esas light</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(9)}>Quiero algo emocionante</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(14)}>Venga vamos a llorar un rato</button>
          </div>
          <input type="button" name="Volver" className="previous action-button-previous" onClick={()=>setCurrentStep(1)} value="Volver" />
        </>
      )
    },
    {
      display: currentStep === 3, 
      content: (
        <>
          {/* Solo 1.2 */}

          <div className="form-card">
            <h2 className="fs-title text-center mb-3 infoMovie">Y una cosa más...</h2>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(6)}>De Disney o animada</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(7)}>Unas buenas risas</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(8)}>Una dominguera</button>
          </div>
          <input type="button" name="Volver" className="previous action-button-previous" onClick={()=>setCurrentStep(2)} value="Volver" />
        </>
      )
    },
    {
      display: currentStep === 9, 
      content: (
        <>
          {/* Solo 1.3 */}

          <div className="form-card">
            <h2 className="fs-title text-center mb-3 infoMovie">Emociones fuertes? Dinos un poco más</h2>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(10)}>Algo de acción!</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(11)}>Una histórica</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(12)}>Dame terror o suspenso</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(13)}>De esas que te dejan pensando todo el día</button>
          </div>
          <input type="button" name="Volver" className="previous action-button-previous" onClick={()=>setCurrentStep(2)} value="Volver" />
        </>
      )
    },

    {
      display: currentStep === 14, 
      content: (
        <>
          {/* Solo 1.4 */}

          <div className="form-card">
            <h2 className="fs-title text-center mb-3 infoMovie">A llorar se á dicho</h2>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(15)}>Drama, drama y más drama</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(16)}>Películas difíciles de ver</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(17)}>Una buena motivadora</button>
          </div>
          <input type="button" name="Volver" className="previous action-button-previous" onClick={()=>setCurrentStep(2)} value="Volver" />
        </>
      )
    },

    {
      display: currentStep === 18, 
      content: (
        <>
          {/* Primera pregunta */}

          <div className="form-card">
            <h2 className="fs-title text-center mb-3 infoMovie">Para parejas:</h2>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(19)}>Para crear ambiente</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(23)}>Pelculas emotivas</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(25)}>Domingueras</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(26)}>Películas nuevas</button>

          </div>
          <input type="button" name="Volver" className="previous action-button-previous" onClick={()=>setCurrentStep(1)} value="Volver" />

        </>
      )
    },

    {
      display: currentStep === 19, 
      content: (
        <>
          {/* Primera pregunta */}

          <div className="form-card">
            <h2 className="fs-title text-center mb-3 infoMovie">Perfecto! Ahora una cosita más...</h2>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(20)}>Algo romántico</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(21)}>Algo divertido</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(22)}>Algo para hacer maratón</button>

          </div>
          <input type="button" name="Volver" className="previous action-button-previous" onClick={()=>setCurrentStep(18)} value="Volver" />
        </>
      )
    },

    {
      display: currentStep === 23, 
      content: (
        <>
          {/* Primera pregunta */}

          <div className="form-card">
            <h2 className="fs-title text-center mb-3 infoMovie">Perfecto! Ahora una cosita más...</h2>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(10)}>Un poco de acción</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(15)}>Mejor algo más sentimental</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(24)}>Algo más como un thriller</button>

          </div>
          <input type="button" name="Volver" className="previous action-button-previous" onClick={()=>setCurrentStep(18)} value="Volver" />
        </>
      )
    },

    {
      display: currentStep === 27, 
      content: (
        <>
          {/* Primera pregunta */}

          <div className="form-card">
            <h2 className="fs-title text-center mb-3 infoMovie">Cuéntanos un poco más...</h2>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(28)}>Para toda la familia</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(32)}>Solo la van a ver los niños</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(36)}>Soy un adulto con corazón de niño</button>

          </div>
          <input type="button" name="Volver" className="previous action-button-previous" onClick={()=>setCurrentStep(1)} value="Volver" />
        </>
      )
    },

    {
      display: currentStep === 28, 
      content: (
        <>
          {/* Primera pregunta */}

          <div className="form-card">
            <h2 className="fs-title text-center mb-3 infoMovie">Cuéntanos un poco más...</h2>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(29)}>Una aventura fantástica</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(30)}>Una buena película animada</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(31)}>Películas divertidas y alegres</button>

          </div>
          <input type="button" name="Volver" className="previous action-button-previous" onClick={()=>setCurrentStep(27)} value="Volver" />
        </>
      )
    },

    {
      display: currentStep === 32, 
      content: (
        <>
          {/* Primera pregunta */}

          <div className="form-card">
            <h2 className="fs-title text-center mb-3 infoMovie">Cuéntanos un poco más...</h2>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(33)}>Puro Disney!</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(34)}>Son niños pequeños</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(35)}>Las mejores películas para niños</button>

          </div>
          <input type="button" name="Volver" className="previous action-button-previous" onClick={()=>setCurrentStep(27)} value="Volver" />
        </>
      )
    },

    {
      display: currentStep === 37, 
      content: (
        <>
          {/* Primera pregunta */}

          <div className="form-card">
            <h2 className="fs-title text-center mb-3 infoMovie">Cuéntanos un poco más...</h2>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(42)}>Una fiesta en casa!</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(38)}>Somos varios y no nos ponemos de acuerdo</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(22)}>Queremos hacer maratón!</button>

          </div>
          <input type="button" name="Volver" className="previous action-button-previous" onClick={()=>setCurrentStep(1)} value="Volver" />
        </>
      )
    },

    {
      display: currentStep === 38, 
      content: (
        <>
          {/* Primera pregunta */}

          <div className="form-card">
            <h2 className="fs-title text-center mb-3 infoMovie">Cuéntanos un poco más...</h2>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(43)}>Yo digo un Thriller!</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(44)}>Yo digo ciencia ficción</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(45)}>Yo digo comedia</button>

          </div>
          <input type="button" name="Volver" className="previous action-button-previous" onClick={()=>setCurrentStep(37)} value="Volver" />
        </>
      )
    },

    {
      display: currentStep === 42, 
      content: (
        <>
          {/* Primera pregunta */}

          <div className="form-card">
            <h2 className="fs-title text-center mb-3 infoMovie">Cuéntanos un poco más...</h2>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(39)}>Una épica para poner de fondo</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(40)}>Un clásico!</button>
            <button className="onBoardingButton" type="button" onClick={() => setCurrentStep(41)}>Noche de terror con amigos</button>

          </div>
          <input type="button" name="Volver" className="previous action-button-previous" onClick={()=>setCurrentStep(37)} value="Volver" />
        </>
      )
    },

    



      // Recomendación Solo/Necesito algo de fondo para trabajar o limpiar
    {
      display: currentStep === 5,
      content: (
        <>
          <div className="form-card">
            <h2 className="fs-title text-center infoMovie">La película que no vas a ver:</h2>
            {renderMovies((movie) => movie.white_noise)}
          </div> 
          <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
          <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

        </>
      )
    },
    // Recomendación Solo 1/Algo de disney o animado
    {
      display: currentStep === 6,
      content: (
        <>
          <div className="form-card">
            <h2 className="fs-title text-center infoMovie">Conecta con tu niño interior</h2>
            {renderMovies((movie) => movie.disney || movie.animation && !movie.drama)}
          </div>
          <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
          <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

        </>
      )
    },
    // Recomendación Solo 1/Unas buenas risas
    {
      display: currentStep === 7,
      content: (
        <>
          <div className="form-card">
            <h2 className="fs-title text-center infoMovie">Unas risas seguras con:</h2>
            {renderMovies((movie) => movie.comedy && !movie.disney && !movie.animation)}
          </div>
          <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
          <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />
        </>
      )
    },
        // Recomendación Solo 1/Una dominguera
        {
          display: currentStep === 8,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Domingo de mantita y...</h2>
                {renderMovies((movie) => movie.comedy || movie.sunday_movie || movie.solitary)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },
                // Recomendación Solo 2/Accion
        {
          display: currentStep === 10,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Acción?, para eso esta:</h2>
                {renderMovies((movie) => !movie.animation || movie.action || movie.violence )}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },
          // Recomendación Solo 2/ historica
        {
          display: currentStep === 11,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Historias reales, gente real:</h2>
                {renderMovies((movie) => movie.historical)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
            </>
          )
        },
            // Recomendación Solo 2/Terror o suspenso
        {
          display: currentStep === 12,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">¿Viendo películas de terror solo? Pues a ver como te va con:</h2>
                {renderMovies((movie) => movie.terror || movie.suspence)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

                    // Recomendación Solo 2/te dejan pensando todo el día
        {
          display: currentStep === 13,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Hoy te recomendamos</h2>
                {renderMovies((movie) => movie.plot_twits)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },
              // Recomendación Solo 3/te dejan pensando todo el día
        {
          display: currentStep === 15,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Vamos a llorar un rato con</h2>
                {renderMovies((movie) => movie.drama || movie.cry)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        {
          display: currentStep === 16,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Una difícil y cruda:</h2>
                {renderMovies((movie) => movie.hard_to_watch)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        {
          display: currentStep === 17,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Emotiva y motivadora como:</h2>
                {renderMovies((movie) => movie.motivating)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        {
          display: currentStep === 20,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Romaticas:</h2>
                {renderMovies((movie) => movie.romantic)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

           </>
          )
        },

        {
          display: currentStep === 21,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Alegría y risas:</h2>
                {renderMovies((movie) => movie.couple && movie.comedy || movie.happy)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        {
          display: currentStep === 22,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Para hacer maratón:</h2>
                {renderMovies((movie) => movie.marathon)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        {
          display: currentStep === 24,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Thrillers para parejas:</h2>
                {renderMovies((movie) => movie.action && movie.violence)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        {
          display: currentStep === 25,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Dominguera para dos:</h2>
                {renderMovies((movie) => movie.sunday_movie)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        {
          display: currentStep === 26,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Las películas mas recientes:</h2>
                {renderMovies((movie) => movie.new)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        {
          display: currentStep === 29,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Aventuras fantásticas para toda la familia:</h2>
                {renderMovies((movie) => movie.family && movie.action)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        {
          display: currentStep === 30,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Una animada para todas las edades:</h2>
                {renderMovies((movie) => movie.kids && movie.animation)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        {
          display: currentStep === 31,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Películas alegres para toda la familia:</h2>
                {renderMovies((movie) => movie.family && movie.live_action)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        {
          display: currentStep === 33,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">¡Disney siempre es un acierto para los peques!</h2>
                {renderMovies((movie) => movie.disney)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        {
          display: currentStep === 34,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Para los más peques de la casa:</h2>
                {renderMovies((movie) => movie.children)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        {
          display: currentStep === 35,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">¡Las mejores Películas para que disfruten los niños!:</h2>
                {renderMovies((movie) => movie.happy && movie.kids)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        {
          display: currentStep === 35,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">No te preocupes para ti tenemos:</h2>
                {renderMovies((movie) => movie.happy && movie.animation)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        {
          display: currentStep === 39,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Para que siga la fiesta:</h2>
                {renderMovies((movie) => movie.party)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        {
          display: currentStep === 40,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Clásicos para la fiesta:</h2>
                {renderMovies((movie) => movie.classic)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        {
          display: currentStep === 41,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Terror entre amigos:</h2>
                {renderMovies((movie) => movie.terror)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        {
          display: currentStep === 43,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Pues Thriller será:</h2>
                {renderMovies((movie) => movie.crime)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        {
          display: currentStep === 44,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Pues ciencia ficción será:</h2>
                {renderMovies((movie) => movie.science_fiction)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        {
          display: currentStep === 45,
          content: (
            <>
              <div className="form-card">
                <h2 className="fs-title text-center infoMovie">Pues comedia será:</h2>
                {renderMovies((movie) => movie.comedy && !movie.animation)}
              </div>
              <button className="onBoardingButton" type="button" onClick={regenerateRecommendations}>Dame otra Recomendación</button>
              <input type="button" name="Volver a empezar" className="previous action-button-previous" onClick={()=>setCurrentStep(0)} value="Volver a empezar" />

            </>
          )
        },

        
  ];

  return (
    <>
      <div className="container-fluid" id="grad1">
        <div className="row justify-content-center mt-0">
          <div className="col-11 col-sm-9 col-md-7 col-lg-6 text-center p-0 mt-3 mb-2">
            <div className="card movieCard px-0 pt-4 pb-0 mt-3 mb-3 c" style={{boxShadow: "1px 3px 67px #473e3e"}}>
              <h2 className="movieRecomendationH2 infoMovie">
                <strong>{currentStep === 0 ? 'Recomiendame una pelicula!' : 'ScreeneR'}</strong>
              </h2>
              <p className="presentation">
                {currentStep === 0
                  ? 'Descubre la película perfecta para cada ocasión con nuestro recomendador personalizado. Solo dinos cómo te sientes, con quién estás y qué te provoca, ¡y te sugeriremos la elección ideal para tu momento.'
                  : ''}
              </p>
              <div className="row">
                <div className="col-md-12 mx-0">
                  <form id="msform">
                    {fieldsets.map((fieldset, index) => (
                        <fieldset className="fieldsetMovie" key={index} style={{ display: fieldset.display ? 'block' : 'none' }}>
                          {fieldset.content}
                        </fieldset>
                    ))}
                  </form>
                  {currentStep === 0 && (
                    <div className="movie-posters">
                      {getRandomMovies()}
                      <button className="onBoardingButton" type="button" onClick={handleInicioClick}>
                        Iniciar
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

