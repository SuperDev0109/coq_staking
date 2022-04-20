import React from "react";

import '../assets/scss/custom/Buycoq.scss';
import PancakeComponent from './buycoq/Pancake';
import BitmartComponent from './buycoq/Bitmart';
import LbankComponent from './buycoq/Lbank';
import DecoinComponent from './buycoq/Decoin';
import AzbitComponent from './buycoq/Azbit';
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
  let logoComponent = <PancakeComponent />;

  switch(window.location.pathname) {
    case '/buyCOQ/pancake':
      logoComponent = <PancakeComponent />
      break;
    case '/buyCOQ/bitmart':
      logoComponent = <BitmartComponent />
      break;
    case '/buyCOQ/lbank':
      logoComponent = <LbankComponent />
      break;
    case '/buyCOQ/decoin':
      logoComponent = <DecoinComponent />
      break;
    case '/buyCOQ/azbit':
      logoComponent = <AzbitComponent />
      break;
  }

  return (
    <>
      <div className="content">
        <Row>
          <Col lg="12">
            <div className="buycoq_container">
              <div className="buycoq_section1">
                  <p className="title1">Buy COQ on Multiple Exchanges</p>
                  {/* <div className="panel">
                    <img width="60px" src={require("assets/img/COQ.png").default} alt="" />
                    <p className="title2">View the live price and tokenomics of all the exchanges COQ Token is available on.</p>
                  </div> */}
              </div>
            </div>
          </Col>
          
        </Row>
        
        <Row>
          <Col lg="12">
          <Card>
            <div className="buycoq_container buycoq_section2">
              <div className="left_part">
                <Link to="/buyCOQ/pancake">
                <div className={pathName === '/buyCOQ' ? 'panel selected': 'panel' && pathName === '/buyCOQ/pancake' ? 'panel selected': 'panel'}>
                    <div className="logo">
                      <center><img width="57" height="57" src={require("assets/img/pancake.png").default} alt="" /></center>
                    </div>
                    <div className="logo_detail">
                      <p className="title1">PancakeSwap</p>
                      <p className="title2">Full Tokenomics - Earn Daily BNB - Earn Reflections</p>
                    </div>
                </div>
                </Link>
                <Link to="/buyCOQ/bitmart">
                <div className={pathName === '/buyCOQ/bitmart' ? 'panel selected': 'panel'}>
                    <div className="logo">
                      <center><img width="140" height="75" src={require("assets/img/bitmart.png").default} alt="" /></center>
                    </div>
                    <div className="logo_detail">
                      <p className="title1">Bitmart</p>
                      <p className="title2">Tokenomics No Buy or Sell tax, only the exchange fee. Wallet Transfer Tax Deposits 19%</p>
                    </div>
                </div>
                </Link>
                <Link to="/buyCOQ/lbank">
                <div className={pathName === '/buyCOQ/lbank' ? 'panel selected': 'panel'}>
                    <div className="logo">
                      <center><img width="61" height="61" src={require("assets/img/lbank.png").default} alt="" /></center>
                    </div>
                    <div className="logo_detail">
                      <p className="title1">LBank</p>
                      <p className="title2">Tokenomics 3.3% Buy & 3.3% Sell Tax Wallet Transfer Tax 10% on deposit to the exchange 10%</p>
                    </div>
                </div>
                </Link>
                <Link to="/buyCOQ/decoin">
                <div className={pathName === '/buyCOQ/decoin' ? 'panel selected': 'panel'}>
                    <div className="logo">
                      <center><img width="140" height="45" src={require("assets/img/decoin.jpg").default} alt="" /></center>
                    </div>
                    <div className="logo_detail">
                      <p className="title1">Decoin</p>
                      <p className="title2">okenomics 3.15% Buy & 3.15% Sell Tax Wallet Transfer Tax 10% on deposit to the exchange 10%</p>
                    </div>
                </div>
                </Link>
                <Link to="/buyCOQ/azbit">
                <div className={pathName === '/buyCOQ/azbit' ? 'panel selected': 'panel'}>
                    <div className="logo">
                      <center><img width="130" height="40" src={require("assets/img/azbit.png").default} alt="" /></center>
                    </div>
                    <div className="logo_detail">
                      <p className="title1">AzBit</p>
                      <p className="title2">Tokenomics No Buy or Sell tax, only the exchange fee. Wallet Transfer Tax 10% on</p>
                    </div>
                </div>
                </Link>
              </div>
              <div className="right_part">
                <div className="panel">
                  {logoComponent}
                </div>
              </div>
            </div>
          </Card>
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
