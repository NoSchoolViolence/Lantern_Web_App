import React from 'react';

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        {children}
        <button onClick={handleClose}>Close Me</button>
      </div>
    </div>
  )
}

// class Modal extends React.Component {

//   render() {

//     return (

      {/* <div className="overlay">
        <div className="modal">
          {this.props.children}
          <button onClick={this.props.close}>Close Me</button>
        </div>
      </div> */}
//     )

//   }

// }

export default Modal;