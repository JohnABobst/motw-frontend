import React, { useState } from 'react';
import './Character.css'; // Import your CSS file for styling
import GenericMoves from './Moves/GenericMoves';
import PlaybookMoves from './Moves/PlaybookMoves';
import CharacterStats from './CharacterStats/CharacterStats';
import {name, moves, playbookMoves} from '../../../dev/dummydata';


function Character({characterStats, setCharacterStats}) {

  return (
    <div className="character-info-container">
      <h2>{name}</h2>
      <GenericMoves moves={moves} />
      <PlaybookMoves moves={playbookMoves} />
      <CharacterStats characterStats={characterStats} setCharacterStats={setCharacterStats} />
    </div>
  );
};

export default Character;
