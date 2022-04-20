import React from "react";

import '../assets/scss/custom/Reinvestments.scss';

import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button
} from "reactstrap";

import ReactApexChart from 'react-apexcharts';
import { connect } from 'react-redux';

function Reinvestments({ }) {

const chartBtn = () => {
    console.log('chart');
    document.getElementById('chartBtn').setAttribute('class','btn btn-default');
    document.getElementById('listBtn').setAttribute('class', 'btn btn-info');
    document.getElementById('reinvest_chart').style.display = 'block';
    document.getElementById('reinvest_list').style.display = 'none';
}

const listBtn = () => {
    console.log('list');
    document.getElementById('chartBtn').setAttribute('class', 'btn btn-info');
    document.getElementById('listBtn').setAttribute('class', 'btn btn-default');
    document.getElementById('reinvest_chart').style.display = 'none';
    document.getElementById('reinvest_list').style.display = 'block';
}
    
  return (
    <>
      <div className="content">
        <Row style={{ display: 'flex', justifyContent: 'stretch' }}>
          <Col lg="6" className="flex_item">
            <Card>
              <div className="reinvest_container reinvest_section1">
                <div>
                  <p className="title1">COQ Reinvested</p>
                  <div className="pair">
                    <p className="title2">0M COQ</p>
                    <img width="60px" src={require("assets/img/reinvest.png").default} alt="" />
                  </div>
                </div>
                <div>
                  <p className="title3">≈ $0.00</p>
                </div>
              </div>
            </Card>
          </Col>
          <Col lg="6" className="flex_item">
            <Card>
              <div className="reinvest_container reinvest_section2">
                <div>
                  <p className="title1">COQ 101 - Reinvestments</p>
                  <div className="pair">
                    <img width="60px" src={require("assets/img/COQ.png").default} alt="" />
                    <p className="title2">Every time someone buys or sells, 2% of the amount of COQ bought or sold will be distributed amongst all COQers. That means free staking! :)</p>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
        </Row>
        <Row>
            <Col lg="12">
                <div className="reinvest_section3">
                    <div style={{ flex: 1 }}>
                        <Button className="" style={{ width: '100%' }} color="default" id="chartBtn" onClick={() => chartBtn()}>
                            Chart
                        </Button><br />
                        <Button className="" style={{ width: '100%' }} color="info" id="listBtn" onClick={() => listBtn()}>
                            List
                        </Button>
                    </div>
                    <div id="reinvest_chart" style={{ flex: 9, display: 'block' }}>
                        <ReactApexChart options={
                            {
                                chart: {
                                    height: 600,
                                    type: 'line',
                                    stacked: false,
                                },
                                stroke: {
                                    width: [0,  5],
                                    curve: 'smooth'
                                },
                                plotOptions: {
                                    bar: {
                                      columnWidth: '50%'
                                    }
                                },

                                responsive: [
                                    {
                                        breakpoint: 1600,
                                        options: {
                                          chart: {
                                            height: 500
                                          },
                                        },
                                    },
                                    {
                                      breakpoint: 1200,
                                      options: {
                                        chart: {
                                          height: 350
                                        },
                                      },
                                    },
                                    {
                                        breakpoint: 700,
                                        options: {
                                          chart: {
                                            height: 300
                                          },
                                        },
                                      },
                                ],
                                
                                fill: {
                                    opacity: [0.85,  1],
                                    gradient: {
                                    inverseColors: false,
                                    shade: 'light',
                                    type: "vertical",
                                    opacityFrom: 0.85,
                                    opacityTo: 0.55,
                                    stops: [0, 100, 100, 100]
                                    }
                                },
                                labels: ['01/01/2003', '02/01/2003', '03/01/2003', '04/01/2003', '05/01/2003', '06/01/2003', '07/01/2003',
                                    '08/01/2003', '09/01/2003', '10/01/2003', '11/01/2003'
                                ],
                                markers: {
                                    size: 0
                                },
                                xaxis: {
                                    type: 'datetime'
                                },
                                yaxis: {
                                    title: {
                                    text: 'Points',
                                    },
                                    min: 0
                                },
                                tooltip: {
                                    shared: true,
                                    intersect: false,
                                    y: {
                                    formatter: function (y) {
                                        if (typeof y !== "undefined") {
                                        return y.toFixed(0) + " points";
                                        }
                                        return y;
                                
                                    }
                                    }
                                }
                            }
                                
                        } series={
                            [
                              {
                                name: 'BNB Rewarded Column',
                                type: 'column',
                                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
                              }, 
                              {
                                name: 'BNB Rewarded Line',
                                type: 'line',
                                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30]
                              }
                            ]
                        } 
                        type="line" 
                        height={600} 
                    />
                    </div>

                    <div id="reinvest_list" style={{ flex: '9', display: 'none' }}>
                        <Card>
                            <div className="reinvest_section4">
                                <Row>
                                    <Col md="12">
                                        {/* <CardHeader>
                                            <CardTitle tag="h4">Simple Table</CardTitle>
                                        </CardHeader> */}
                                        <CardBody>
                                            <Table className="tablesorter" responsive>
                                                <thead className="text-primary">
                                                    <tr>
                                                        <th>Block</th>
                                                        <th>Transaction</th>
                                                        <th>Amount</th>
                                                        <th className="text-center">Reinvested at</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td>141969</td>
                                                        <td>
                                                            0x907...89a7c
                                                        </td>
                                                        <td>999</td>
                                                        <td className="text-center">$36,738</td>
                                                    </tr>
                                                    <tr>
                                                        <td>141969</td>
                                                        <td>
                                                            0x907...89a7c
                                                        </td>
                                                        <td>999</td>
                                                        <td className="text-center">$36,738</td>
                                                    </tr>
                                                    <tr>
                                                        <td>141969</td>
                                                        <td>
                                                            0x907...89a7c
                                                        </td>
                                                        <td>999</td>
                                                        <td className="text-center">$36,738</td>
                                                    </tr>
                                                    <tr>
                                                        <td>141969</td>
                                                        <td>
                                                            0x907...89a7c
                                                        </td>
                                                        <td>999</td>
                                                        <td className="text-center">$36,738</td>
                                                    </tr>
                                                </tbody>
                                            </Table>
                                        </CardBody>
                                    </Col>
                                </Row>
                            </div>
                        </Card>
                    </div>
                </div>
            </Col>
        </Row>
      </div>
    </>
  );
}

Reinvestments.propTypes = {
};

const mapStateToProps = state => ({

});

export default connect(mapStateToProps, {  })(Reinvestments);
