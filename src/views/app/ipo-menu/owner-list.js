import React, { useState } from 'react';
import { Row } from 'reactstrap';
// import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { NavLink } from 'react-router-dom';
import apu from '../../../assets/img/article/apu.png';

const OwnerList = ({ match }) => {
  const [toggle, setToggle] = useState({
   
    pages: { display: 'none' },
  
  });
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Owners list" match={match} />
       
          <Separator className="d-none" />
        </Colxx>
      </Row>
      <Row>
            <Colxx xxs="4 d-flex pb-3">
                <img className='w-5' src={apu} alt="owner-logo" />
                <p className='mt-5 ml-4'>ADL - Адуун Чулуун ХХК</p>
            </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <section>
            <div className="container-fluid disable-text-selection">
              <div className="row">
                <div className="col-12">
                  <div className="mb-2">
                    <NavLink
                      className="btn pt-0 pl-0 d-inline-block d-md-none"
                      data-toggle="collapse"
                      to="#displayOptions"
                      role="button"
                      aria-expanded="true"
                      aria-controls="displayOptions"
                    >
                      Display Options
                      <i className="simple-icon-arrow-down align-middle" />
                    </NavLink>
                    <div className=" dont-collapse-sm" id="displayOptions">
                      
                      <div className="d-block d-md-inline-block">
                     
                        <div className="search-sm calendar-sm d-inline-block float-md-left mr-1 mb-1 align-top">
                          <form>
                            <input
                              className="form-control datepicker"
                              placeholder="Search by day"
                            />
                          </form>
                        </div>
                      </div>
                      <div className="float-md-right">
                        <span className="text-muted text-small">
                          Displaying 1-10 of 210 items{' '}
                        </span>
                        <button
                          className="btn btn-outline-dark btn-xs dropdown-toggle"
                          type="button"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          onClick={() =>
                            setToggle((prev) => {
                              return {
                                ...prev,
                                pages:
                                  toggle.pages.display === 'none'
                                    ? { display: 'block' }
                                    : { display: 'none' },
                              };
                            })
                          }

                        >
                          20
                        </button>
                        <div className="dropdown-menu dropdown-menu-right" style={toggle.pages}>
                          <NavLink className="dropdown-item" to="/a">
                            10
                          </NavLink>
                          <NavLink className="dropdown-item" to="/b">
                            20
                          </NavLink>
                          <NavLink className="dropdown-item" to="/c">
                            30
                          </NavLink>
                          <NavLink className="dropdown-item" to="/d">
                            50
                          </NavLink>
                          <NavLink className="dropdown-item" to="/e">
                            100
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
              <div className="w-90 py-3">
                  <ul className="d-flex justify-content-between">
                    <li className="li">Stock name</li>
                    <li className="li">Customer name</li>
                    <li className="li">Uaser name</li>
                    <li className="li">Price</li>
                    <li className="li">Quantity</li>
                    <li className="li">fee</li>
                    <li className='li'>Total Price</li>
                 
                  </ul>
                </div>
                <div className="col-12 list" data-check-all="checkAll">
                  <div className="card d-flex flex-row mb-3">
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                      <p className="mb-0 text-muted ADL w-xs-100 ml-2 w-15">
                      ADL                    
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                          bat Gerel
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        gerel@mail.com</p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        1000₮
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        15
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        15%
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        15.000₮
                        </p>
                      </div>

                     
                    </div>
                  </div>
                  <div className="card d-flex flex-row mb-3">
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                      <p className="mb-0 text-muted ADL w-xs-100 ml-2 w-15">
                      ADL                    
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                          bat Gerel
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        gerel@mail.com</p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        1000₮
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        15
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        15%
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        15.000₮
                        </p>
                      </div>

                     
                    </div>
                  </div>
                  <div className="card d-flex flex-row mb-3">
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                      <p className="mb-0 text-muted ADL w-xs-100 ml-2 w-15">
                      ADL                    
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                          bat Gerel
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        gerel@mail.com</p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        1000₮
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        15
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        15%
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        15.000₮
                        </p>
                      </div>

                     
                    </div>
                  </div>
                  <div className="card d-flex flex-row mb-3">
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                      <p className="mb-0 text-muted ADL w-xs-100 ml-2 w-15">
                      ADL                    
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                          bat Gerel
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        gerel@mail.com</p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        1000₮
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        15
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        15%
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        15.000₮
                        </p>
                      </div>

                     
                    </div>
                  </div>
                  <div className="card d-flex flex-row mb-3">
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                      <p className="mb-0 text-muted ADL w-xs-100 ml-2 w-15">
                      ADL                    
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                          bat Gerel
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        gerel@mail.com</p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        1000₮
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        15
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        15%
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                        15.000₮
                        </p>
                      </div>

                     
                    </div>
                  </div>
                  <nav className="mt-4 mb-3">
                    <ul className="pagination justify-content-center mb-0">
                      <li className="page-item ">
                        <NavLink className="page-link first" to="#">
                          <i className="simple-icon-control-start" />
                        </NavLink>
                      </li>
                      <li className="page-item ">
                        <NavLink className="page-link prev" to="#">
                          <i className="simple-icon-arrow-left" />
                        </NavLink>
                      </li>
                      <li className="page-item active">
                        <NavLink className="page-link" to="#">
                          1
                        </NavLink>
                      </li>
                      <li className="page-item ">
                        <NavLink className="page-link" to="#">
                          2
                        </NavLink>
                      </li>
                      <li className="page-item">
                        <NavLink className="page-link" to="#">
                          3
                        </NavLink>
                      </li>
                      <li className="page-item ">
                        <NavLink
                          className="page-link next"
                          to="#"
                          aria-label="Next"
                        >
                          <i className="simple-icon-arrow-right" />
                        </NavLink>
                      </li>
                      <li className="page-item ">
                        <NavLink className="page-link last" to="#">
                          <i className="simple-icon-control-end" />
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </section>
        </Colxx>
      </Row>
    </>
  );
};
export default OwnerList;
