import React, { Fragment } from 'react';

function Pancakeswap() {
    return(
        <Fragment>
            <div className="panel">
                <div className="panel_logo">
                    <img width="60" src={require("assets/img/pancake.png").default} alt="" />
                    <p className="title1">PancakeSwap Liquidity</p>
                </div>
                <div className="panel_box">
                    <div className="address_box">
                        <div className="box">
                            <p className="box_1">Address</p>
                            <p className="box_2">0x0a199377F5489A285c70f03326b6D4BF769c10d3</p>
                        </div>
                        <div className="box">
                            <p className="box_1">Owner&nbsp;&nbsp;&nbsp;</p>
                            <p className="box_2">PancakeSwap</p>
                        </div>
                        <div className="box">
                            <p className="box_1">Balance</p>
                            <p className="box_2">266.089T COQ≈ $3,108,552.73</p>
                        </div>
                    </div>
                </div>
                
                <p className="title2">COQ is paired with BNB to provide liquidity for investors to feel confident that their investment is safe and can become liquid when the occasion presents itself. Of course, we encourage COQing for the long haul because the daily passive income gives you more buying power in the real world.</p>
            </div>
        </Fragment>
    )
}

export default Pancakeswap;