import React from 'react';
import loan from './asset/loan.png'
import legalService from './asset/legal service.png'
import rent from './asset/Rent.png'
function Service(props) {
    let [active, setActive] = React.useState(
        {
            homeLoan: false,
            homeRent: true,
            legalService: false,
        }
    )

    let homeLoan = () => {
        setActive(
            {
                homeLoan: true,
                homeRent: false,
                legalService: false,
            }
        )
    }
    let homeRent = () => {
        setActive(
            {
                homeLoan: false,
                homeRent: true,
                legalService: false,
            }
        )
    }
    let legal = () => {
        setActive(
            {
                homeLoan: false,
                homeRent: false,
                legalService: true,
            }
        )
    }
    return (
        <div className='serviceContainer'>
            <div className='container'>
                <h1 className='service'>Our Services</h1>
                <p>Simple refined and precise</p>
                <div className='border'>
                    <div
                    onClick={homeLoan}
                    className={active.homeLoan ? 'mainBox activeIcon' : "mainBox"}>
                        <div className='icon'>
                            <img src={loan} />
                        </div>
                        <h1>Home Loan</h1>
                        <p>
                            if you require a document notarized Walk-ins are welcome on a first come. first served basis.
                        </p>
                    </div>
                    <div
                    onClick={homeRent}
                    className={active.homeRent ? 'mainBox activeIcon' : "mainBox"}>
                        <div className='icon '>
                            <img src={rent} />
                        </div>
                        <h1>Home Rent</h1>
                        <p>
                            if you require a document notarized Walk-ins are welcome on a first come. first served basis.
                        </p>
                    </div>
                    <div
                    onClick={legal}
                    className={active.legalService ? 'mainBox activeIcon' : "mainBox"}>
                        <div className='icon'>
                            <img src={legalService} />
                        </div>
                        <h1>Legal Service</h1>
                        <p>
                            if you require a document notarized Walk-ins are welcome on a first come. first served basis.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Service;