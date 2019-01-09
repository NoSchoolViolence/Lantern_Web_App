import React, { Component } from "react";
import CorrelationList from "./components/correllationList";
import Modal from './components/modal';
import dataset from '../data/data';
import ROUTES from "../routes";

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showSchool: false,
      dataset: dataset, 
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
      {/* Pop-up window with the share button under stats */}
        <Modal show={this.state.showSchool} handleClose={this.hideModal}>
          <p>Some kind of information will go here:</p>
          <div className='buttonSpace'>
            <button className='sendButton'>Send to Teacher</button>
            <button className='sendButton'>Send to Other</button>
          </div>
        </Modal>
        {/* Clear button to clear the list of search terms  */}
              <div><a href={ROUTES.SEARCH}>Clear</a></div>

        <h1>Results</h1>
        <div className="Correlation">
          <h2>Correlation</h2>
          {/* printing the stats */}
          <CorrelationList dataset={this.state.dataset} terms={this.props.terms} />
        </div>
          {/* share button under the stats */}
        <button onClick={() => this.showModal()}>
            Share data
        </button>       
      </div>
    );
  }
}

export default Results;


