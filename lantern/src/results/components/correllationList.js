import React, { Component } from "react";
import Modal from './modal';


class CorrellationList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showDetails: false,
      activeIndex: null,
      data: this.props.dataset,
      terms: this.props.terms.join(', '),
    };
  }

  showModal = (i) => {
    this.setState({ activeIndex: i })
  }

  hideModal = () => {
    this.setState({ showDetails: false });
    this.setState({ activeIndex: null })
  }

  // findList = () => {
  //   let termString = this.state.terms.join(', ');
  //   // console.log(termString);
  //   this.setState({ searchString: termString });
  // }
// Displays a div 
// when the 2nd search term equals the 1st item.name from listOfViolences 
// in the sample dataset in data.js


  render() {
    let violenceList = null;
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].name === this.state.terms) {
        violenceList = this.state.data[i].listOfViolence
      }
    }

    return (
      <div className="CorrellationList">
        {
          violenceList.map((item, i) => {

            const pStyle = {
                height: 50,
                width: `${item.percentage}%`
            }

            return (
              <div key={i} className="CorrellationContainer">
              <Modal show={this.state.activeIndex === i ? true : false} handleClose={this.hideModal}>
                  <p><strong>Description:</strong> { item.description }</p>
                  <a href={item.link}>More Information</a>
                </Modal>
                
                <div onClick={() => this.showModal(i)} className='CorrellationItem' >
                  <h3>Violence Type: {item.name}</h3>
                  <div className='percentContainer'>
                    <div className="ItemPercent" style={ pStyle }>
                    </div>
                  </div>
                </div>
              </div>
            )
            })
        }
        </div>
    );
}

}

export default CorrellationList;
