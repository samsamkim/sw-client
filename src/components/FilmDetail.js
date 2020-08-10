import React from 'react';
import axios from 'axios';

import CharacterList from './CharacterList';
import PlanetList from './PlanetList';
import VehicleList from './VehicleList';

class FilmDetail extends React.Component {
  state = { title: null, vehicles: [], characters: [], planets: [] };

  getDataAndSetStateFromURLs (URLsArray, stateType) {
    const dataArray = URLsArray.map((URL) => {
      return axios.get(URL)
        .then(res => res.data)
        .catch((e) => {
          alert(`No ${stateType} information available`);
        });
    });

    Promise.all(dataArray)
      .then((dataPromise) => { this.setState({[stateType]: dataPromise}) })
      .catch((e) => {
        alert('Error grabbing details');
        this.setState({ [stateType]: [] });
      });
  };

  componentDidMount() {
    const film = this.props.location.state.film;
    const { title, vehicles, characters, planets } = film;
    const filmDetailArray = [
      {urls: vehicles, type: 'vehicles'},
      {urls: characters, type: 'characters'},
      {urls: planets, type: 'planets'}
    ];

    filmDetailArray.forEach((detailObj) => {
      this.getDataAndSetStateFromURLs(detailObj['urls'], detailObj['type'])
    });

    this.setState({ title: title, });
  };

  render() {
    return (
      <div>
        <h2> { this.state.title } </h2>
        <VehicleList vehicles={ this.state.vehicles } />
        <CharacterList characters={ this.state.characters }/>
        <PlanetList planets={ this.state.planets }/>
      </div>
    );
  };
};

export default FilmDetail;