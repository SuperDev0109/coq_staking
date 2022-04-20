import React from 'react'
import Web3 from 'web3'
import './index.css'

const toFixedMine = (value) => {
    let result = value.toString().split('.').map((d, idx) => idx === 1 ? d.substring(0, 4) : d).join('.')
    return parseFloat(result);
} 

const DataCard = ({ label, value }) => {
    return (
        <div className="datacard">
            <div className="datacard-content">
                <h5 className="title-block-item">
                    {label}
                </h5>
                <p className="info-item">
                    <span id="toWithdraw">{toFixedMine(Web3.utils.fromWei(value.toString(), 'ether'))}&nbsp;</span>
                    <span className="pink-text">BNB</span>
                </p>
            </div>
        </div>
    )
}

export default DataCard