import React from "react";

import '../assets/scss/custom/Wallets.scss';
import BurnComponent from './wallets/Burn';
import MarketingComponent from './wallets/Marketing';
import ContractComponent from './wallets/Contract';
import ReverseComponent from './wallets/Reverse';
import CharityComponent from './wallets/Charity';
import TeamComponent from './wallets/Team';
import PancakeswapComponent from './wallets/Pancakeswap';
import ReinvestmentComponent from './wallets/Reinvestment';

import { Link } from 'react-router-dom';

import {
  Card,
  Row,
  Col,
  Button
} from "reactstrap";

import { connect } from 'react-redux';

function Buycoq({ }) {
  const pathName = window.location.pathname;
  let addressComponent = <BurnComponent />;

  switch(window.location.pathname) {
    case '/wallets/burn':
        addressComponent = <BurnComponent />
        break;
    case '/wallets/marketing':
        addressComponent = <MarketingComponent />
        break;
    case '/wallets/contract':
        addressComponent = <ContractComponent />
        break;
    case '/wallets/reverse':
        addressComponent = <ReverseComponent />
        break;
    case '/wallets/charity':
        addressComponent = <CharityComponent />
        break;
    case '/wallets/team':
        addressComponent = <TeamComponent />
        break;
    case '/wallets/pancakeswap':
        addressComponent = <PancakeswapComponent />
        break;
    case '/wallets/reinvestment':
        addressComponent = <ReinvestmentComponent />
        break;
  }

  return (
    <>
      <div className="content">
        <div className="wallet_container">
            <div className="wallet_section1">
                <div>
                    <p className="title1">Our lists of COQ related wallets.</p>
                    {/* <div className="panel">
                        <img width="60px" src={require("assets/img/COQ.png").default} alt="" />
                        <p className="title2">Our lists of COQ related wallets.</p>
                    </div> */}
                </div>
                {/* <div>
                    <img width="600" height="160" src={require("assets/img/wallet_banner.png").default} alt="" />
                </div> */}
            </div>
        </div>
        
        <Row>
            <Col lg="12">
                <div className="wallet_section2">
                    <div className="left_part">
                        <Card>
                            <Link to="/wallets/burn">
                            <div className={pathName === '/wallets' ? 'panel selected': 'panel' && pathName === '/wallets/burn' ? 'panel selected': 'panel'}>
                                <p className="title1">Burn Address</p>
                                <p className="title2">0x000000...00dead</p>
                            </div>
                            </Link>
                        </Card>
                        <Card>
                            <Link to="/wallets/marketing">
                            <div className={pathName === '/wallets/marketing' ? 'panel selected': 'panel'}>
                                <p className="title1">Marketing Wallet</p>
                                <p className="title2">0x0a1993...9c10d3</p>
                            </div>
                            </Link>
                        </Card>
                        <Card>
                            <Link to="/wallets/contract">
                            <div className={pathName === '/wallets/contract' ? 'panel selected': 'panel'}>
                                <p className="title1">Contract & Reward Pool</p>
                                <p className="title2">0x0E9766...e5c301</p>
                            </div>
                            </Link>
                        </Card>
                        <Card>
                            <Link to="/wallets/reverse">
                            <div className={pathName === '/wallets/reverse' ? 'panel selected': 'panel'}>
                                <p className="title1">Reverse Wallet</p>
                                <p className="title2">0x1d5230...F83E83</p>
                            </div>
                            </Link>
                        </Card>
                        <Card>
                            <Link to="/wallets/charity">
                            <div className={pathName === '/wallets/charity' ? 'panel selected': 'panel'}>
                                <p className="title1">Charity Wallet</p>
                                <p className="title2">0x36CD27...C21886</p>
                            </div>
                            </Link>
                        </Card>
                        <Card>
                            <Link to="/wallets/team">
                            <div className={pathName === '/wallets/team' ? 'panel selected': 'panel'}>
                                <p className="title1">Team Wallet</p>
                                <p className="title2">0x8d159c...394a5c</p>
                            </div>
                            </Link>
                        </Card>
                        <Card>
                            <Link to="/wallets/pancakeswap">
                            <div className={pathName === '/wallets/pancakeswap' ? 'panel selected': 'panel'}>
                                <p className="title1">PancakeSwap Liquidity</p>
                                <p className="title2">0xad8b51...cbd174</p>
                            </div>
                            </Link>
                        </Card>
                        <Card>
                            <Link to="/wallets/reinvestment">
                            <div className={pathName === '/wallets/reinvestment' ? 'panel selected': 'panel'}>
                                <p className="title1">Reinvestment Wallet</p>
                                <p className="title2">0xdbfd28...d17007</p>
                            </div>
                            </Link>
                        </Card>
                    </div>
                    <div className="right_part">
                        <Card>
                            {addressComponent}
                        </Card>
                    </div>
                </div>
            </Col>
        </Row>
        

        
      </div>
    </>
  );
}

Buycoq.propTypes = {
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {  })(Buycoq);
