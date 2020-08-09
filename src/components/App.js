import React from 'react';
import starwars from '../apis/starwars';
import {
  Route,
  Switch
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
        <FilmList films={this.state.films} />

        <Switch>
          <Route path="/films/:episode_id" component={FilmDetail} />
        </Switch>
      </div>
    );
  };
};


export default App;