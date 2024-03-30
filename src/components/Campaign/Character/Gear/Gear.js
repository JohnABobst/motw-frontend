import React from 'react';
import GearList from './GearList/GearList';
import '../Character.css';
import './Gear.css'

const Gear = ({ gear }) => {
  return (
    <div className='character-info-container'>
      <div className='modal-container'>
        {Object.keys(gear).map((gearType, index) => (
          <div key={index}>
            <h3>{gearType.charAt(0).toUpperCase() + gearType.slice(1)}</h3>
            <GearList gear={gear[gearType]} />
          </div>
        ))}
      </div>
    </div>

  );
};

export default Gear;
