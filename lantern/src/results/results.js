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

  // functions to show and hide modal for sharing to school
  
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
          {/* {console.log(this.props.data)} */}
          <p>Some kind of information will go here:</p>
          <div className='buttonSpace'>
            <button className='sendButton'>Send to Teacher</button>
            <button className='sendButton'>Send to Other</button>
          </div>
        </Modal>
              <div><a href={ROUTES.SEARCH}>Clear</a></div>

        <h1>Results</h1>
        <div className="Correlation">
          <h2>Correlation</h2>
          <CorrelationList data={this.props.data}/>
        </div>
        <button onClick={() => this.showModal()}>
            Share data
        </button>       
      </div>
    );
  }
}

export default Results;


