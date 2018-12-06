import React from 'react';

const Modal = (props) => {
  const showHideClassName = props.show ? "modal display-block" : 'modal display-none';

  return (
    <div className={showHideClassName}>
      <div className="modal-main">
        <button onClick={props.handleClose}>X</button>
        {props.children}
      </div>
    </div>
  )
}

export default Modal;