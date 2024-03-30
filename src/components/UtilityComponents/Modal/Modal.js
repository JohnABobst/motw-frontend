import React, { useEffect, useRef } from 'react';
import './Modal.css';

const Modal = ({ content }) => {

  return (
    <div className='modal-container'>
      <div className="modal-content">
        <p>{content}</p>
      </div>
    </div>
  );
};

export default Modal;
