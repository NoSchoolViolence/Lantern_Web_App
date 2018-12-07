import React, { Component } from "react";
import CorrelationList from "./components/correllationList";
import Modal from './components/modal';
import ROUTES from "../routes";

class Results extends Component {
  render() {
    return (
      <div className="Results">
        <h1>Results</h1>
        <div><a href={ROUTES.SEARCH}>Back</a></div>
        <div className="Correlation">
          <h2>Correlation</h2>
          <CorrelationList />
        </div>
        <div>

            School information goes here
 
        </div>
        <div>
          Searched Behaviors go here
        </div>
      </div>
    );
  }
}

export default Results;
