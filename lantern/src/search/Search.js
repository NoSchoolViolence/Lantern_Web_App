import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { checked: false };
  }

  handleCheckClick = () => {
    const privateBox = document.querySelector(".private-box");

    this.setState({ checked: !this.state.checked });

    if (this.state.checked === true) {

      privateBox.style.display = "inline";
    } else {
      privateBox.style.display = "none";
    }
  }

  render() {
    return (
      <div className="App">
        <form>
          <label>
            Enter comma separated behavior terms:
              <br />
            <input type="text" name="search" />
          </label>
          <div>
            <input type="checkbox" checked={this.state.checked} onChange={this.handleCheckClick} />
            <div>Public</div>
            <div className="private-box">
              School Name: <input type="text" /><br />
              School Zip: <input type="text" /><br />
            </div>
          </div>
          <br />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default Search;