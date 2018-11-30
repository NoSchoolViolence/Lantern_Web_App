import React from 'react';

const Modal = (props) => {
  const showHideClassName = props.show ? "modal display-block" : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        {/* {console.log(props.children)} */}
        {props.children}
        <button onClick={props.handleClose}>Close Me</button>
      </div>
    </div>
  )
}

export default Modal;