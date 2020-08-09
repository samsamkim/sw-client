import React from 'react';
import { useParams } from 'react-router-dom';


const FilmDetail = (props) => {

  let { title } = useParams();

  return (
    <div>
      <h2>{title}</h2>
    </div>
  );
};

export default FilmDetail;