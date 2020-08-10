import React from 'react';
import starwars from '../apis/starwars';
import {
  Route,
} from 'react-router-dom';

import FilmList from './FilmList';
import FilmDetail from './FilmDetail';
import VehicleDetail from './VehicleDetail';
import SearchBar from './SearchBar';

class App extends React.Component {

  state = { films: [] };

  onSearchSubmit = term => {
    starwars.get('films/', { params: {search: term} })
      .then(res => {
        this.setState({films: res.data.results});
      })
      .catch((e) => {
        alert('Error in retrieving films');
        this.setState({ films: [] });
      });
  }

  componentDidMount() {
    starwars.get('films/')
      .then(res => {
        this.setState({films: res.data.results});
      })
      .catch((e) => {
        alert('Error in retrieving films');
        this.setState({ films: [] });
      });
  };

  render() {
    return (
      <div>
        <Route exact path='/'>
          <SearchBar onSubmitSB={ this.onSearchSubmit } />
          <FilmList films={ this.state.films } />
        </Route>
        <Route path="/vehicles/:vehicleName" component={ VehicleDetail } /> 
        <Route path="/films/:episode_id" component={ FilmDetail }/>
      </div>
    );
  };
};


export default App;