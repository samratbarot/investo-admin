import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import {NavLink} from 'react-router-dom'
import Card from './dashboard-card/Card'

const Start = ({ match }) => (
  <>
    <Row >
      <Colxx xxs="12">
        <Breadcrumb heading="menu.dashboard" match={match} />
        <Separator className="mb-0" />
      </Colxx>
    </Row>
    <Row className="">
      <Colxx xxs="12" className="p-2">
        <section className=''>
          <div className="container-fluid ">
             <div className="row">
             <div className="col-lg-12 col-xl-12">
                <div className="icon-cards-row ">
                  <div className="glide dashboard-numbers ">
                    <div className="glide__track" data-glide-el="track">
                      <ul className="glide__slides justify-content-between">
                       <Card/>
                       <Card/>
                       <Card/>
                       <Card/>
                       <Card/>
                       <Card/>
                       <Card/>
                       
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
                          <i className="simple-icon-refresh"/>
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

                      {/* <div className="card-body">
                        <h5 className="card-title">Sales</h5>
                        <div className="dashboard-line-chart chart">
                          <canvas id="salesChart"/>
                        </div>
                      </div> */}
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
