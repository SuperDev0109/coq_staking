import React from 'react'
import './index.css'

const LevelCard = ({ level, referrals, reward }) => {
    return (
        <div className="item-footer">
            <h3 className={`level${level} title-level`}>
                {level} LVL
            </h3>
            <p className="info-level">
                <span id="referralsCountAtLevel1">{referrals}</span> referrals
            </p>
            <p className="info-level">
                {reward}% Referral Rewards
            </p>
        </div>
    )
}

export default LevelCard