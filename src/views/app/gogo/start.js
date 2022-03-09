import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Area from 'components/charts/Area';
import Card from './dashboard-card/Card';
import { areaChartData } from '../../../data/charts';
import Rectangle from '../../../assets/img/Dashboard/Rectangle.png';
// import Chart from './dashboard-card/Chart';

const Start = ({ match }) => (
  <>
    <Row>
      <Colxx xxs="12">
        <Breadcrumb heading="menu.dashboard" match={match} />
        <Separator className="mb-0" />
      </Colxx>
    </Row>
    <Row className="">
      <Colxx xxs="12" className="p-2">
        <section className="">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12 col-xl-12">
                <div className="icon-cards-row ">
                  <div className="glide dashboard-numbers ">
                    <div className="glide__track" data-glide-el="track">
                      <ul className="glide__slides">
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-12 mb-4">
                    <div className="card">
                      <div className="position-absolute card-top-buttons">
                        <button
                          className="btn btn-header-light icon-button"
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <i className="simple-icon-refresh" />
                        </button>

                        <div className="dropdown-menu dropdown-menu-right mt-2">
                          <NavLink className="dropdown-item" to="#">
                            Sales
                          </NavLink>
                          <NavLink className="dropdown-item" to="#">
                            Orders
                          </NavLink>
                          <NavLink className="dropdown-item" to="#">
                            Refunds
                          </NavLink>
                        </div>
                      </div>

                      <div className="card-body">
                        <h5 className="card-title">Sales</h5>
                        <div className="dashboard-line-chart chart">
                          <Area data={areaChartData} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 col-lg-4 mb-4">
                  <div className="card h-100 p-4">
                      <div className="card-body">
                        <h5 className="card-title">Top stocks</h5>

                        <div className="scroll dashboard-logs">
                          <table className="table table-sm table-borderless">
                            <tbody>
                              <div className="scroll" style={{ height: '18rem' }}>
                                <PerfectScrollbar
                                  options={{
                                    suppressScrollX: true,
                                    wheelPropagation: false,
                                  }}
                                >
                                  <div className='row'>
                                    <div className='col-lg-3 col-2'>
                                      <img src={Rectangle} alt="Rectangle" />
                                    </div>
                                    <div className='col-lg-3 col-3'>
                                      <p className='mb-0 p1'>Apu</p>
                                      <p className='mb-0 p2'>Хувьцаа</p>
                                    </div>
                                    <div className='col-lg-6 col-7'>
                                      <p className='mb-0 float-right one'>1</p>
                                    </div>
                                  </div>

                                  <div className='row mt-2'>
                                    <div className='col-lg-3 col-2'>
                                      <img src={Rectangle} alt="Rectangle" />
                                    </div>
                                    <div className='col-lg-3 col-3'>
                                      <p className='mb-0 p1'>Apu</p>
                                      <p className='mb-0 p2'>Хувьцаа</p>
                                    </div>
                                    <div className='col-lg-6 col-7'>
                                      <p className='mb-0 float-right one'>1</p>
                                    </div>
                                  </div>

                                  <div className='row mt-2'>
                                    <div className='col-lg-3 col-2'>
                                      <img src={Rectangle} alt="Rectangle" />
                                    </div>
                                    <div className='col-lg-3 col-3'>
                                      <p className='mb-0 p1'>Apu</p>
                                      <p className='mb-0 p2'>Хувьцаа</p>
                                    </div>
                                    <div className='col-lg-6 col-7'>
                                      <p className='mb-0 float-right one'>1</p>
                                    </div>
                                  </div>

                                  <div className='row mt-2'>
                                    <div className='col-lg-3 col-2'>
                                      <img src={Rectangle} alt="Rectangle" />
                                    </div>
                                    <div className='col-lg-3 col-3'>
                                      <p className='mb-0 p1'>Apu</p>
                                      <p className='mb-0 p2'>Хувьцаа</p>
                                    </div>
                                    <div className='col-lg-6 col-7'>
                                      <p className='mb-0 float-right one'>1</p>
                                    </div>
                                  </div>

                                  <div className='row mt-2'>
                                    <div className='col-lg-3 col-2'>
                                      <img src={Rectangle} alt="Rectangle" />
                                    </div>
                                    <div className='col-lg-3 col-3'>
                                      <p className='mb-0 p1'>Apu</p>
                                      <p className='mb-0 p2'>Хувьцаа</p>
                                    </div>
                                    <div className='col-lg-6 col-7'>
                                      <p className='mb-0 float-right one'>1</p>
                                    </div>
                                  </div>
                                </PerfectScrollbar>
                              </div>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card h-100 p-4">
                      <div className="card-body">
                        <h5 className="card-title">Top customer</h5>

                        <div className="scroll dashboard-logs">
                          <table className="table table-sm table-borderless">
                            <tbody>
                              <div className="scroll" style={{ height: '18rem' }}>
                                <PerfectScrollbar
                                  options={{
                                    suppressScrollX: true,
                                    wheelPropagation: false,
                                  }}
                                >
                                  <div className='row'>
                                    <div className='col-lg-3 col-2'>
                                      <img src={Rectangle} alt="Rectangle" />
                                    </div>
                                    <div className='col-lg-3 col-3'>
                                      <p className='mb-0 p1'>Apu</p>
                                      <p className='mb-0 p2'>Хувьцаа</p>
                                    </div>
                                    <div className='col-lg-6 col-7'>
                                      <p className='mb-0 float-right one'>1</p>
                                    </div>
                                  </div>

                                  <div className='row mt-2'>
                                    <div className='col-lg-3 col-2'>
                                      <img src={Rectangle} alt="Rectangle" />
                                    </div>
                                    <div className='col-lg-3 col-3'>
                                      <p className='mb-0 p1'>Apu</p>
                                      <p className='mb-0 p2'>Хувьцаа</p>
                                    </div>
                                    <div className='col-lg-6 col-7'>
                                      <p className='mb-0 float-right one'>1</p>
                                    </div>
                                  </div>

                                  <div className='row mt-2'>
                                    <div className='col-lg-3 col-2'>
                                      <img src={Rectangle} alt="Rectangle" />
                                    </div>
                                    <div className='col-lg-3 col-3'>
                                      <p className='mb-0 p1'>Apu</p>
                                      <p className='mb-0 p2'>Хувьцаа</p>
                                    </div>
                                    <div className='col-lg-6 col-7'>
                                      <p className='mb-0 float-right one'>1</p>
                                    </div>
                                  </div>

                                  <div className='row mt-2'>
                                    <div className='col-lg-3 col-2'>
                                      <img src={Rectangle} alt="Rectangle" />
                                    </div>
                                    <div className='col-lg-3 col-3'>
                                      <p className='mb-0 p1'>Apu</p>
                                      <p className='mb-0 p2'>Хувьцаа</p>
                                    </div>
                                    <div className='col-lg-6 col-7'>
                                      <p className='mb-0 float-right one'>1</p>
                                    </div>
                                  </div>

                                  <div className='row mt-2'>
                                    <div className='col-lg-3 col-2'>
                                      <img src={Rectangle} alt="Rectangle" />
                                    </div>
                                    <div className='col-lg-3 col-3'>
                                      <p className='mb-0 p1'>Apu</p>
                                      <p className='mb-0 p2'>Хувьцаа</p>
                                    </div>
                                    <div className='col-lg-6 col-7'>
                                      <p className='mb-0 float-right one'>1</p>
                                    </div>
                                  </div>
                                </PerfectScrollbar>
                              </div>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card h-100 p-4">
                      <div className="card-body">
                        <h5 className="card-title">Top activities</h5>

                        <div className="scroll dashboard-list-with-user">
                          <PerfectScrollbar
                            options={{
                              suppressScrollX: true,
                              wheelPropagation: false,
                            }}
                          >
                            <div className='row'>
                              <div className='col-lg-3 col-2'>
                                <img src={Rectangle} alt="Rectangle" />
                              </div>
                              <div className='col-lg-3 col-3'>
                                <p className='mb-0 p1'>Apu</p>
                                <p className='mb-0 p2'>Хувьцаа</p>
                              </div>
                              <div className='col-lg-6 col-7'>
                                <p className='mb-0 float-right one'>1</p>
                              </div>
                            </div>

                            <div className='row mt-2'>
                              <div className='col-lg-3 col-2'>
                                <img src={Rectangle} alt="Rectangle" />
                              </div>
                              <div className='col-lg-3 col-3'>
                                <p className='mb-0 p1'>Apu</p>
                                <p className='mb-0 p2'>Хувьцаа</p>
                              </div>
                              <div className='col-lg-6 col-7'>
                                <p className='mb-0 float-right one'>1</p>
                              </div>
                            </div>

                            <div className='row mt-2'>
                              <div className='col-lg-3 col-2'>
                                <img src={Rectangle} alt="Rectangle" />
                              </div>
                              <div className='col-lg-3 col-3'>
                                <p className='mb-0 p1'>Apu</p>
                                <p className='mb-0 p2'>Хувьцаа</p>
                              </div>
                              <div className='col-lg-6 col-7'>
                                <p className='mb-0 float-right one'>1</p>
                              </div>
                            </div>

                            <div className='row mt-2'>
                              <div className='col-lg-3 col-2'>
                                <img src={Rectangle} alt="Rectangle" />
                              </div>
                              <div className='col-lg-3 col-3'>
                                <p className='mb-0 p1'>Apu</p>
                                <p className='mb-0 p2'>Хувьцаа</p>
                              </div>
                              <div className='col-lg-6 col-7'>
                                <p className='mb-0 float-right one'>1</p>
                              </div>
                            </div>

                            <div className='row mt-2'>
                              <div className='col-lg-3 col-2'>
                                <img src={Rectangle} alt="Rectangle" />
                              </div>
                              <div className='col-lg-3 col-3'>
                                <p className='mb-0 p1'>Apu</p>
                                <p className='mb-0 p2'>Хувьцаа</p>
                              </div>
                              <div className='col-lg-6 col-7'>
                                <p className='mb-0 float-right one'>1</p>
                              </div>
                            </div>
                          </PerfectScrollbar>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Colxx>
    </Row>
  </>
);
export default Start;
