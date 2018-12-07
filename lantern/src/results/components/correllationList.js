import React, { Component } from "react";
import Modal from './modal';

class CorrellationList extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      showDetails: false,
      activeIndex: null
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
    let data = [
      {
        id: "1",
        name: "bullying",
        percentage: 90,
        description: "bullying Nunc pharetra lorem quam, sed iaculis neque facilisis nec. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque eu leo quis justo ultricies hendrerit. Nam mollis hendrerit ante accumsan volutpat. Duis euismod mollis ante a maximus. Ut ac urna et dui ultrices pretium id eu augue. Integer sit amet orci non dolor aliquet mattis. Donec pharetra placerat massa, sed euismod mauris vehicula sed. Morbi sit amet rhoncus enim. In ullamcorper finibus imperdiet.",
        link: 'placeholder'
      },
      {
        id: "2",
        name: "weapons use",
        percentage: 70,
        description: "weapons use Vivamus commodo leo et ex tempus, a placerat elit molestie. Mauris eget vulputate nisi. Nulla aliquam sit amet ligula luctus fermentum. Vivamus ligula tellus, suscipit non dignissim quis, accumsan at massa. In ipsum lectus, scelerisque sit amet tempus quis, consectetur sit amet lectus. Morbi interdum dui nec nisi molestie, sed gravida velit cursus. Morbi vel feugiat est. Curabitur vitae imperdiet lacus. Morbi porta, est vel iaculis volutpat, elit ex ullamcorper risus, vel condimentum metus purus non odio.",
        link: 'placeholder'
      },
      {
        id: "3",
        name: "sexual harrasment",
        percentage: 50,
        description: "sexual harrasment Sed scelerisque ante at odio convallis tincidunt. Cras ultrices efficitur ligula, eget ornare purus egestas id. Duis egestas lobortis sodales. Quisque sollicitudin condimentum commodo. Aliquam interdum libero sit amet elit molestie, ullamcorper imperdiet lorem consequat. Maecenas gravida, nulla vitae accumsan ornare, erat quam elementum magna, ut maximus ligula tellus in neque. Sed et semper augue, eget placerat dolor. Praesent sed consectetur nisl. In nec ante blandit erat ullamcorper ornare laoreet eget tellus. Phasellus sed ornare quam, quis accumsan enim. Quisque molestie scelerisque dictum. Proin aliquet urna quis elit malesuada, vitae interdum ipsum convallis.",
        link: 'placeholder'
      }, {
        id: "4",
        name: "sucidal ideation",
        percentage: 30,
        description: "suicidal ideation Donec mollis facilisis odio vitae commodo. Fusce magna nibh, ultricies eget lectus a, congue mollis lacus. Cras porta blandit mauris ac tristique. Sed ullamcorper ac tellus vitae vehicula. Proin ipsum libero, sagittis eu arcu nec, ultrices suscipit velit. Aliquam erat volutpat. Maecenas vitae rhoncus leo.",
        link: 'placeholder'
      }, {
        id: "5",
        name: "self-harm",
        percentage: 10,
        description: "selfharm Donec volutpat quam neque, quis elementum ipsum semper sed. Duis sed libero vulputate, viverra mauris ac, dapibus risus. Proin elementum metus sit amet elit sodales dignissim. Praesent non dignissim neque, sed semper velit. Pellentesque ac urna ipsum. Phasellus lacus tortor, interdum vel molestie a, tempor vel felis. Integer vestibulum sem at nisi faucibus pharetra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
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
