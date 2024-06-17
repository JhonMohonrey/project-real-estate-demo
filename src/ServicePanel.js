import React from 'react';
import arrow from './asset/arrow98286.png'
import price from './asset/price.png'
import bath from './asset/bath.png'
import bed from './asset/bed.png'
import location from './asset/location.png'

function ServicePanel(props) {
    let [active, setActive] = React.useState(
        {
            Residential: true,
            Commercial: false,
            openLand: false,
        }
    )

    let residential = () => {
        setActive({
            Residential: true,
            Commercial: false,
            openLand: false,
        })
    }
    let Commercial = () => {
        setActive({
            Residential: false,
            Commercial: true,
            openLand: false,
        })
    }
    let openLand = () => {
        setActive({
            Residential: false,
            Commercial: false,
            openLand: true,
        })
    }

    return (
        <div className='servicePanel'>
            <div className='container'>
                <h1 className='title'>Choose & Search The Service you looking for</h1>

                <div className='topButtons'>
                    <div>
                        <button 
                        onClick={residential}
                        className={active.Residential ? "Btns active" : "Btns"}>Residential</button>
                        <button
                        onClick={Commercial}
                        className={active.Commercial ? "Btns active" : "Btns"}>Commercial</button>
                        <button
                        onClick={openLand}
                        className={active.openLand ? "Btns active" : "Btns"}>Open Land</button>
                    </div>
                </div>

                <div className='BottomButtons'>
                    <div className='options'>
                        <button className='Btns'>
                            <img src={location} />
                            Location
                        </button>

                        <div className='selectContainer Btns'>
                            <img src={bed} />
                            <select>
                                <option>Any Beds</option>
                                <option> 1 Bed</option>
                                <option> 2 Bed</option>
                                <option> 3 Bed</option>
                                <option> 4 Bed</option>
                                <option> 5 Bed</option>
                            </select>
                        </div>
                        <div className='selectContainer Btns'>
                            <img src={bath} />
                            <select>
                                <option>Any Baths</option>
                                <option> 1 Baths</option>
                                <option> 2 Baths</option>
                                <option> 3 Baths</option>
                                <option> 4 Baths</option>
                                <option> 5 Baths</option>
                            </select>
                        </div>
                        <div className='selectContainer Btns'>
                            <img src={price} />
                            <select>
                                <option>Any Price</option>
                                <option> $200 Price</option>
                                <option> $400 Price</option>
                                <option> $600 Price</option>
                                <option> $800 Price</option>
                                <option> $10,000 Price</option>
                            </select>
                        </div>

                        <button className='Btns arrow'>
                            Find Now
                            <img src={arrow} />
                        </button>
                    </div>

                    <div className='mobile_option'>

                    <div className='selectContainer Btns'>
                        <img src={bed} />
                        <select>
                            <option>Any Beds</option>
                            <option> 1 Bed</option>
                            <option> 2 Bed</option>
                            <option> 3 Bed</option>
                            <option> 4 Bed</option>
                            <option> 5 Bed</option>
                        </select>
                    </div>
                    <div className='selectContainer Btns'>
                        <img src={bath} />
                        <select>
                            <option>Any Baths</option>
                            <option> 1 Baths</option>
                            <option> 2 Baths</option>
                            <option> 3 Baths</option>
                            <option> 4 Baths</option>
                            <option> 5 Baths</option>
                        </select>
                    </div>

                    <div className='selectContainer Btns'>
                        <img src={price} />
                        <select>
                            <option>Any Price</option>
                            <option> $200 Price</option>
                            <option> $400 Price</option>
                            <option> $600 Price</option>
                            <option> $800 Price</option>
                            <option> $10,000 Price</option>
                        </select>
                    </div>

                    <div className='locationAndFind'>
                        <button className='Btns'>
                            <img src={location} />
                            Location
                        </button>

                        <button className='Btns arrow'>
                            Find Now
                            <img src={arrow} />
                        </button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ServicePanel;