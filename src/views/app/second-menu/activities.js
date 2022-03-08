import React, { useState } from 'react';
import { Input, Row } from 'reactstrap';
// import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { NavLink } from 'react-router-dom';

const Activities = ({ match }) => {
  const [show, setShow] = useState({
    pageDropDown: false,
  });
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Activities" match={match} />
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
                          onClick={() =>
                            setShow((...prev) => {
                              return show.pageDropDown
                                ? { ...prev, pageDropDown: false }
                                : { ...prev, pageDropDown: true };
                            })
                          }
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          20
                        </button>
                        <div
                          className={
                            !show.pageDropDown
                              ? 'dropdown-menu dropdown-menu-right'
                              : 'dropdown-menu-right'
                          }
                        >
                          <NavLink className="dropdown-item" to="#">
                            10
                          </NavLink>
                          <NavLink className="dropdown-item active" to="#">
                            20
                          </NavLink>
                          <NavLink className="dropdown-item" to="#">
                            30
                          </NavLink>
                          <NavLink className="dropdown-item" to="#">
                            50
                          </NavLink>
                          <NavLink className="dropdown-item" to="#">
                            100
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Separator className="mb-5" />

              <div className="row">
                <div className="">
                  <ul>
                    <li>Image</li>
                  </ul>
                </div>
                <div className="col-12 list" data-check-all="checkAll">
                  <div className="card d-flex flex-row mb-3">
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                        <NavLink
                          className="list-item-heading mb-0 truncate w-40 w-xs-100"
                          to="Pages.Product.Detail.html"
                        >
                          Marble Cake
                        </NavLink>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                          Cakes
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                          02.04.2018
                        </p>
                        <div className="w-15 w-xs-100">
                          <span className="badge badge-pill badge-secondary">
                            ON HOLD
                          </span>
                        </div>
                      </div>

                      <div className="custom-control custom-checkbox mb-1 align-self-center pr-4">
                        <Input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </div>
                    </div>
                  </div>
                  <div className="card d-flex flex-row mb-3">
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                        <NavLink
                          className="list-item-heading mb-0 truncate w-40 w-xs-100"
                          to="Pages.Product.Detail.html"
                        >
                          Marble Cake
                        </NavLink>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                          Cakes
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                          02.04.2018
                        </p>
                        <div className="w-15 w-xs-100">
                          <span className="badge badge-pill badge-secondary">
                            ON HOLD
                          </span>
                        </div>
                      </div>

                      <div className="custom-control custom-checkbox mb-1 align-self-center pr-4">
                        <Input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </div>
                    </div>
                  </div>
                  <div className="card d-flex flex-row mb-3">
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                        <NavLink
                          className="list-item-heading mb-0 truncate w-40 w-xs-100"
                          to="Pages.Product.Detail.html"
                        >
                          Marble Cake
                        </NavLink>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                          Cakes
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                          02.04.2018
                        </p>
                        <div className="w-15 w-xs-100">
                          <span className="badge badge-pill badge-secondary">
                            ON HOLD
                          </span>
                        </div>
                      </div>

                      <div className="custom-control custom-checkbox mb-1 align-self-center pr-4">
                        <Input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </div>
                    </div>
                  </div>
                  <div className="card d-flex flex-row mb-3">
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                        <NavLink
                          className="list-item-heading mb-0 truncate w-40 w-xs-100"
                          to="Pages.Product.Detail.html"
                        >
                          Marble Cake
                        </NavLink>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                          Cakes
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                          02.04.2018
                        </p>
                        <div className="w-15 w-xs-100">
                          <span className="badge badge-pill badge-secondary">
                            ON HOLD
                          </span>
                        </div>
                      </div>

                      <div className="custom-control custom-checkbox mb-1 align-self-center pr-4">
                        <Input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <span className="custom-control-label">&nbsp;</span>
                      </div>
                    </div>
                  </div>
                  <div className="card d-flex flex-row mb-3">
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                        <NavLink
                          className="list-item-heading mb-0 truncate w-40 w-xs-100"
                          to="Pages.Product.Detail.html"
                        >
                          Marble Cake
                        </NavLink>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                          Cakes
                        </p>
                        <p className="mb-0 text-muted text-small w-15 w-xs-100">
                          02.04.2018
                        </p>
                        <div className="w-15 w-xs-100">
                          <span className="badge badge-pill badge-secondary">
                            ON HOLD
                          </span>
                        </div>
                      </div>

                      <div className="custom-control custom-checkbox mb-1 align-self-center pr-4">
                        <Input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        <span className="custom-control-label">&nbsp;</span>
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
export default Activities;
