import React, { Fragment } from 'react';

function Contract() {
    return(
        <Fragment>
            <div className="panel">
                <div className="panel_logo">
                    <img width="60" src={require("assets/img/COQ.png").default} alt="" />
                    <p className="title1">Contract & Reward Pool</p>
                </div>
                <div className="panel_box">
                    <div className="address_box">
                        <div className="box">
                            <p className="box_1">Address</p>
                            <p className="box_2">0x0a199377F5489A285c70f03326b6D4BF769c10d3</p>
                        </div>
                        <div className="box">
                            <p className="box_1">Owner&nbsp;&nbsp;&nbsp;</p>
                            <p className="box_2">COQ</p>
                        </div>
                        <div className="box">
                            <p className="box_1">Balance</p>
                            <p className="box_2">266.089T COQ≈ $3,108,552.73</p>
                        </div>
                    </div>
                </div>
                
                <p className="title2">This is the bread and butter of COQ. A percentage of buys and sells go into the reward pool and are distributed to current token holders via claiming. Our mission is to grow the reward pool to a level that will be sustainable for a long period of time to provide stable, reliable, passive income for investors even during a bear market.</p>
            </div>
        </Fragment>
    )
}

export default Contract;