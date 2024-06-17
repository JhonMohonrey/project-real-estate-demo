import React from 'react';
import ab from './asset/abstract-shape.png'
import star from './asset/star.png'
import LeftContent from './LeftContent';
import RightContent from './RightContent';

function TopPanel(props) {
    return (
        <div className='TopPanel'>
            <div className='container'>
                <div className='topContent'>
                    <div className=''>
                        <img src={ab} />
                    </div>
                    <div className='center'>
                        <h1 className='dream987'>
                            Your Dream Home Can Be Found In Real Estate
                        </h1>
                    </div>
                    <div className='rightAb'>
                    <img src={ab} />
                    </div>
                </div>

                <div className='bottomContent'>
                    <div>
                        <LeftContent />
                    </div>
                    <div className='rightBox'>
                        <RightContent />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopPanel;