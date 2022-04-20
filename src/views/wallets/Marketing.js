import React, { Fragment } from 'react';

function Marketing() {
    return(
        <Fragment>
            <div className="panel">
                <div className="panel_logo">
                    <img width="60" src={require("assets/img/COQ.png").default} alt="" />
                    <p className="title1">Marketing Wallet</p>
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
                
                <p className="title2">A small percentage of buys, sells and transfers go to the marketing wallet to be used to run promotional activity to help increase awareness, engagement and new followers to further grow the project. See the overview page for the latest tokenomics including the % that goes to the marketing wallet.</p>
            </div>
        </Fragment>
    )
}

export default Marketing;