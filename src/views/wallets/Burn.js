import React, { Fragment } from 'react';

function Burn() {
    return(
        <Fragment>
            <div className="panel">
                <div className="panel_logo">
                    <img width="60" src={require("assets/img/COQ.png").default} alt="" />
                    <p className="title1">Burn Address</p>
                </div>
                <div className="panel_box">
                    <div className="address_box">
                        <div className="box">
                            <p className="box_1">Address</p>                                                                          
                            <p className="box_2">0x000000000000000000000000000000000000dead</p>
                        </div>
                        <div className="box">
                            <p className="box_1">Owner&nbsp;&nbsp;&nbsp;</p>
                            <p className="box_2">Nobody</p>
                        </div>
                        <div className="box">
                            <p className="box_1">Balance</p>
                            <p className="box_2">266.089T COQ≈ $3,108,552.73</p>
                        </div>
                    </div>
                </div>
                
                <p className="title2">The tokens sent to this wallet are permanently removed from the circulating supply on purpose — as there is no access to the wallet where they are stored. This means as tokens are sent to the burn wallet, each holders share goes up as the circulating supply goes down resulting in a more rewards and reflections percentage for each holder.</p>
            </div>
        </Fragment>
    )
}

export default Burn;