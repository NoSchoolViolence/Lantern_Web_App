import React, { Component } from "react";
// import Modal from 'modal';
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
    return (
      <div className="CorrellationList">

        {/* <ul>
          {data.forEach(e => {
            <li>
              <div id={e.id}>
                <span>
                  {e.name}
                </span>
                <span>
                  {e.percentage}
                </span>
              </div>
            </li>
          })

          }
        </ul> */}

        <ul>
          <li>
            <div>
              <h3>Violence Type: {data[0].name}</h3>
              <p>Percentage: {data[0].percentage}%</p>
              <p>Description: {data[0].description}</p>
              <p><a href={data[0].link}>More Information</a></p>
            </div>
          </li>
          <li>
            <div>
              <h3>Violence Type: {data[1].name}</h3>
              <p>Percentage: {data[1].percentage}%</p>
              <p>Description: {data[1].description}</p>
              <p><a href={data[1].link}>More Information</a></p>
            </div>
          </li>
          <li>
            <div>
              <h3>Violence Type: {data[2].name}</h3>
              <p>Percentage: {data[2].percentage}%</p>
              <p>Description: {data[2].description}</p>
              <p><a href={data[2].link}>More Information</a></p>
            </div>
          </li>
          <li>
            <div>
              <h3>Violence Type: {data[3].name}</h3>
              <p>Percentage: {data[3].percentage}%</p>
              <p>Description: {data[3].description}</p>
              <p><a href={data[3].link}>More Information</a></p>
            </div>
          </li>
          <li>
            <div>
              <h3>Violence Type: {data[4].name}</h3>
              <p>Percentage: {data[4].percentage}%</p>
              <p>Description: {data[4].description}</p>
              <p><a href={data[4].link}>More Information</a></p>
            </div>
          </li>
          <li>
            <div>
              <h3>Violence Type: {data[5].name}</h3>
              <p>Percentage: {data[5].percentage}%</p>
              <p>Description: {data[5].description}</p>
              <p><a href={data[5].link}>More Information</a></p>
            </div>
          </li>
          <li>
            <div>
              <h3>Violence Type: {data[6].name}</h3>
              <p>Percentage: {data[6].percentage}%</p>
              <p>Description: {data[6].description}</p>
              <p><a href={data[6].link}>More Information</a></p>
            </div>
          </li>
          <li>
            <div>
              <h3>Violence Type: {data[7].name}</h3>
              <p>Percentage: {data[7].percentage}%</p>
              <p>Description: {data[7].description}</p>
              <p><a href={data[7].link}>More Information</a></p>
            </div>
          </li>
          <li>
            <div>
              <h3>Violence Type: {data[8].name}</h3>
              <p>Percentage: {data[8].percentage}%</p>
              <p>Description: {data[8].description}</p>
              <p><a href={data[8].link}>More Information</a></p>
            </div>
          </li>
          <li>
            <div>
              <h3>Violence Type: {data[9].name}</h3>
              <p>Percentage: {data[9].percentage}%</p>
              <p>Description: {data[9].description}</p>
              <p><a href={data[9].link}>More Information</a></p>
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default CorrellationList;
