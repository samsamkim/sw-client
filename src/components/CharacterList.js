import React from 'react';

const CharacterList = (props) => {
  const characters = props.characters.map( (character, i) => {
    return <div key={i}>
      {character.name}
    </div>
  });

  return (
    <div>
      <h4>Characters</h4>
      <div> {characters} </div>
    </div>
  )
};

export default CharacterList;
