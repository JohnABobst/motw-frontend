
import React from 'react';
import '../Character.css';
import ModalContainer from '../../../UtilityComponents/Modal/ModalContainer';

const GenericMoves = ({moves}) => {
    return (
        <div className="modal-container">
            {Object.keys(moves).map((move, index) => (
                <ModalContainer key={index} title={move} info={moves[move]} />
            ))}
        </div>
    );
};

export default GenericMoves;
