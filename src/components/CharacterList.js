import React from 'react';

const CharacterList = (props) => {
  const characters = (!props.characters) ?
    'No Characters in this film' :
    props.characters.map( (character, i) => {
      return <div key={i}> {character.name} </div>
    });

  return (
    <div>
      <h4> Characters </h4>
      <div> { props.characters.length ? characters : 'loading' } </div>
    </div>
  )
};

export default CharacterList;
