import React from 'react';
import { Link } from 'react-router-dom';

const FilmList = (props) => {
  const films = props.films.map( (film) => {
    return <Link to={'/films/' + film.episode_id}>{film.title}</Link>
  });

  return <div>{films}</div>
};

export default FilmList;