import React, { Fragment } from 'react';
import {
    Button
  } from "reactstrap";

function Bitmart() {
    return (
        <Fragment>
            <div className='pancake_section'>
                <p className='title1'>Bitmart</p>
                <center><img width="250" height="150" src={require("assets/img/bitmart.png").default} alt="" /></center>
                <p className='title2'>Tokenomics No Buy or Sell tax, only the exchange fee. Wallet Transfer Tax Deposits 19% - Withdraws 10% The 19% deposit tax is made up of two lots of taxes. 10% COQ tax (standard tokenomics) and then another 10% Bitmart tax. From the Bitmart tax portion, 4% is paid on the exchange to all holders as reflections while the 6% is payed into the BNB Pool. Bitmart Fees 100,000,000 COQ on all Withdrawals. 0.25% fee on buys and sells Bitmart minimum Withdrawal amount = 1,000,000,000 COQ Pairings COQ/USDT Refer to BitMart Fees for up to date fees and limits</p>
                <div>
                    <center><Button className="" color="default">Trade USDT</Button></center>
                </div>
            </div>
        </Fragment>
    )
}

export default Bitmart;