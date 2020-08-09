import React from 'react';
import starwars from '../apis/starwars';
import {
  Route,
} from 'react-router-dom';

import FilmList from './FilmList';
import FilmDetail from './FilmDetail';
import SearchBar from './SearchBar';

class App extends React.Component {

  state = { films: [] };

  onSearchSubmit = term => {
    starwars.get('films/', { params: {search: term} })
      .then(res => {
        this.setState({films: res.data.results});
      });
  }

  componentDidMount() {
    starwars.get('films/')
      .then(res => {
        this.setState({films: res.data.results});
      })
      .catch((e) => {
        alert('Error', e)
        console.log(e)
      });
  };

  render() {
    return (
      <div>
        <Route exact path='/'>
          <SearchBar onSubmitSB={ this.onSearchSubmit } />
          <FilmList films={ this.state.films } />
        </Route>
        <Route path="/:episode_id" component={ FilmDetail }/>
      </div>
    );
  };
};


export default App;