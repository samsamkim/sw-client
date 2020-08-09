import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';


class FilmDetail extends React.Component {
  state = { title: null, vehicles: [], characters: [], planets: [] }

  getDataAndSetStateFromURLs (URLsArray, stateType) {
    const dataArray = URLsArray.map((URL) => {
      return axios.get(URL)
        .then(res => res.data)
        .catch((e) => {
          alert(`No ${stateType} information available`);
        });
    });

    Promise.all(dataArray).then((dataPromise) => {
      this.setState({[stateType]: dataPromise})
    });
  };

  componentDidMount() {
    const film = this.props.location.state.film;
    const { title, vehicles, characters, planets } = film;
    const filmDetailArray = [[vehicles, 'vehicles'], [characters, 'characters'], [planets, 'planets']];

    filmDetailArray.forEach((detailType) => {
      this.getDataAndSetStateFromURLs(detailType[0], detailType[1])
    });

    this.setState({
      title: title,
    });
  };

  renderVehicles() {
    return (
      <div>
        <h4>Vehicles</h4>
        {this.state.vehicles.map((vehicle, i) => {
          return (
            <div key={i}>
              <Link to={{ pathname: '/vehicles/' + encodeURIComponent(vehicle.name), state: {vehicle} }} >
                {vehicle.name}
              </Link>
            </div>
          )
        })}
      </div>
    )
  };

  renderCharacters() {
    return (
      <div>
        <h4>Characters</h4>
        {this.state.characters.map((character, i) => {
          return <div key={i}> {character.name} </div>
        })}
      </div>
    )
  };

  renderPlanets() {
    return (
      <div>
        <h4>Planets</h4>
        {this.state.planets.map((planet, i) => {
          return <div key={i}> {planet.name} </div>
        })}
      </div>
    )
  };

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        {this.renderVehicles()}
        {this.renderCharacters()}
        {this.renderPlanets()}
      </div>
    );
  };
};

export default FilmDetail;