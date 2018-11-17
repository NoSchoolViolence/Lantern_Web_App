import React, { Component } from 'react';
import './Search.css';
import {Grid, Row, Col} from 'react-bootstrap';


class Search extends Component {
  
  render() {
    const behaviors = ["anger", "cheating", "denial", "emotional elevator", "invalidation", "manipulation"];
    const listItems = behaviors.map((number) =>
      <Col xs={6} md={8}>
         <h3>{number}</h3>
      </Col>
     
    );
    return (
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
        
      </div>
    );
  }
}

export default Search;