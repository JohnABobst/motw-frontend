import React from 'react';
import './GearList.css'; // Import CSS for styling
import ModalContainer from '../../../../UtilityComponents/Modal/ModalContainer';

const GearList = ({ gear }) => {
  return (
    <div className='modal-container' >
      {gear.map((item, index) => (
        <ModalContainer key={index} title={item.name} info={item.description} />

      ))}
    </div>
  );
};

export default GearList;