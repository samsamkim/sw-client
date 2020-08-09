import React from 'react';

class SearchBar extends React.Component {
  state = { term: '' }

  onFormSubmit = e => {
    e.preventDefault();
    this.props.onSubmitSB(this.state.term)
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit} >
          <div>
            <label>Search</label>
            <input 
              type="text"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <button type='submit'> Submit </button>
          </div>
        </form>
      </div>
    );
  };
};

export default SearchBar;