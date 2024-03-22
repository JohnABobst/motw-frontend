import React, { useState, useEffect } from 'react';
import { slowDisplayText
 } from '../../../helpers/textHelper';
function CampaignOutput() {

    const [campaignText, setCampaignText] = useState('')

    useEffect(() => {
        slowDisplayText("This text will be populated by a call to Rasa server and will be updated by user input", setCampaignText)
    }, [])

    return (
        <div>
            <h2>CampaignOutput Component</h2>
            <p>{campaignText}</p>
        </div>
    );
}

export default CampaignOutput;