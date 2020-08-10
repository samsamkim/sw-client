import React from 'react';

const PlanetList = (props) => {
  const planets = (!props.planets) ?
    'No planets in this film' :
    props.planets.map( (planet, i) => {
      return <div key={i}> {planet.name} </div>
    });

  return (
    <div>
      <h4>Planets</h4>
      <div> { props.planets.length ? planets : 'loading' } </div>
    </div>
  );
};

export default PlanetList;