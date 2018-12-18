import React, { Component } from "react";
import Modal from './modal';


class CorrellationList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showDetails: false,
      activeIndex: null,
      data: this.props.dataset
    };
  }

  showModal = (i) => {
    this.setState({ activeIndex: i })
  }

  hideModal = () => {
    this.setState({ showDetails: false });
    this.setState({ activeIndex: null })
  }

  render() {
    const terms = (this.state.data).map((term,index)=>(
      
      term.listOfViolence.map((item, i) =>
        <p>{item.name}</p>
      )
    ))


    
    return (
      <div>{terms}</div> 
    )

    
  }

}

export default CorrellationList;
