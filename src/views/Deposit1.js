import React, { useEffect, useState } from 'react'
import RangeSlider from 'react-bootstrap-range-slider';
import Web3 from 'web3'
import { _upline } from '../Constants'

const Deposit = ({ contract, accounts, web3, setOpen }) => {
    const [period, setPeriod] = useState(18);
    const [value, setValue] = useState(1);
    const [tarifs, setTarifs] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        (async () => {
            console.log('contract', contract)
            if(!contract) return;
            console.log('Account', accounts);
            const tarifs = await contract.methods.tarifs(period).call();
            setTarifs(tarifs.percent)
        })()
        return () => {
            console.log('done');
        }
    }, [contract, period])

    const deposit = async () => {
        console.log('accounts', accounts)
        if (accounts[0]) {
            setLoading(true);
            try {
                await contract.methods.deposit(period, _upline).send({
                    from: accounts[0],
                    value: Web3.utils.toWei(value.toString(), 'ether')
                }, (err, result) => {
                    contract.events.NewDeposit({}).on('data', async function (event) {
                        setLoading(false)
                        setOpen(true)
                    })
                        .on('error', console.error)
                })
            } catch (error) {
                console.log('error', error)
                setLoading(false);
            }
        } else {
            alert('Please connect your wallet')
        }
    }

    const setMax = async () => {
        if (accounts[0]) {
            let max = await web3.eth.getBalance(accounts[0])
            setValue(Web3.utils.fromWei(max.toString(), 'ether'))
        } else {
            alert('Please connect your wallet')
        }
    }

    return (
        <div id="deposit">
            <div style={{ textAlign: 'center' }}>
                <h2 className="deposit-header">CALCULATE PROFIT</h2>
            </div>
            <div className="container-calculate-info">
                <div className="deposit-info">
                    <div className="period">
                        <h6 className="label">Deposit Period (days):</h6>
                        <RangeSlider
                            value={period}
                            max={30}
                            min={5}
                            onChange={changeEvent => setPeriod(changeEvent.target.value)}
                            variant="info"
                            tooltip='on'
                            tooltipPlacement='top'
                        />
                        <div className="range">
                            <span>5</span>
                            <span>30</span>
                        </div>
                    </div>
                    <div className="amount">
                        <h6 className="label">Deposit Amount:</h6>
                        <div className="amount-input">
                            <input type="number" className="input" value={value} onChange={(e) => setValue(e.target.value)} />
                            <span className="pink-text" style={{ cursor: 'pointer' }} onClick={setMax}>Max</span>
                        </div>
                    </div>
                </div>
                <div className="deposit-result">
                    <span>Daily ROI: <b>{(tarifs / period).toFixed(2)}%</b></span>
                    <span>Total Profit: <b>{tarifs}%</b></span>
                    <span>In {period} days you will earn: <b className="pink-text">{tarifs / 100 * value} BNB</b></span>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <span className={`btn-gradient ${!accounts && 'disable'}`} onClick={deposit}>{loading ? 'Investing...' : 'Invest'}</span>
                </div>
            </div>
        </div>
    )
}

export default Deposit