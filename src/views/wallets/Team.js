import React, { Fragment } from 'react';

function Team() {
    return(
        <Fragment>
            <div className="panel">
                <div className="panel_logo">
                    <img width="60" src={require("assets/img/COQ.png").default} alt="" />
                    <p className="title1">Team Wallet</p>
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
                
                <p className="title2">A growing project requires a top notch and growing team. A small percentage of buys, sells and transfers are sent to this team wallet in order to afford the staff that is necessary to run the project and grow your investment. Every single person on the team is 100% dedicated to growing the project and we all have stellar diamond hands.</p>
            </div>
        </Fragment>
    )
}

export default Team;