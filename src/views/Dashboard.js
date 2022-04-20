import React, { useEffect } from "react";

import '../assets/scss/custom/Dashboard.scss';
import ReactApexChart from 'react-apexcharts';

import {
  Card,
  Row,
  Col,
} from "reactstrap";

import { getBnbPrice, getBitcoinPrice } from '../actions/price';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

function Dashboard({ getBnbPrice, getBitcoinPrice, price }) {

  useEffect(() => {
    getBnbPrice();
    getBitcoinPrice();
  }, [getBnbPrice, getBitcoinPrice]);

  return (
    <>
      <div className="content">
        <Row style={{ display: 'flex', justifyContent: 'stretch' }}>
          <Col lg="4" className="flex_item">
            <Card>
              <div className="dash_container dash_section1">
                <div>
                  <p className="title1">COQ Balance</p>
                  <div className="pair">
                    <p className="title2">0M COQ</p>
                    <img width="60px" src={require("assets/img/COQ.png").default} alt="" />
                  </div>
                </div>
                <div>
                  <p className="title3">≈ $0.00</p>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg="4" className="flex_item">
            <Card>
              <div className="dash_container dash_section1">
                <div>
                  <p className="title1">COQ Reinvested</p>
                  <div className="pair">
                    <p className="title2">0M COQ</p>
                    <img width="80px" src={require("assets/img/reinvest.png").default} alt="" />
                  </div>
                </div>
                <div>
                  <p className="title3">≈ $0.00</p>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg="4" className="flex_item">
            <Card>
              <div className="dash_container dash_section1">
                <div>
                  <p className="title1">BNB Rewarded</p>
                  <div className="pair">
                    <p className="title2">0M COQ</p>
                    <img width="80px" src={require("assets/img/bnb.png").default} alt="" />
                  </div>
                </div>
                <div>
                  <p className="title3">≈ $0.00</p>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        
        <Row className="res_chart">
          <Col lg="4" md="12">
            <Card>
                <div className="dash_container dash_section_tokenomics">
                  <p className="title1">$COQ Tokenomics</p>
                  <div>
                    <ReactApexChart options={ {
                        chart: {
                          type: 'donut',
                        },
                        labels: ["Liquidity Locked", "Presale", "Burned", "Reserve", "Development", "Marketing"],
                        legend: {
                          show: true,
                          position: 'right',
                        },
                        responsive: [
                          {
                            breakpoint: 1200,
                            options: {
                              chart: {
                                width: 600
                              },
                              legend: {
                                position: 'right'
                              }
                            },
                          },
                          {
                            breakpoint: 650,
                            options: {
                              chart: {
                                width: 500
                              },
                              legend: {
                                position: 'right'
                              }
                            },
                          },
                          {
                            breakpoint: 533,
                            options: {
                              chart: {
                                width: 450
                              },
                              legend: {
                                position: 'right'
                              }
                            },
                          },
                          {
                            breakpoint: 484,
                            options: {
                              chart: {
                                width: 400
                              },
                              legend: {
                                position: 'right'
                              }
                            },
                          },
                          {
                            breakpoint: 425,
                            options: {
                              chart: {
                                width: 350
                              },
                              legend: {
                                position: 'bottom'
                              }
                            },
                          }
                      ]
                      } } 
                      series={[10, 33, 32, 5, 14, 5]} 
                      type="donut" 
                    />
                  </div>
                  
                  <Row>
                    <Col md="6">
                      <div className="panel">
                        <p className="title2">Token Sticker</p>
                        <p className="title3">COQ</p>

                        <p className="title2">Blockchain</p>
                        <p className="title3">Binance Smart Chain</p>
                        
                        <p className="title2">ICO Token Price</p>
                        <p className="title3">1 COQ = 0.00003 BUSD</p>
                        
                        <p className="title2">Presale Cap</p>
                        <p className="title3">1,000,000 BUSD</p>
                        
                      </div>
                    </Col>
                    <Col md="6">
                      <div className="panel">
                        <p className="title2">Total Supply</p>
                        <p className="title3">1.5 Trillion</p>

                        <p className="title2">Circulating Supply</p>
                        <p className="title3">15 Billion</p>
                        
                        <p className="title2">PancakeSwap</p>
                        <p className="title3">Liquidity Locked</p>
                        
                        <p className="title2">Progressive Burning</p>
                        <p className="title3">99%</p>
                        
                      </div>
                    </Col>
                  </Row>
                  
                </div>
              </Card>
          </Col>
          <Col lg="8" md="12">
            <Row>
              <Col lg="12">
                <Card>
                  <div className="dash_container dash_section_contract">
                    <div className="panel">
                      <label className="title1">Contract</label><label className="label1">0x0128776fDEa30Ff9B70E4c8f3a6ba83023f7Ed62</label><br/>
                    </div>
                    <div className="panel">
                      <label className="title1">Launch date</label><label className="label2">November 11, 2021</label><br/>
                    </div>
                    <div className="panel">
                      <label className="title1">Market cap</label><label className="label2">$6,410,333.46</label><br/>
                    </div>
                    <div className="panel">
                      <label className="title1">Holders</label><label className="label2">24,381</label><br/>
                    </div>
                    <div className="panel">
                      <label className="title1">Telegram</label><label className="label1"><a href='https://t.me/COQinvestorgroup' target="_blank">https://t.me/COQinvestorgroup</a></label><br/>
                    </div>
                    <div className="panel">
                      <label className="title1">Website</label><label className="label1"><a href="https://COQtoken.net" target="_blank">https://COQtoken.net</a></label><br/>
                    </div>
                    <div className="panel">
                      <label className="title1">Chart</label><label className="label1"><a href="https://poocoin.app/tokens/0x0e9766df73973abcfedde700497c57110ee5c301" target="_blank">https://poocoin.app/tokens/0x0e9766df73973abcfedde700497c57110ee5c301</a></label><br/>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg="6">
                <Card>
                  <div className="dash_container dash_section_market1">
                    <p className="title1">COQ Markets Today</p>
                    <div className="panel">
                      <p className="title2">AzBit Price</p>
                      <p className="title3">-</p>

                      <p className="title2">Bitmart Price</p>
                      <p className="title3">$0.000000008335</p>
                      
                      <p className="title2">Decoin Price</p>
                      <p className="title3">$0.000000008299</p>
                      
                      <p className="title2">LBank Price</p>
                      <p className="title3">$0.000000007759</p>
                      
                      <p className="title2">PancakeSwap Price</p>
                      <p className="title3">$0.000000008768</p>
                    </div>
                  </div>
                </Card>
              </Col>
              <Col lg="6">
                <Card>
                <div className="dash_container dash_section_market1">
                    <p className="title1">Today's Market</p>
                    <div className="panel">
                      <p className="title2">BNB price</p>
                      <p className="title3">${parseFloat(price.bnb).toFixed(2)}</p>

                      <p className="title2">BNB 24h change</p>
                      <p className="title3">{price.bnb24}%</p>
                      
                      <p className="title2">Bitcoin price</p>
                      <p className="title3">${parseFloat(price.btc).toFixed(2)}</p>
                      
                      <p className="title2">Bitcoin 24h change</p>
                      <p className="title3">{price.btc24}%</p>
                      
                      <p className="title2">Market 24h volume</p>
                      <p className="title3">$192,117,724,756.71</p>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}

Dashboard.propTypes = {
  getBnbPrice: PropTypes.func.isRequired,
  getBitcoinPrice: PropTypes.func.isRequired,
  price: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  price: state.price,
});

export default connect(mapStateToProps, { getBnbPrice, getBitcoinPrice })(Dashboard);
