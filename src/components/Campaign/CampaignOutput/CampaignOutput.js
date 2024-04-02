import React, { useState, useEffect, useRef } from 'react';
import './CampaignOutput.css';

function CampaignOutput({ messages }) {
    const scrollRef = useRef(null);
    const outputRef = useRef(null);
    const [scrolling, setScrolling] = useState(false);

    // Function to scroll to the latest message.  
    function scrollDown() {
        setScrolling(false);
        scrollRef.current.scrollIntoView({ behavior: "smooth" })
    }

    // If a user has scrolled up past a certain point updating messages
    // will not cause the window to scroll to the latest message.
    // Scrolling up will also display an arrow that will take the user to the
    // latest message.  

    function handleScroll() {
        const div = outputRef.current;
        let distanceFromTop = div.scrollHeight - div.clientHeight - div.scrollTop;
        if (distanceFromTop <= 100) {
            setScrolling(false);
        } else {
            setScrolling(true);
        }
    }

    // use Effect to update when a new message is added
    useEffect(() => {
        const div = outputRef.current;
        const scrollHeight = div.scrollHeight;
        const clientHeight = div.clientHeight;
        const scrollTop = div.scrollHeight;
        let distanceFromTop = div.scrollHeight - div.clientHeight;
        if (!scrolling) {   // checks to see if user is not scrolling
            scrollRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages])

    return (
        <div>
            <div className='scroll-arrow-container'>
                {scrolling && <div className="scroll-arrow" onClick={scrollDown}>↓</div>}
            </div>
            <div className="campaign-output-container" onScroll={() => handleScroll()} ref={outputRef} >
                <div className="campaign-output-text" >
                    {messages.map((message, index) => (
                        <div key={index} className='message'>
                            {message}
                        </div>
                    ))}
                    <div ref={scrollRef}></div>
                </div>
            </div>
        </div>
    );
}

export default CampaignOutput;