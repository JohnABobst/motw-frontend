import React, { useState, useEffect } from 'react';
import { slowDisplayText } from '../../../helpers/textHelper';
import './CampaignOutput.css';

function CampaignOutput() {
    const [campaignText, setCampaignText] = useState('');

    useEffect(() => {
        slowDisplayText("The monster attacks you!", setCampaignText);
    }, []);

    return (
        <div className="campaign-output-container">
            <div className='campaign-header'>
                <h2>Keeper</h2>
            </div>
            <div className="campaign-output-text">
                {campaignText}
            </div>
        </div>
    );
}

export default CampaignOutput;
