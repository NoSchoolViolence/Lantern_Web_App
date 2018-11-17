import React, { Component } from 'react';
import ROUTES from '../routes';

class Search extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <label>
            Enter comma separated behavior terms:
              <br />
            <input type="text" name="search" />
          </label>
          <br />
          <input type="submit" value="Search" />
          <div><a href={ROUTES.RESULTS}>Results</a></div>
          <input
            name="Public"
            type="checkbox"
          />Public
        </form>
      </div>
    );
  }
}

export default Search;