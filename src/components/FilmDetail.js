import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import CharacterList from './CharacterList';
import PlanetList from './PlanetList';
import VehicleList from './VehicleList';

class FilmDetail extends React.Component {
  state = { title: null, vehicles: [], characters: [], planets: [] }

  getDataAndSetStateFromURLs (URLsArray, stateType) {
    const dataArray = URLsArray.map((URL) => {
      return axios.get(URL)
        .then(res => res.data)
        .catch((e) => {
          alert(`No ${stateType} information available`, e);
        });
    });

    Promise.all(dataArray)
      .then((dataPromise) => { this.setState({[stateType]: dataPromise}) })
      .catch((e) => { alert('Error grabbing details', e) });
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

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        {/* {this.renderVehicles()} */}
        <VehicleList vehicles={this.state.vehicles} />
        <CharacterList characters={this.state.characters}/>
        <PlanetList planets={this.state.planets}/>
      </div>
    );
  };
};

export default FilmDetail;