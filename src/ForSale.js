import React from 'react';
import location from './asset/location.png'


function ForSale(props) {
    console.log("xx", props.title)
    return (
        <div className='forSaleContainer'>
            <img className='profile' src={props.img} />
            <p className='propertyTitle'>{props.title}</p>
            <div className='location'>
                <img src={location} />
                <p>{props.location}</p>

            </div>
            <p className='price'>${props.price}.00</p>
        </div>
    );
}

export default ForSale;