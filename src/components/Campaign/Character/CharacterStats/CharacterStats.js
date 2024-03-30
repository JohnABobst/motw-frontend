import React, { useState } from 'react';
import './CharacterStats.css';

const CharacterStats = ({ characterStats, setCharacterStats }) => {
  const [harm, setHarm] = useState(characterStats.harm);
  const [experience, setExperience] = useState(characterStats.experience);
  const [isLeveling, setIsLeveling] = useState(experience == 5 ? true : false);

  const changeStats = (attribute, change) => {
    if (isLeveling) {
      characterStats[attribute] += change
      setCharacterStats(characterStats);
    }
  };

  const handleHarmChange = (e) => {
    if (e.target.checked) {
      setHarm(harm - 1);
    } else {
      setHarm(harm + 1);
    }
  };

  const handleExperienceChange = (e) => {
    if (e.target.checked) {
      setExperience(setExperience(experience - 1));
      if (experience == 5) {
        isLeveling = true;
      }
    } else {
      setExperience(setExperience(experience + 1));
    }
  };

  return (
    <div className="character-stats">
      {Object.keys(characterStats).map(stat => (
      (
          <div className="stat">
            <strong>{stat.charAt(0).toUpperCase() + stat.slice(1)}:</strong> {characterStats[stat]}{' '}
            { isLeveling && (
              <>
                <button onClick={() => changeStats(stat, 1)}>+</button>
                <button onClick={() => changeStats(stat, -1)}>-</button>
              </>
            )}
          </div>
        )))}
    </div>
  );
};

export default CharacterStats;
