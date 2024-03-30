import React, { useState, useRef } from 'react';
import './Modal.css'
import Modal from './Modal';
const ModalContainer = ({ title, info }) => {
    const [content, setContent] = useState(null);
    const triggerRef = useRef(null);

    function handleMouseEnter(info) {
      setContent(info);
    };
  
    function handleMouseLeave(){
      setContent(null);
    };
  return (
    <div className="modal-item"
        onMouseEnter={() => handleMouseEnter(info)}
        onMouseLeave={handleMouseLeave}
        ref={triggerRef}
    >   
    {title}
    {content && (
        <Modal content={info} />
    )}
    </div>
  );
};

export default ModalContainer;