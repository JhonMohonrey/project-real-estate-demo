import React from 'react';
import modernHouse from './asset/House/modern home with pool.png'
import arrow from './asset/House/curved-arrow.png'
import location from './asset/location.png'
import btnArrow from './asset/arrow98286.png'

function Popular(props) {
    return (
        <div className='popularContainer'>
            <div className='container'>
                <h1>Popular</h1>
                <p>Buy your dream home</p>

                <div className='bottomItem'>
                    <div className='leftSide'>
                        <img src={modernHouse} />
                    </div>

                    <div className='rightSide'>
                        <img className='topArrow' src={arrow} />
                        <h1>Salt Lake City area.</h1>
                        <div className='location'>
                            <img src={location} />
                            <p className='south'>South Salt Lake. United States</p>
                        </div>
                        <h1 className='price'>
                            $700.00 <strike>$800.00</strike>
                        </h1>
                        <p className='details'>Avail 7.49% Interest if you transfer your existing Home Loan from another Bank / Financial institute to us. Get a new lease of life</p>

                        <button>Buy Now <img src={btnArrow} /></button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Popular;