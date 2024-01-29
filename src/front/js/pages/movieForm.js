import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "../../styles/movies.css";
export const MovieForm = ({ actions, store }) => {
  const [formValues, setFormValues] = useState({
    id: '',
    title: '',
    release_date: '',
    adult: false,
    backdrop_path: '',
    genre_ids: '',
    original_language: '',
    original_title: '',
    video: false,
    vote_average: '',
    vote_count: '',
    poster_path: '',
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
    romantic: false,
    disney_live: false,
    new: false,
    classic: false,
    children: false,
    cry: false,
    live_action: false



  });

  useEffect(() => {
    setFormValues({
      id: store.moviePreApi.id || 0,
      title: store.moviePreApi.title || '',
      release_date: store.moviePreApi.release_date || '',
      adult: store.moviePreApi.adult || false,
      backdrop_path: store.moviePreApi.backdrop_path || '',
      poster_path: store.moviePreApi.poster_path || '',
      overview: store.moviePreApi.overview || '',
      vote_average: store.moviePreApi.vote_average || '',
      genre_ids: store.moviePreApi.genre_ids || '',
      original_language: store.moviePreApi.original_language || '',
      original_title: store.moviePreApi.original_title || '',
      video: store.moviePreApi.video || false,
      popularity: store.moviePreApi.popularity || '',
      animation: store.moviePreApi.animation || false,
      vote_count: store.moviePreApi.vote_count || 0,
      christmas: store.moviePreApi.christmas || false,
      comedy: store.moviePreApi.comedy || false,
      couple: store.moviePreApi.couple || false,
      crime: store.moviePreApi.crime || false,
      disney: store.moviePreApi.disney || false,
      drama: store.moviePreApi.drama || false,
      family: store.moviePreApi.family || false,
      halloween: store.moviePreApi.halloween || false,
      violence: store.moviePreApi.violence || false,
      happy: store.moviePreApi.happy || false,
      hard_to_watch: store.moviePreApi.hard_to_watch || false,
      historical: store.moviePreApi.historical || false,
      kids: store.moviePreApi.kids || false,
      light_film: store.moviePreApi.light_film || false,
      marathon: store.moviePreApi.marathon || false,
      motivating: store.moviePreApi.motivating || false,
      party: store.moviePreApi.party || false,
      plot_twits: store.moviePreApi.plot_twits || false,
      science_fiction: store.moviePreApi.science_fiction || false,
      solitary: store.moviePreApi.solitary || false,
      action: store.moviePreApi.action || false,
      sunday_movie: store.moviePreApi.sunday_movie || false,
      suspence: store.moviePreApi.suspence || false,
      terror: store.moviePreApi.terror || false,
      war: store.moviePreApi.war || false,
      white_noise: store.moviePreApi.white_noise || false,

      romantic: store.moviePreApi.romantic || false,
      disney_live: store.moviePreApi.disney_live || false,
      new: store.moviePreApi.new || false,
      classic: store.moviePreApi.classic || false,
      children: store.moviePreApi.children || false,
      cry: store.moviePreApi.cry || false,
      live_action: store.moviePreApi.live_action || false,

    });
  }, [store.moviePreApi]);

  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleCheckboxChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.checked,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    actions.saveMovieToAPI(formValues);
  };

  return (
    <>
    <div className='container mt-2'>
      <h2>Formulario de Película</h2>
      <form onSubmit={handleSubmit}>
      <button className='movieChangeButton mb-1' type="submit">Guardar Película</button>
        <div className='container'>
          <label>id: <input type="text" name="id" value={formValues.id} onChange={handleChange} /></label>
          <label className='ms-1'>Título: <input type="text" name="title" value={formValues.title} onChange={handleChange} /></label>
          <label className='ms-1'>Fecha de Lanzamiento: <input type="text" name="release_date" value={formValues.release_date} onChange={handleChange}/></label>
      </div>

      <div className='container mt-2'>
      <label>
        Poster Path:
      <input
            type="text"
            name="poster_path"
            value={formValues.poster_path}
            onChange={handleChange}
      />
      </label>

      <label className='ms-1'>
          Backdrop path:
      <input
            type="text"
            name="poster_path"
            value={formValues.backdrop_path}
            onChange={handleChange}
      />
      </label>
      </div>

        <div className='container mt-2'>
          <label>
          Overview:   
          <textarea
            name="overview"
            value={formValues.overview}
            onChange={handleChange}
          />
          </label>
        </div>

        <div className='container mt-2'>
        <label>
          Vote Average: 
          <input
            type="text"
            name="vote_average"
            value={formValues.vote_average}
            onChange={handleChange}
          />
        </label>
  
        <label className='ms-1'>
          Género IDs:
          <input
            type="text"
            name="genre_ids"
            value={formValues.genre_ids}
            onChange={handleChange}
          />
        </label>
  
        <label className='ms-1'>
          Popularidad:
          <input
            type="text"
            name="popularity"
            value={formValues.popularity}
            onChange={handleChange}
          />
        </label>
        </div>

        <div className='container mt-2 mb-3'>
        <label>
          Lenguaje original:
          <input
            type="text"
            name="original_lengue"
            value={formValues.original_language}
            onChange={handleChange}
          />
        </label>
        <label>
          Titulo original:
          <input
            type="text"
            name="og_title"
            value={formValues.original_title}
            onChange={handleChange}
          />
        </label>
        <label>
          Conteo de votos:
          <input
            type="text"
            name="vote_count"
            value={formValues.vote_count}
            onChange={handleChange}
          />
        </label>

        </div> 
        <label>
          Adult:
          <input
            type="checkbox"
            name="adult"
            checked={formValues.adult}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Video:
          <input
            type="checkbox"
            name="video"
            checked={formValues.video}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Christmas:
          <input
            type="checkbox"
            name="christmas"
            checked={formValues.christmas}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Comedy:
          <input
            type="checkbox"
            name="comedy"
            checked={formValues.comedy}
            onChange={handleCheckboxChange}
          />
        </label>
        <br/>
        <label>
          Action:
          <input
            type="checkbox"
            name="comedy"
            checked={formValues.action}
            onChange={handleCheckboxChange}
          />
        </label>
        <br/>
        <label>
          Animation:
          <input
            type="checkbox"
            name="comedy"
            checked={formValues.animation}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Couple:
          <input
            type="checkbox"
            name="couple"
            checked={formValues.couple}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Crime:
          <input
            type="checkbox"
            name="crime"
            checked={formValues.crime}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Disney:
          <input
            type="checkbox"
            name="disney"
            checked={formValues.disney}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Drama:
          <input
            type="checkbox"
            name="drama"
            checked={formValues.drama}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Family:
          <input
            type="checkbox"
            name="family"
            checked={formValues.family}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Violence:
          <input
            type="checkbox"
            name="family"
            checked={formValues.violence}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Halloween:
          <input
            type="checkbox"
            name="halloween"
            checked={formValues.halloween}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Happy:
          <input
            type="checkbox"
            name="happy"
            checked={formValues.happy}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Hard_to_Watch:
          <input
            type="checkbox"
            name="hard_to_watch"
            checked={formValues.hard_to_watch}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Historical:
          <input
            type="checkbox"
            name="historical"
            checked={formValues.historical}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Kids:
          <input
            type="checkbox"
            name="kids"
            checked={formValues.kids}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Light_Film:
          <input
            type="checkbox"
            name="light_film"
            checked={formValues.light_film}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Marathon:
          <input
            type="checkbox"
            name="marathon"
            checked={formValues.marathon}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Motivating:
          <input
            type="checkbox"
            name="motivating"
            checked={formValues.motivating}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Party:
          <input
            type="checkbox"
            name="party"
            checked={formValues.party}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          plot_twits:
          <input
            type="checkbox"
            name="plot_twits"
            checked={formValues.plot_twits}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Science_Fiction:
          <input
            type="checkbox"
            name="science_fiction"
            checked={formValues.science_fiction}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Solitary:
          <input
            type="checkbox"
            name="solitary"
            checked={formValues.solitary}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Sunday_Movie:
          <input
            type="checkbox"
            name="sunday_movie"
            checked={formValues.sunday_movie}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
        suspence:
          <input
            type="checkbox"
            name="suspence"
            checked={formValues.suspence}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Terror:
          <input
            type="checkbox"
            name="terror"
            checked={formValues.terror}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />

        <label>
          War: 
          <input
            type="checkbox"
            name="war"
            checked={formValues.war}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          White_Noise:
          <input
            type="checkbox"
            name="white_noise"
            checked={formValues.white_noise}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />

        <label>
        romantic: 
          <input
            type="checkbox"
            name="romantic"
            checked={formValues.romantic}
            onChange={handleCheckboxChange}
          />
        </label>

        <label>
        disney_live: 
          <input
            type="checkbox"
            name="disney_live"
            checked={formValues.disney_live}
            onChange={handleCheckboxChange}
          />
        </label>

        <label>
        new: 
          <input
            type="checkbox"
            name="new"
            checked={formValues.new}
            onChange={handleCheckboxChange}
          />
        </label>

        <label>
        classic: 
          <input
            type="checkbox"
            name="classic"
            checked={formValues.classic}
            onChange={handleCheckboxChange}
          />
        </label>

        <label>
        children: 
          <input
            type="checkbox"
            name="children"
            checked={formValues.children}
            onChange={handleCheckboxChange}
          />
        </label>

        <label>
        cry: 
          <input
            type="checkbox"
            name="cry"
            checked={formValues.cry}
            onChange={handleCheckboxChange}
          />
        </label>

        <label>
          War: 
          <input
            type="checkbox"
            name="live_action"
            checked={formValues.live_action}
            onChange={handleCheckboxChange}
          />
        </label>
        

      </form>
    </div>

    </>
  );
};