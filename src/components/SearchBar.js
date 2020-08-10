import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmitSB(this.state.term)
  };

  render() {
    return (
      <form onSubmit={this.onFormSubmit} >
        <label> Search </label>
        <input 
          type="text"
          value={this.state.term}
          onChange={(e) => this.setState({ term: e.target.value })}
        />
        <button type='submit'> Submit </button>
      </form>
    );
  };
};

export default SearchBar;