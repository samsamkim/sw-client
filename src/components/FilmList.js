import React from 'react';
import { Link } from 'react-router-dom';

const FilmList = (props) => {
  const films = props.films.map( (film, i) => {
    return <div key={i}>
      <Link to={{ pathname: 'films/' + film.episode_id, state: {film} }} >
        {film.title}
      </Link>
    </div>
  });

  return <div>{films}</div>
};

export default FilmList;