import React, { Fragment } from 'react';
import {
    Button
  } from "reactstrap";

function Pancake() {
    return (
        <Fragment>
            <div className='pancake_section'>
                <p className='title1'>PancakeSwap</p>
                <center><img width="120" height="120" src={require("assets/img/pancake.png").default} alt="" /></center>
                <p className='title2'>Full Tokenomics - Earn Daily BNB - Earn Reflections</p>
                <div>
                    <center><Button className="" color="default">Trade BNB</Button></center>
                </div>
            </div>
        </Fragment>
    )
}

export default Pancake;