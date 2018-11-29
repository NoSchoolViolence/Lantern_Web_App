import React, { Component } from "react";
import Modal from './modal';

class CorrellationList extends Component {
  // constructor() {

  //   super();

    
  // }

  state = { show: false };
  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  }

  //   this.state = { editing: false };

  //   this.toggleModal = this.toggleModal.bind(this);
  // }

  // toggleModal() {
  //   let editing = !this.state.editing;
  //   this.setState({ editing })
  // }

  render() {
    let data = [
      {
        id: "1",
        name: "bullying",
        percentage: 10,
        description: "bully Ipsum",
        link: 'placeholder'
      },
      {
        id: "2",
        name: "weapons use",
        percentage: 20,
        description: "WU Ipsum",
        link: 'placeholder'
      },
      {
        id: "3",
        name: "sexual harrasment",
        percentage: 30,
        description: "More SH Ipsum",
        link: 'placeholder'
      }, {
        id: "4",
        name: "self-harm",
        percentage: 40,
        description: "SH Ipsum",
        link: 'placeholder'
      }, {
      //   id: "5",
      //   name: "fighting",
      //   percentage: 50,
      //   description: "Ipsum",
      //   link: 'placeholder'
      // }, {
      //   id: "6",
      //   name: "drug use",
      //   percentage: 60,
      //   description: "Ipsum",
      //   link: 'placeholder'
      // }, {
      //   id: "7",
      //   name: "gang activities",
      //   percentage: 70,
      //   description: "Ipsum",
      //   link: 'placeholder'
      // }, {
      //   id: "8",
      //   name: "verbal abuse",
      //   percentage: 80,
      //   description: "Ipsum",
      //   link: 'placeholder'
      // }, {
      //   id: "9",
      //   name: "sexual violence",
      //   percentage: 90,
      //   description: "Ipsum",
      //   link: 'placeholder'
      // }, {
        id: "10",
        name: "sucidal ideation",
        percentage: 85,
        description: "SI ipsum",
        link: 'placeholder'
      }
    ];

    return (
      <div className="CorrellationList">

          {
            data.map((item, i) => {

              const pStyle = {
                height: 50,
                width: `${item.percentage}%`
              }

              return (
                <div key={i}>
                <Modal show={this.state.show} handleClose={this.hideModal}>
                  <p>Description: {item.description}</p>
                  <a href={item.link}>More Information</a>
                </Modal>
                  <div onClick={this.showModal} className="CorrellationItem">
                    <h3>Violence Type: {item.name}</h3>
                    <div className='percentContainer'>
                      <div className="ItemPercent" style={pStyle}></div>
                    </div>
                    {/* <p>Description: {item.description}</p>
                    <a href={item.link}>More Information</a> */}
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
