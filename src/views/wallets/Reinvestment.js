import React, { Fragment } from 'react';

function Reinvestment() {
    return(
        <Fragment>
            <div className="panel">
                <div className="panel_logo">
                    <img width="60" src={require("assets/img/reinvest.png").default} alt="" />
                    <p className="title1">Reinvestment Wallet</p>
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
                
                <p className="title2">This wallet is configured to make the claiming reinvesting function possible. When you choose a percentage of your claim to be reinvested, the tokens are pulled from this wallet.</p>
            </div>
        </Fragment>
    )
}

export default Reinvestment;