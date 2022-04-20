import React, { Fragment } from 'react';
import {
    Button
  } from "reactstrap";

function Lbank() {
    return (
        <Fragment>
            <div className='pancake_section'>
                <p className='title1'>Lbank</p>
                <center><img width="100" height="100" src={require("assets/img/lbank.png").default} alt="" /></center>
                <p className='title2'>Tokenomics 3.3% Buy & 3.3% Sell Tax Wallet Transfer Tax 10% on deposit to the exchange 10% + 800 Million COQ tokens on withdrawals from the exchange (min 800 Million Tokens per withdrawal) Pairings COQ/USDT Refer to LBank Fees for up to date fees and limits</p>
                <div>
                    <center><Button className="" color="default">Trade USDT</Button></center>
                </div>
            </div>
        </Fragment>
    )
}

export default Lbank;