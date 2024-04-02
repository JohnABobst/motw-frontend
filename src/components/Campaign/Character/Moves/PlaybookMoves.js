
import React, { useState } from 'react';
import ModalContainer from '../../../UtilityComponents/Modal/ModalContainer';
import '../Character.css';

const PlaybookMoves = ({moves}) => {
  return (
    <div className="modal-container">
        {Object.keys(moves).map((move, index) => (
            <ModalContainer key={index} title={move} info={moves[move]} />
        ))}
    </div>
);
};

export default PlaybookMoves;
