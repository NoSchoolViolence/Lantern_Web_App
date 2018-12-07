import React, { Component } from "react";
import CorrelationList from "./components/correllationList";
import Modal from './components/modal';
import ROUTES from "../routes";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSchool: false,
    }
  }

  showModal = () => {
    this.setState({ showSchool: true });
  }

  hideModal = () => {
    this.setState({ showSchool: false });
  }

  render() {
    return (
      <div className="Results">
        <Modal show={this.state.showSchool} handleClose={this.hideModal}>
          <p>Some kind of information will go here:</p>
          <div className='buttonSpace'>
            <button className='sendButton'>Send to Teacher</button>
            <button className='sendButton'>Send to Other</button>
          </div>
        </Modal>

        <h1>Results</h1>
        <div><a href={ROUTES.SEARCH}>Back</a></div>
        <div className="Correlation">
          <h2>Correlation</h2>
          <CorrelationList />
        </div>
        <div onClick={() => this.showModal()}>
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
