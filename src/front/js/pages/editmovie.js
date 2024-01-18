import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const MovieEditForm = () => {
  const { store, actions } = useContext(Context);
  const { theid } = useParams(); // Obtén el id de la película de los parámetros de la URL

  const [movieData, setMovieData] = useState({
    title: "",
    release_date: "",
    poster_path: "",
    adult: false,
    backdrop_path: '',
    genre_ids: '',
    original_language: '',
    original_title: '',
    video: false,
    vote_average: '',
    vote_count: '',
    overview: '',
    christmas: false,
    comedy: false,
    animation: false,
    couple: false,
    crime: false,
    disney: false,
    drama: false,
    action: false,
    family: false,
    halloween: false,
    happy: false,
    hard_to_watch: false,
    historical: false,
    kids: false,
    light_film: false,
    marathon: false,
    motivating: false,
    party: false,
    plot_twits: false,
    popularity: '',
    science_fiction: false,
    solitary: false,
    sunday_movie: false,
    suspence: false,
    terror: false,
    war: false,
    violence: false,
    white_noise: false,
  });

  useEffect(() => {

    console.log("store.movies:", store.movies);
    const movieToEdit = store.movies.find((movie) => movie.id === parseInt(theid));
    if (movieToEdit) {
      setMovieData({
        title: movieToEdit.title,
        release_date: movieToEdit.release_date,
        poster_path: movieToEdit.poster_path,
        adult: movieToEdit.adult,
        backdrop_path: movieToEdit.backdrop_path,
        genre_ids: movieToEdit.genre_ids,
        original_language: movieToEdit.original_language,
        original_title: movieToEdit.original_title,
        video: movieToEdit.video,
        vote_average: movieToEdit.vote_average,
        vote_count: movieToEdit.vote_count,
        overview: movieToEdit.overview,
        christmas: movieToEdit.christmas,
        comedy: Boolean(movieToEdit.comedy),
        animation: movieToEdit.animation,
        couple: movieToEdit.couple,
        crime: movieToEdit.crime,
        disney: movieToEdit.disney,
        drama: movieToEdit.drama,
        action: movieToEdit.action,
        family: movieToEdit.family,
        halloween: movieToEdit.halloween,
        happy: movieToEdit.happy,
        hard_to_watch: movieToEdit.hard_to_watch,
        historical: movieToEdit.historical,
        kids: movieToEdit.kids,
        light_film: movieToEdit.light_film,
        marathon: movieToEdit.marathon,
        motivating: movieToEdit.motivating,
        party: movieToEdit.party,
        plot_twits: movieToEdit.plot_twits,
        popularity: movieToEdit.popularity,
        science_fiction: movieToEdit.science_fiction,
        solitary: movieToEdit.solitary,
        sunday_movie: movieToEdit.sunday_movie,
        suspence: movieToEdit.suspence,
        terror: movieToEdit.terror,
        war: movieToEdit.war,
        violence: movieToEdit.violence,
        white_noise: movieToEdit.white_noise,

      });
    }
  }, [theid, store.movies]);

  const handleInputChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setMovieData({
      ...movieData,
      [e.target.name]: value,
    });
  };

  const handleSaveChanges = () => {
    actions.editMovie(movieData, parseInt(theid));
  };

  return (
    <>
      <h1>Editar Película</h1>
      <form>
        <div>
        <label>Título:</label>
        <input type="text" name="title" value={movieData.title} onChange={handleInputChange} />
        </div>

        <div>
        <label>Fecha de lanzamiento:</label>
        <input type="text" name="release_date" value={movieData.release_date} onChange={handleInputChange} />
        </div>

        <div>
        <label>Ruta del póster:</label>
        <input type="text" name="poster_path" value={movieData.poster_path} onChange={handleInputChange} />
        </div>

        <div>
        <label>adult:</label>
        <input type="checkbox" name="adult" value={movieData.adult} onChange={handleInputChange} />
        </div>

        <div>
        <label>Ruta del backdrop:</label>
        <input type="text" name="poster_path" value={movieData.backdrop_path} onChange={handleInputChange} />
        </div>

        <div>
        <label>genre_ids:</label>
        <input type="text" name="genre_ids" value={movieData.genre_ids} onChange={handleInputChange} />
        </div>

        <div>
        <label>original_language:</label>
        <input type="text" name="original_language" value={movieData.original_language} onChange={handleInputChange} />
        </div>

        <div>
        <label>original_title:</label>
        <input type="text" name="original_title" value={movieData.original_title} onChange={handleInputChange} />
        </div>

        <div>
        <label>video:</label>
        <input type="checkbox" name="video" value={movieData.video} onChange={handleInputChange} />
        </div>

        <div>
        <label>vote_average:</label>
        <input type="text" name="vote_average" value={movieData.vote_average} onChange={handleInputChange} />
        </div>
        
        <div>
        <label>vote_count:</label>
        <input type="text" name="vote_count" value={movieData.vote_count} onChange={handleInputChange} />
        </div>


        <div>
        <label>overview:</label>
        <input type="text" name="overview" value={movieData.overview} onChange={handleInputChange} />
        </div>

        <div>
        <label>christmas:</label>
        <input type="checkbox" name="christmas" value={movieData.christmas} onChange={handleInputChange} />
        </div>

        <div>
        <label>comedy:</label>
        <input type="checkbox" name="comedy" value={movieData.comedy} onChange={handleInputChange} />
        </div>

        <div>
        <label>animation:</label>
        <input type="checkbox" name="animation" value={movieData.animation} onChange={handleInputChange} />
        </div>

        <div>
        <label>couple:</label>
        <input type="checkbox" name="couple" value={movieData.couple} onChange={handleInputChange} />
        </div>

        <div>
        <label>crime:</label>
        <input type="checkbox" name="crime" value={movieData.crime} onChange={handleInputChange} />
        </div>

        <div>
        <label>disney:</label>
        <input type="checkbox" name="disney" value={movieData.disney} onChange={handleInputChange} />
        </div>

        <div>
        <label>drama:</label>
        <input type="checkbox" name="drama" value={movieData.drama} onChange={handleInputChange} />
        </div>

        <div>
        <label>action:</label>
        <input type="checkbox" name="action" value={movieData.action} onChange={handleInputChange} />
        </div>

        <div>
        <label>family:</label>
        <input type="checkbox" name="family" value={movieData.family} onChange={handleInputChange} />
        </div>

        <div>
        <label>halloween:</label>
        <input type="checkbox" name="halloween" value={movieData.halloween} onChange={handleInputChange} />
        </div>

        <div>
        <label>happy:</label>
        <input type="checkbox" name="happy" value={movieData.happy} onChange={handleInputChange} />
        </div>

        <div>
        <label>hard_to_watch:</label>
        <input type="checkbox" name="hard_to_watch" value={movieData.hard_to_watch} onChange={handleInputChange} />
        </div>

        <div>
        <label>historical:</label>
        <input type="checkbox" name="historical" value={movieData.historical} onChange={handleInputChange} />
        </div>

        <div>
        <label>kids:</label>
        <input type="checkbox" name="kids" value={movieData.kids} onChange={handleInputChange} />
        </div>

        <div>
        <label>light_film:</label>
        <input type="checkbox" name="light_film" value={movieData.light_film} onChange={handleInputChange} />
        </div>

        <div>
        <label>marathon:</label>
        <input type="checkbox" name="marathon" value={movieData.marathon} onChange={handleInputChange} />
        </div>

        <div>
        <label>motivating:</label>
        <input type="checkbox" name="motivating" value={movieData.motivating} onChange={handleInputChange} />
        </div>

        <div>
        <label>party:</label>
        <input type="checkbox" name="party" value={movieData.party} onChange={handleInputChange} />
        </div>

        <div>
        <label>plot_twits:</label>
        <input type="checkbox" name="plot_twits" value={movieData.plot_twits} onChange={handleInputChange} />
        </div>

        <div>
        <label>popularity:</label>
        <input type="checkbox" name="popularity" value={movieData.popularity} onChange={handleInputChange} />
        </div>

        <div>
        <label>science_fiction:</label>
        <input type="checkbox" name="science_fiction" value={movieData.science_fiction} onChange={handleInputChange} />
        </div>

        <div>
        <label>solitary:</label>
        <input type="checkbox" name="solitary" value={movieData.solitary} onChange={handleInputChange} />
        </div>

        <div>
        <label>sunday_movie:</label>
        <input type="checkbox" name="sunday_movie" value={movieData.sunday_movie} onChange={handleInputChange} />
        </div>

        <div>
        <label>suspence:</label>
        <input type="checkbox" name="suspence" value={movieData.suspence} onChange={handleInputChange} />
        </div>

        <div>
        <label>terror:</label>
        <input type="checkbox" name="terror" value={movieData.terror} onChange={handleInputChange} />
        </div>

        <div>
        <label>war:</label>
        <input type="checkbox" name="war" value={movieData.war} onChange={handleInputChange} />
        </div>

        <div>
        <label>violence:</label>
        <input type="checkbox" name="violence" value={movieData.violence} onChange={handleInputChange} />
        </div>

        <div>
        <label>white_noise:</label>
        <input type="checkbox" name="white_noise" value={movieData.white_noise} onChange={handleInputChange} />
        </div>

        

        
        <button type="button" onClick={handleSaveChanges}>
          Guardar Cambios
        </button>
      </form>
    </>
  );
};