import React, { Fragment } from 'react';
import {
    Button
  } from "reactstrap";

function Azbit() {
    return (
        <Fragment>
            <div className='pancake_section'>
                <p className='title1'>Azbit</p>
                <center><img width="250" height="90" src={require("assets/img/azbit.png").default} alt="" /></center>
                <p className='title2'>Tokenomics No Buy or Sell tax, only the exchange fee. Wallet Transfer Tax 10% on deposit to the exchange 22.5% on withdrawals from the exchange Pairings COQ/USDT Refer to Azbit Fees for up to date fees and limits</p>
                <div>
                    <center><Button className="" color="default">Trade USDT</Button></center>
                </div>
            </div>
        </Fragment>
    )
}

export default Azbit;