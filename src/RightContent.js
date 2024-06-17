import React from 'react';
import house2 from './asset/house 2.png'

function RightContent(props) {
    return (
        <div className='rightContainer'>
            <div className='line'></div>
            <h1>One of the most exclusive locations</h1>
            <p>Let's prepared for buy your dream home</p>
            <img src={house2} />
        </div>
    );
}

export default RightContent;