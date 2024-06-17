import React from 'react';
import star from './asset/star.png'
import img1 from './asset/1.jpeg'
import img2 from './asset/2.jpeg'
import img3 from './asset/3.jpeg'
import house1 from './asset/house1.png'

function LeftContent(props) {
    return (
        <div className='leftContainer'>
            <div className='topContainer'>
                <div className='mainLeft'>
                    <div className='topRight'>
                        <p>Overall Rating</p>
                        <div className='line'></div>
                        <img src={star} />
                        <p>4.5</p>
                    </div>
                    <div className='bottomRight'>
                        <div className='profilePic'>
                            <img className='firstImg' src={img1} />
                            <img src={img2} />
                            <img src={img3} />
                        </div>
                        <p className='hundred'>100+</p>
                        <p>Expert team members</p>
                    </div>
                </div>
                <div className='rightData'>
                    <button>
                        <p>100k</p>
                        <p>Property</p>
                    </button>
                </div>
            </div>

            <div className='middleContainer'>
                <div className='leftSide'>
                    <img src={house1} />
                </div>
                <div className='RightSide'>
                    <div className='zo'>
                        <p>01</p>
                        <div className='line'></div>
                    </div>
                    <h3>
                        There are several benefits
                        to home staging
                    </h3>
                    <div className='circleContainer'>
                        <div className='circle active'></div>
                        <div className='circle'></div>
                        <div className='circle'></div>
                    </div>
                </div>
            </div>
            <div className='bottomContainer'>
                <div>
                    <p>Own Traction Value</p>
                    <h1>$2.5M+</h1>
                </div>
                <div>
                    <p>Historical Rate of Return</p>
                    <h1>40%</h1>
                </div>
                <div>
                    <p>Net Distribution to investors</p>
                    <h1>$25M+</h1>
                </div>

            </div>
        </div>
    );
}

export default LeftContent;