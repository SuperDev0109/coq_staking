import React, { useState, useEffect } from 'react'
// import Web3 from 'web3'
import DataCard from '../DataCard'
import LevelCard from '../LevelCard'
import './index.css'

const Withdraw = ({ contract, accounts, setOpen }) => {

    const [userInfo, setUserInfo] = useState({})
    const [level0, setLevel0] = useState(0)
    const [level1, setLevel1] = useState(0)
    const [level2, setLevel2] = useState(0)
    const [level3, setLevel3] = useState(0)
    const [level4, setLevel4] = useState(0)
    const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     (async () => {
    //         if (accounts[0]) {
    //             let userInfo = await contract.methods.userInfo(accounts[0]).call()
    //             console.log('changed', userInfo)
    //             setUserInfo(userInfo)
    //         }
    // })

    useEffect(() => {
        (async () => {
            if (accounts[0]) {
                let userInfo = await contract.methods.userInfo(accounts[0]).call()
                console.log('changed', userInfo)
                setUserInfo(userInfo)
            }
            let level0 = await contract.methods.ref_bonuses(0).call()
            let level1 = await contract.methods.ref_bonuses(1).call()
            let level2 = await contract.methods.ref_bonuses(2).call()
            let level3 = await contract.methods.ref_bonuses(3).call()
            let level4 = await contract.methods.ref_bonuses(4).call()
            setLevel0(level0)
            setLevel1(level1)
            setLevel2(level2)
            setLevel3(level3)
            setLevel4(level4)

            contract.events.NewDeposit({}).on('data', async function (event) {
                let userInfo = await contract.methods.userInfo(accounts[0]).call()
                setUserInfo(userInfo)
            })
                .on('error', console.error)

            contract.events.Withdraw({}).on('data', async function (event) {
                console.log(event.returnValues);
                if (accounts[0]) {
                    let userInfo = await contract.methods.userInfo(accounts[0]).call()
                    setUserInfo(userInfo)
                }
                setLoading(false)
                setOpen(true)
            })
                .on('error', console.error)
        })()
        return () => {
            // console.log('done')
        }
    }, [contract, accounts])

    const withdraw = async () => {
        if (accounts[0]) {
            setLoading(true)
            try {
                await contract.methods.withdraw().send({
                    from: accounts[0],
                })
            } catch (error) {
                setLoading(false)
            }
        } else {
            alert('Please connect your wallet')
        }
    }

    return (
        <div id="withdraw">
            <div style={{ textAlign: 'center' }}>
                <h2 className="withdraw-header">Withdraw</h2>
            </div>
            <div className="list-dashboard">
                <div className="withdraw-info">
                    <DataCard label="Withdrawable (Divs+Refs)" value={parseInt(userInfo.for_withdraw) || '0'} />
                    <DataCard label="Total Invested" value={parseInt(userInfo.total_invested || {}) || '0'} />
                    <DataCard label="Total Withdrawal" value={parseInt(userInfo.total_withdrawn || {}) || '0'} />
                    <DataCard label="Total Referral Reward" value={parseInt(userInfo.match_bonus || {}) || '0'} />
                </div>
                <div style={{ textAlign: 'center', marginTop: '-27px', position: 'relative' }}>
                    <span className={`btn-gradient ${(!userInfo.for_withdraw || userInfo.for_withdraw === '0') && 'disable'}`} onClick={withdraw}>{loading ? "In progress..." : "Withdraw"}</span>
                </div>
                <div className="invest-link" style={{ textAlign: 'center' }}>
                    <span>Your Referral Link: <b>You will get your ref link after investing</b></span>
                    <span className="copy">
                    </span>
                </div>
                <div className="list-footer">
                    <LevelCard level={1} reward={level0 / 10} referrals={0} />
                    <LevelCard level={2} reward={level1 / 10} referrals={0} />
                    <LevelCard level={3} reward={level2 / 10} referrals={0} />
                    <LevelCard level={4} reward={level3 / 10} referrals={0} />
                    <LevelCard level={5} reward={level4 / 10} referrals={0} />
                </div>
            </div>
        </div>
    )
}

export default Withdraw