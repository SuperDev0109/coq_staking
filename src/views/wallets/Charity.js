import React, { Fragment } from 'react';

function Charity() {
    return(
        <Fragment>
            <div className="panel">
                <div className="panel_logo">
                    <img width="60" src={require("assets/img/COQ.png").default} alt="" />
                    <p className="title1">Charity Wallet</p>
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
                
                <p className="title2">COQ’s official charity is COQ Forward. The tokens in this wallet have been raised by collecting a small tax on buys, sells and transfers along with a tax where larger investors are taking higher amounts of BNB rewards along with donations from the community. COQ Forward helps provide essential aid around the world through a sustainable model by using the passive income this wallet generates.</p>
            </div>
        </Fragment>
    )
}

export default Charity;