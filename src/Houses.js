import React from 'react';
import ForSale from './ForSale';
import data from './HouseData'

function Houses(props) {

    let display = data.map(data => {
        console.log(data)
        return   <ForSale
        key={data.key}
        title={data.title}
        location={data.location}
        price={data.price}
        img={data.img}
        />
    })
    return (
        <div className='housesPanel'>
            <div className='container'>
                <div className='displayContainer'>
                    {display}
                </div>
            </div>
        </div>
    );
}

export default Houses;