
import React, { useState } from 'react';
import Modal from '../../../UtilityComponents/Modal/Modal';
import '../Character.css';
import ModalContainer from '../../../UtilityComponents/Modal/ModalContainer';

const GenericMoves = ({moves}) => {
    return (
        <div className="modal-container">
            {Object.keys(moves).map(move => (
                <ModalContainer title={move} info={moves[move]} />
            ))}
        </div>
    );
};

export default GenericMoves;
