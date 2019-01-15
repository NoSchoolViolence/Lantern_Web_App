import React from 'react';

// Modal is importable as needed with the primary functionality in place. Children will be passed through from where it is called in parent component - David

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