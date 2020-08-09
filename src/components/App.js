import React from 'react';
import starwars from '../apis/starwars';
import {
  Route,
} from 'react-router-dom';

import FilmList from './FilmList';
import FilmDetail from './FilmDetail';

class App extends React.Component {

  state = { films: [] };

  componentDidMount() {
    starwars.get('films/')
      .then(res => {
        this.setState({films: res.data.results});
      });
  };

  render() {
    return (
      <div>
        <Route exact path='/'>
          <FilmList films={this.state.films} />
        </Route>
        <Route path="/:episode_id" component={FilmDetail}/>
      </div>
    );
  };
};


export default App;