import React, { useState, useEffect, Component } from "react";

import '../assets/scss/custom/Staking.scss';

import {
  Card,
  Row,
  Col,
  Button
} from "reactstrap";
import Deposit from './Deposit/index';
import Withdraw from "./Withdraw/index";

import { connect } from 'react-redux';
import getWeb3 from "../getWeb3";
import Web3 from 'web3'
import { abi, contractAddress } from "../Constants";

class Staking extends Component {

    state = {
        invested: 0,
        bonus: 0,
        web3: null,
        accounts: null,
        contract: null,
        open: false,
    };
    componentDidMount = async () => {
        try {
          window.addEventListener("scroll", this.handleScroll);
          // Get network provider and web3 instance.
    
          const web3 = await getWeb3();
    
          // Use web3 to get the user's accounts.
          const accounts = await web3.eth.getAccounts();
          console.log(accounts);
    
          // Get the contract instance.
          const instance = new web3.eth.Contract(
            abi,
            contractAddress,
          );
    
          // Set web3, accounts, and contract to the state, and then proceed with an
          // example of interacting with the contract's methods.
          this.setState({ web3, accounts, contract: instance });
        } catch (error) {
          // Catch any errors for any of the above operations.
          const provider = new Web3.providers.HttpProvider(
            'https://data-seed-prebsc-1-s1.binance.org:8545/'
          );
          const web3 = new Web3(provider);
    
    
          // Use web3 to get the user's accounts.
          const accounts = await web3.eth.getAccounts();
    
          // Get the contract instance.
          const instance = new web3.eth.Contract(
            abi,
            contractAddress,
          );
    
          console.log('instance2', instance)
    
          // Set web3, accounts, and contract to the state, and then proceed with an
          // example of interacting with the contract's methods.
          this.setState({ web3, accounts, contract: instance });
        }
    };

  onDayClick(type){
    switch(type){
        case 'day5':
            document.getElementById('day5_panel').setAttribute('class', 'dayPanel selected');
            document.getElementById('day8_panel').setAttribute('class', 'dayPanel');
            document.getElementById('day14_panel').setAttribute('class', 'dayPanel');
            document.getElementById('day5').style.display = 'block';
            document.getElementById('day8').style.display = 'none';
            document.getElementById('day14').style.display = 'none';
            break;
        case 'day8':
            document.getElementById('day5_panel').setAttribute('class', 'dayPanel');
            document.getElementById('day8_panel').setAttribute('class', 'dayPanel selected');
            document.getElementById('day14_panel').setAttribute('class', 'dayPanel');
            document.getElementById('day5').style.display = 'none';
            document.getElementById('day8').style.display = 'block';
            document.getElementById('day14').style.display = 'none';
            break;
        case 'day14':
            document.getElementById('day5_panel').setAttribute('class', 'dayPanel');
            document.getElementById('day8_panel').setAttribute('class', 'dayPanel');
            document.getElementById('day14_panel').setAttribute('class', 'dayPanel selected');
            document.getElementById('day5').style.display = 'none';
            document.getElementById('day8').style.display = 'none';
            document.getElementById('day14').style.display = 'block';
            break;
    }
  }

  render() {
      return (
        <>
          <div className="content">
              <div className="staking_content">
                <Row>
                    <Col lg="12">
                        <div className="staking_container">
                        <div className="staking_section1">
                            <p className="title1">&nbsp;</p>
                        </div>
                        </div>
                    </Col>
                </Row>
                    
                <Row>
                    <Col lg="12">
                        <Card>
                            <div className="staking_container staking_section2">
                                <div className="left_panel">
                                    <p className="title1">Your Available Balance</p>
                                    <p className="title2">0.00 COQ</p>
                                    <p className="title3">$ 0.00</p>
                                </div>
                                <div className="right_panel">
                                    <Button className="btnDefault" color="default" style={{ borderRadius: '69px' }}> Withdraw</Button>
                                    <Button className="btnDefault" color="default" style={{ borderRadius: '69px' }}> Reinvest</Button>
                                    <p className="title1">+5% Bonus on reinvest</p>
                                    <p className="title1">Withdraw or Reinvest only once a day</p>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
    
                <Row>
                    <Col lg="6">
                        <Card>
                            <div className="staking_container staking_section3">
                                <div className="panel">
                                    <p className="title1">Total Deposit</p>
                                    <p className="title2">0.00 COQ</p>
                                </div>
                                <div>
                                    <img width="80px" src={require("assets/img/COQ1.png").default} alt="" />
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col lg="6">
                        <Card>
                            <div className="staking_container staking_section3">
                                <div className="panel">
                                    <p className="title1">Total Withdraw</p>
                                    <p className="title2">0.00 COQ</p>
                                </div>
                                <div>
                                    <img width="80px" src={require("assets/img/COQ1.png").default} alt="" />
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
    
                <Row>
                    <Col lg="12">
                        <Card>
                            <Deposit
                                contract={this.state.contract}
                                accounts={this.state.accounts}
                                web3={this.state.web3}
                                setOpen={(isOpen) => this.setState({ open: isOpen })}
                            />
                            {/* <Withdraw
                                contract={this.state.contract}
                                setOpen={(isOpen) => this.setState({ open: isOpen })}
                                accounts={this.state.accounts}
                            /> */}
                        </Card>
                    </Col>
                </Row>
              </div>
          </div>
        </>
      );
  }
}

Staking.propTypes = {
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {  })(Staking);