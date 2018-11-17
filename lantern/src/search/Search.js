import React, { Component } from 'react';


class Search extends Component {
  render() {
    return (
      <div className="App">
        <form>
          <label>
            Enter comma separated behavior terms: 
              <br/>
              <input type="text" name="search" />
          </label>
          <br/> 
          <input type="submit" value="Search" />
          
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