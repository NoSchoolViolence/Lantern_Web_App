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

  showModal = (i) => {
    this.setState({ activeIndex: i })
  }

  hideModal = () => {
    this.setState({ showDetails: false });
    this.setState({ activeIndex: null })
  }


// Displays a div 
// when the 2nd search term equals the 1st item.name from listOfViolences 
// in the sample dataset in data.js


  render() {
    
    const terms = (this.state.data).map((term,index)=>
      term.listOfViolence.map((item, i) => {
        if (item.name == this.state.terms[1]) {
        const pStyle = {
            height: 50,
            width: `${item.percentage}%`
            
          }
        return (
          <div key={i} className="CorrellationContainer">
          <div className='CorrellationItem' >
                  <h3>Violence Type: {item.name}</h3>
                  <div className='percentContainer'>
                    <div className="ItemPercent" style={ pStyle }>
                    </div>
                  </div>
                </div>
          </div>

        )
        
        
        
        
        }
      }
        
      
      
    ))


    
    return (
      <div>{terms}</div> 
    )

    
  }

}

export default CorrellationList;
