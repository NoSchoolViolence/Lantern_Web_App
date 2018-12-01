import React, { Component } from "react";
// import Modal from 'modal';

class CorrellationList extends Component {

  constructor(props) {

    super(props);

    this.state = { editing: false };

    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    let editing = !this.state.editing;
    this.setState({ editing })
  }

  render() {
    let data = [
      {
        id: "1",
        name: "bullying",
        percentage: 10,
        description: "Ipsum",
        link: 'placeholder'
      },
      {
        id: "2",
        name: "weapons use",
        percentage: 20,
        description: "Ipsum",
        link: 'placeholder'
      },
      {
        id: "3",
        name: "sexual harrasment",
        percentage: 30,
        description: "Ipsum",
        link: 'placeholder'
      }, {
        id: "4",
        name: "self-harm",
        percentage: 40,
        description: "Ipsum",
        link: 'placeholder'
      }, {
        id: "5",
        name: "fighting",
        percentage: 50,
        description: "Ipsum",
        link: 'placeholder'
      }, {
        id: "6",
        name: "drug use",
        percentage: 60,
        description: "Ipsum",
        link: 'placeholder'
      }, {
        id: "7",
        name: "gang activities",
        percentage: 70,
        description: "Ipsum",
        link: 'placeholder'
      }, {
        id: "8",
        name: "verbal abuse",
        percentage: 80,
        description: "Ipsum",
        link: 'placeholder'
      }, {
        id: "9",
        name: "sexual violence",
        percentage: 90,
        description: "Ipsum",
        link: 'placeholder'
      }, {
        id: "10",
        name: "sucidal ideation",
        percentage: 100,
        description: "Ipsum",
        link: 'placeholder'
      }
    ];

    return (
      <div className="CorrellationList">
        <ul>
          {
            data.map((item, i) => {
              return (
                <li key={i}>
                  <div>
                    <h3>Violence Type: {item.name}</h3>
                    <p>Percentage: {item.percentage}%</p>
                    <p>Description: {item.description}</p>
                    <a href={item.link}>More Information</a>
                  </div>
                </li>
              )
            })
          }
        </ul>
      </div>
    );
  }
}

export default CorrellationList;
