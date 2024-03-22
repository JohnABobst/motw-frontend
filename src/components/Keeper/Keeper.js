import React from 'react';
import VoiceInput from './VoiceInput/VoiceInput';
import CampaignOutput from './CampaignOutput/CampaignOutput';

function Keeper() {
    return (
        <div>
            <h2></h2>
            <p>Welcome to Monster of the Week, I am the Keeper of Secrets and I will be running your campaign today.</p>
            <CampaignOutput />
            <VoiceInput />
        </div>
    );
}

export default Keeper;