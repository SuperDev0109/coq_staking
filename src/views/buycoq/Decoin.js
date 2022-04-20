import React, { Fragment } from 'react';
import {
    Button
  } from "reactstrap";

function Decoin() {
    return (
        <Fragment>
            <div className='pancake_section'>
                <p className='title1'>Decoin</p>
                <center><img width="235" height="80" src={require("assets/img/decoin.jpg").default} alt="" /></center>
                <p className='title2'>Tokenomics 3.15% Buy & 3.15% Sell Tax Wallet Transfer Tax 10% on deposit to the exchange 10% + 950 Million COQ tokens on withdrawals from the exchange (min 2,008,000,000 Tokens per withdrawal) Pairings COQ/USDT Refer to Decoin Fees for up to date fees and limits</p>
                <div>
                    <center><Button className="" color="default">Trade USDT</Button></center>
                </div>
            </div>
        </Fragment>
    )
}

export default Decoin;