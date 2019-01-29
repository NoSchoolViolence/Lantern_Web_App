import React, { Component } from "react";
import Modal from './modal';


class CorrellationList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showDetails: false,
      activeIndex: null,
      data: this.props.dataset,
      terms: this.props.terms
    };
  }

  // Method to show hidden model based on context - David

  showModal = (i) => {
    this.setState({ activeIndex: i })
  }

  // Method to close out the model again. - David

  hideModal = () => {
    this.setState({ showDetails: false });
    this.setState({ activeIndex: null })
  }

// Displays a div 
// when the 2nd search term equals the 1st item.name from listOfViolences 
// in the sample dataset in data.js


  render() {

    // Finds the violence list that we're looking for based on the search terms - David

    let violenceList = null;
    for (let i = 0; i < this.state.data.length; i++) {
      if (this.state.data[i].name === this.props.terms) {
        violenceList = this.state.data[i].listOfViolence
      }
    }
    if (!violenceList)
    {
      return ( 
      <div className="CorrellationList">
        <p>Not Enough Information</p>
      </div>
      );
    }

    return (
      <div className="CorrellationList">
        {
          violenceList.map((item, i) => {
            /* Applying inline style to dynamically represent filled in data  - David*/
            const pStyle = {
                height: 20,
                width: `${item.percentage}%`
            }

            return (
              <div key={i} className="CorrellationContainer">

{/* Modal exists for each item. Will show on click - David*/}

              <Modal show={this.state.activeIndex === i ? true : false} handleClose={this.hideModal}>
                <h3><strong>{ item.name }: {item.percentage}%</strong></h3>
                  <p className="description"><strong>Description:</strong> { item.description }</p>
                  <a href={item.link}>More Information</a>
                </Modal>

{/* Violence type and percentage show for each item. Clickable to display modal - David*/}

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
