import React from 'react';
import { Link } from 'react-router-dom';

const FilmList = (props) => {
  const films = props.films.map( (film) => {
    return <div>
      <Link
      key={film.episode_id}
      to={{pathname: film.episode_id, state: {film}}} >
        {film.title}
      </Link>
    </div>
  });

  return <div>{films}</div>
};

export default FilmList;