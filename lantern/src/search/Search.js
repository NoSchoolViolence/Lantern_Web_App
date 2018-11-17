import React, { Component } from 'react';
<<<<<<< HEAD
import './Search.css';
import {Grid, Row, Col} from 'react-bootstrap';

=======
import ROUTES from '../routes';
>>>>>>> 168fe6fe223ebf44586a23d38720e445e43b20fc

class Search extends Component {
  
  render() {
    const behaviors = ["anger", "cheating", "denial", "emotional elevator", "invalidation", "manipulation"];
    const listItems = behaviors.map((number) =>
      <Col xs={6} md={8}>
         <h3>{number}</h3>
      </Col>
     
    );
    return (
<<<<<<< HEAD
      <div className="Search">
        <div className="searchBox">
        </div>
        <Grid>
          <Row className="show-grid">
            {listItems}
          </Row>
        </Grid>
        <div className="row">
    					{listItems}
  			</div>
        
=======
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
>>>>>>> 168fe6fe223ebf44586a23d38720e445e43b20fc
      </div>
    );
  }
}

export default Search;