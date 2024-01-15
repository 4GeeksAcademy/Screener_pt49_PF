import React, { useState, useEffect } from 'react';

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
      // Otros campos...
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
    <div>
      <h2>Formulario de Película</h2>
      <form onSubmit={handleSubmit}>
      <label>
          id:
          <input type="text" name="id" value={formValues.id} onChange={handleChange} />
        </label>
        <br />
        <label>
          Título:
          <input type="text" name="title" value={formValues.title} onChange={handleChange} />
        </label>
        <br />
        <label>
          Fecha de Lanzamiento:
          <input
            type="text"
            name="release_date"
            value={formValues.release_date}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Poster Path:
          <input
            type="text"
            name="poster_path"
            value={formValues.poster_path}
            onChange={handleChange}
          />
        </label>
        <label>
          Backdrop path:
          <input
            type="text"
            name="poster_path"
            value={formValues.backdrop_path}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Overview:
          <textarea
            name="overview"
            value={formValues.overview}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Vote Average:
          <input
            type="text"
            name="vote_average"
            value={formValues.vote_average}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Género IDs:
          <input
            type="text"
            name="genre_ids"
            value={formValues.genre_ids}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Popularidad:
          <input
            type="text"
            name="popularity"
            value={formValues.popularity}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Lenguaje original:
          <input
            type="text"
            name="original_lengue"
            value={formValues.original_language}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Titulo original:
          <input
            type="text"
            name="og_title"
            value={formValues.original_title}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Conteo de votos:
          <input
            type="text"
            name="vote_count"
            value={formValues.vote_count}
            onChange={handleChange}
          />
        </label>
        <br />
        {/* Agrega otros campos del formulario aquí */}
        <br />
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
          Hard to Watch:
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
          Light Film:
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
          Plot Twists:
          <input
            type="checkbox"
            name="plot_twits"
            checked={formValues.plot_twits}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Science Fiction:
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
          Sunday Movie:
          <input
            type="checkbox"
            name="sunday_movie"
            checked={formValues.sunday_movie}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <label>
          Suspense:
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
          White Noise:
          <input
            type="checkbox"
            name="white_noise"
            checked={formValues.white_noise}
            onChange={handleCheckboxChange}
          />
        </label>
        <br />
        <button type="submit">Guardar Película</button>
      </form>
    </div>
  );
};