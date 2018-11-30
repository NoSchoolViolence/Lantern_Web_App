import React, { Component } from "react";
import Modal from './modal';

class CorrellationList extends Component {
  constructor() {
    super();
    this.state = { 
      show: false,
      activeIndex: null
    };
  }

  showModal = (i) => {
    this.setState({ activeIndex: i })
  }

  hideModal = () => {
    this.setState({ show: false });
    this.setState({ activeIndex: null })
  }

  render() {
    let data = [
      {
        id: "1",
        name: "bullying",
        percentage: 10,
        description: "bullying",
        link: 'placeholder'
      },
      {
        id: "2",
        name: "weapons use",
        percentage: 20,
        description: "weapons use",
        link: 'placeholder'
      },
      {
        id: "3",
        name: "sexual harrasment",
        percentage: 30,
        description: "sexual harrasment",
        link: 'placeholder'
      }, {
        id: "10",
        name: "sucidal ideation",
        percentage: 85,
        description: "suicidal ideation",
        link: 'placeholder'
      }, {
        id: "4",
        name: "self-harm",
        percentage: 40,
        description: "selfharm",
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
              <div key={i} className="CorrellationContainer">
                {/* {console.log(i)} */}
                <Modal show={this.state.activeIndex === i ? true : false} handleClose={this.hideModal}>
                  <p>Description: { item.description }</p>
                  <a href={item.link}>More Information</a>
                </Modal>

                <div onClick={() => this.showModal(i)} className='CorrellationItem' >
                  <h3>Violence Type: {item.name}</h3>
                  <div className='percentContainer'>
                    <div className="ItemPercent" style={pStyle}>
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
