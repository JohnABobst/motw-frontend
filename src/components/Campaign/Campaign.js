import React, { useState } from 'react';
import './Campaign.css';
import PlayerInput from './PlayerInput/PlayerInput';
import CampaignOutput from './CampaignOutput/CampaignOutput';
import Character from './Character/Character';
import Gear from './Character/Gear/Gear';
import {gear} from "../../dev/dummydata";

function Campaign() {
    const [characterStats, setCharacterStats] = useState({
        charm: 2,
        sharp: 3,
        tough: 2,
        cool: 1,
        weird: 2,
        luck: 1,
        experience: 3,
        harm: 3,
    })
    return (
        <div className="campaign-container">
            <Character characterStats={characterStats} setCharacterStats={setCharacterStats} />
            <div className='gameplay-container'>
                <CampaignOutput />
                <PlayerInput />
            </div>
            <Gear gear={gear}/>
        </div>
    );
}

export default Campaign;