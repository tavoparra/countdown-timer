import React from 'react';

const CountdownTimerBlock = ({ number, label }) => {
    return (
        <div className="Block">
            <div className="Number">{ number }</div> 
            <div className="Label">{ label }</div> 
        </div>
    );
}

export default CountdownTimerBlock;
