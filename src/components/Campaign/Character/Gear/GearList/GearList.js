import React from 'react';
import './GearList.css'; // Import CSS for styling
import ModalContainer from '../../../../UtilityComponents/Modal/ModalContainer';

const GearList = ({ gear }) => {
    console.log(gear)
  return (
    <div className='modal-container' >
      {gear.map((item, index) => (
        <ModalContainer title={item.name} info={item.description} />

      ))}
    </div>
  );
};

export default GearList;