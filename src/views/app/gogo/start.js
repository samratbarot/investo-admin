import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { NavLink } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar';
import Area from 'components/charts/Area';
import Card from './dashboard-card/Card';
import {areaChartData} from '../../../data/charts'
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
          <div className="container-fluid ">
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

                        <div className="dropdown-menu dropdown-menu-right mt-3">
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
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">Top stocks</h5>
                        <div className="dashboard-donut-chart chart">
                        this is chart
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Top customer</h5>

                        <div className="scroll dashboard-logs">
                          <table className="table table-sm table-borderless">
                            <tbody>
                              <div className="scroll" style={{height: '18rem'}}>
                                <PerfectScrollbar
                                  options={{
                                    suppressScrollX: true,
                                    wheelPropagation: false,
                                  }}
                                >
                                  <tr>
                                    <td>
                                      <span className="log-indicator border-theme-1 align-middle" />
                                    </td>
                                    <td>
                                      <span className="font-weight-medium">
                                        New user registiration
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <span className="text-muted">14:12</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span className="log-indicator border-theme-2 align-middle" />
                                    </td>
                                    <td>
                                      <span className="font-weight-medium">
                                        New sale: Soufflé
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <span className="text-muted">13:20</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span className="log-indicator border-danger align-middle" />
                                    </td>
                                    <td>
                                      <span className="font-weight-medium">
                                        14 products added
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <span className="text-muted">12:55</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span className="log-indicator border-theme-2 align-middle" />
                                    </td>
                                    <td>
                                      <span className="font-weight-medium">
                                        New sale: Napoleonshat
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <span className="text-muted">12:44</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span className="log-indicator border-theme-2 align-middle" />
                                    </td>
                                    <td>
                                      <span className="font-weight-medium">
                                        New sale: Cremeschnitte
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <span className="text-muted">12:30</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span className="log-indicator border-theme-2 align-middle" />
                                    </td>
                                    <td>
                                      <span className="font-weight-medium">
                                        New sale: Soufflé
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <span className="text-muted">10:40</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span className="log-indicator border-danger align-middle" />
                                    </td>
                                    <td>
                                      <span className="font-weight-medium">
                                        2 categories added
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <span className="text-muted">10:20</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span className="log-indicator border-theme-2 align-middle" />
                                    </td>
                                    <td>
                                      <span className="font-weight-medium">
                                        New sale: Chocolate Cake
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <span className="text-muted">09:28</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span className="log-indicator border-theme-2 align-middle" />
                                    </td>
                                    <td>
                                      <span className="font-weight-medium">
                                        New sale: Bebinca
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <span className="text-muted">09:25</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span className="log-indicator border-theme-2 align-middle" />
                                    </td>
                                    <td>
                                      <span className="font-weight-medium">
                                        New sale: Bebinca
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <span className="text-muted">09:20</span>
                                    </td>
                                  </tr>
                                  <tr>
                                    <td>
                                      <span className="log-indicator border-theme-2 align-middle" />
                                    </td>
                                    <td>
                                      <span className="font-weight-medium">
                                        New sale: Chocolate Cake
                                      </span>
                                    </td>
                                    <td className="text-right">
                                      <span className="text-muted">08:20</span>
                                    </td>
                                  </tr>
                                </PerfectScrollbar>
                              </div>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-4 mb-4">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Top activities</h5>

                        <div className="scroll dashboard-list-with-user">
                                <PerfectScrollbar
                                  options={{
                                    suppressScrollX: true,
                                    wheelPropagation: false,
                                  }}
                                >
                          <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                            <NavLink to="#">
                              <img
                                src="img/profiles/l-1.jpg"
                                alt="Mayra Sibley"
                                className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                              />
                            </NavLink>
                            <div className="pl-3">
                              <NavLink to="#">
                                <p className="font-weight-medium mb-0 ">
                                  Mayra Sibley
                                </p>
                                <p className="text-muted mb-0 text-small">
                                  09.08.2018 - 12:45
                                </p>
                              </NavLink>
                            </div>
                          </div>

                          <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                            <NavLink to="#">
                              <img
                                src="img/profiles/l-7.jpg"
                                alt="Mimi Carreira"
                                className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                              />
                            </NavLink>
                            <div className="pl-3">
                              <NavLink to="#">
                                <p className="font-weight-medium mb-0 ">
                                  Mimi Carreira
                                </p>
                                <p className="text-muted mb-0 text-small">
                                  05.08.2018 - 10:20
                                </p>
                              </NavLink>
                            </div>
                          </div>

                          <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                            <NavLink to="#">
                              <img
                                src="img/profiles/l-6.jpg"
                                alt="Philip Nelms"
                                className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                              />
                            </NavLink>
                            <div className="pl-3">
                              <NavLink to="#">
                                <p className="font-weight-medium mb-0 ">
                                  Philip Nelms
                                </p>
                                <p className="text-muted mb-0 text-small">
                                  05.08.2018 - 09:12
                                </p>
                              </NavLink>
                            </div>
                          </div>

                          <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                            <NavLink to="#">
                              <img
                                src="img/profiles/l-3.jpg"
                                alt="Terese Threadgill"
                                className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                              />
                            </NavLink>
                            <div className="pl-3">
                              <NavLink to="#">
                                <p className="font-weight-medium mb-0 ">
                                  Terese Threadgill
                                </p>
                                <p className="text-muted mb-0 text-small">
                                  01.08.2018 - 18:20
                                </p>
                              </NavLink>
                            </div>
                          </div>

                          <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                            <NavLink to="#">
                              <img
                                src="img/profiles/l-5.jpg"
                                alt="Kathryn Mengel"
                                className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                              />
                            </NavLink>
                            <div className="pl-3">
                              <NavLink to="#">
                                <p className="font-weight-medium mb-0 ">
                                  Kathryn Mengel
                                </p>
                                <p className="text-muted mb-0 text-small">
                                  27.07.2018 - 11:45
                                </p>
                              </NavLink>
                            </div>
                          </div>

                          <div className="d-flex flex-row mb-3 pb-3 border-bottom">
                            <NavLink to="#">
                              <img
                                src="img/profiles/l-4.jpg"
                                alt="Esperanza Lodge"
                                className="img-thumbnail border-0 rounded-circle list-thumbnail align-self-center xsmall"
                              />
                            </NavLink>
                            <div className="pl-3">
                              <NavLink to="#">
                                <p className="font-weight-medium mb-0 ">
                                  Esperanza Lodge
                                </p>
                                <p className="text-muted mb-0 text-small">
                                  24.07.2018 - 15:00
                                </p>
                              </NavLink>
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
