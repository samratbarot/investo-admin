import React, { useState } from 'react';
import { Input, Row } from 'reactstrap';
// import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { NavLink } from 'react-router-dom';
import { adminRoot } from 'constants/defaultValues';

const AccountList = ({ match }) => {
  const [toggle, setToggle] = useState({
    orderBy: { display: 'none' },
    pages: { display: 'none' },
    checkAll: { display: 'none' },
  });
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="IPO list" match={match} />
          <div className="top-right-button-container">
            <NavLink to={`${adminRoot}/ipo/add-article`}>
              <button
                type="button"
                className="btn btn-primary btn-lg top-right-button mr-1"
              >
                ADD ARTICLE
              </button>
            </NavLink>
            <NavLink  to={`${adminRoot}/ipo/add-ipo`}>
              <button
               
                type="button"            
                className="btn btn-primary btn-lg top-right-button mr-1"
              >
                ADD IPO
              </button>
            </NavLink>
            <div className="btn-group">
              <div className="btn btn-primary btn-lg pl-4 pr-0 check-button">
                <div className="custom-control custom-checkbox mb-0 d-inline-block">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="checkAll"
                  />
                  {/* <span className="custom-control-label">&nbsp;</span> */}
                </div>
              </div>
              <button
                type="button"
                className="btn btn-lg btn-primary dropdown-toggle dropdown-toggle-split"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                onClick={() =>
                  setToggle((prev) => {
                    return {
                      ...prev,
                      checkAll:
                        toggle.checkAll.display === 'none'
                          ? { display: 'block' }
                          : { display: 'none' },
                    };
                  })
                }
              >
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <div
                className="dropdown-menu dropdown-menu-right"
                style={toggle.checkAll}
              >
                <NavLink className="dropdown-item" to="/abc">
                  Action
                </NavLink>
                <NavLink className="dropdown-item" to="/cds">
                  Another action
                </NavLink>
              </div>
            </div>
          </div>
          <Separator className="mb-5" />
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
                      <span className="mr-3 mb-2 d-inline-block float-md-left">
                        <NavLink to="#" className="mr-2 view-icon active">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 19 19"
                          >
                            <path
                              className="view-icon-svg"
                              d="M17.5,3H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"
                            />
                            <path
                              className="view-icon-svg"
                              d="M17.5,10H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"
                            />
                            <path
                              className="view-icon-svg"
                              d="M17.5,17H.5a.5.5,0,0,1,0-1h17a.5.5,0,0,1,0,1Z"
                            />
                          </svg>
                        </NavLink>
                        <NavLink to="#" className="mr-2 view-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 19 19"
                          >
                            <path
                              className="view-icon-svg"
                              d="M17.5,3H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"
                            />
                            <path
                              className="view-icon-svg"
                              d="M3,2V3H1V2H3m.12-1H.88A.87.87,0,0,0,0,1.88V3.12A.87.87,0,0,0,.88,4H3.12A.87.87,0,0,0,4,3.12V1.88A.87.87,0,0,0,3.12,1Z"
                            />
                            <path
                              className="view-icon-svg"
                              d="M3,9v1H1V9H3m.12-1H.88A.87.87,0,0,0,0,8.88v1.24A.87.87,0,0,0,.88,11H3.12A.87.87,0,0,0,4,10.12V8.88A.87.87,0,0,0,3.12,8Z"
                            />
                            <path
                              className="view-icon-svg"
                              d="M3,16v1H1V16H3m.12-1H.88a.87.87,0,0,0-.88.88v1.24A.87.87,0,0,0,.88,18H3.12A.87.87,0,0,0,4,17.12V15.88A.87.87,0,0,0,3.12,15Z"
                            />
                            <path
                              className="view-icon-svg"
                              d="M17.5,10H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"
                            />
                            <path
                              className="view-icon-svg"
                              d="M17.5,17H6.5a.5.5,0,0,1,0-1h11a.5.5,0,0,1,0,1Z"
                            />
                          </svg>
                        </NavLink>
                        <NavLink to="#" className="mr-2 view-icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 19 19"
                          >
                            <path
                              className="view-icon-svg"
                              d="M7,2V8H1V2H7m.12-1H.88A.87.87,0,0,0,0,1.88V8.12A.87.87,0,0,0,.88,9H7.12A.87.87,0,0,0,8,8.12V1.88A.87.87,0,0,0,7.12,1Z"
                            />
                            <path
                              className="view-icon-svg"
                              d="M17,2V8H11V2h6m.12-1H10.88a.87.87,0,0,0-.88.88V8.12a.87.87,0,0,0,.88.88h6.24A.87.87,0,0,0,18,8.12V1.88A.87.87,0,0,0,17.12,1Z"
                            />
                            <path
                              className="view-icon-svg"
                              d="M7,12v6H1V12H7m.12-1H.88a.87.87,0,0,0-.88.88v6.24A.87.87,0,0,0,.88,19H7.12A.87.87,0,0,0,8,18.12V11.88A.87.87,0,0,0,7.12,11Z"
                            />
                            <path
                              className="view-icon-svg"
                              d="M17,12v6H11V12h6m.12-1H10.88a.87.87,0,0,0-.88.88v6.24a.87.87,0,0,0,.88.88h6.24a.87.87,0,0,0,.88-.88V11.88a.87.87,0,0,0-.88-.88Z"
                            />
                          </svg>
                        </NavLink>
                      </span>
                      <div className="d-block d-md-inline-block">
                        <div className="btn-group float-md-left mr-1 mb-1">
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
                                  orderBy:
                                    toggle.orderBy.display === 'none'
                                      ? { display: 'block' }
                                      : { display: 'none' },
                                };
                              })
                            }
                          >
                            Order By
                          </button>
                          <div className="dropdown-menu" style={toggle.orderBy}>
                            <NavLink className="dropdown-item" to="/action">
                              Action
                            </NavLink>
                            <NavLink
                              className="dropdown-item"
                              to="/another-action"
                            >
                              Another action
                            </NavLink>
                          </div>
                        </div>
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
                        <div
                          className="dropdown-menu dropdown-menu-right"
                          style={toggle.pages}
                        >
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
                    <li className="li">Image</li>
                    <li className="li">Stock name</li>
                    <li className="li">Stock full name</li>
                    <li className="li">Start date</li>
                    <li className="li">End date</li>
                    <li className="li">Limit</li>
                    <li className="li">Status</li>
                  </ul>
                </div>
                <div className="col-12 list" data-check-all="checkAll">
                  <div className="card d-flex flex-row mb-3">
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                        <p className="mb-0 text-small w-15 u">U</p>
                        <NavLink
                          className="list-item-heading mb-0 truncate w-20"
                          to={`${adminRoot}/ipo/edit-ipo`}
                        >
                          <span className="ml-2">ADL</span>
                        </NavLink>

                        <p className="mb-0 text-muted text-small w-20">
                          Адуун Чулуун
                        </p>
                        <p className="mb-0 text-muted text-small w-20">
                          2020/05/20 20:00
                        </p>
                        <p className="mb-0 text-muted text-small w-15">
                          2020/05/20 20:00
                        </p>
                        <p className="mb-0 text-muted text-small w-15">1500</p>

                        <div className="w-15">
                          <span className="badge badge-pill badge-secondary verified w-80 ">
                            ACTIVE
                          </span>
                        </div>
                      </div>

                      <div className="custom-control custom-checkbox mb-1 align-self-center pr-2">
                        <Input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        {/* <span className="custom-control-label">&nbsp;</span> */}
                      </div>
                    </div>
                  </div>
                  <div className="card d-flex flex-row mb-3">
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                        <p className="mb-0 text-small w-15 u">U</p>
                        <NavLink
                          className="list-item-heading mb-0 truncate w-20"
                          to="/customer-menu/profile"
                        >
                          <span className="ml-2">ADL</span>
                        </NavLink>

                        <p className="mb-0 text-muted text-small w-20">
                          Адуун Чулуун
                        </p>
                        <p className="mb-0 text-muted text-small w-20">
                          2020/05/20 20:00
                        </p>
                        <p className="mb-0 text-muted text-small w-15">
                          2020/05/20 20:00
                        </p>
                        <p className="mb-0 text-muted text-small w-15">1500</p>

                        <div className="w-15">
                          <span className="badge badge-pill badge-secondary delete w-80">
                            CLOSED
                          </span>
                        </div>
                      </div>

                      <div className="custom-control custom-checkbox mb-1 align-self-center pr-2">
                        <Input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        {/* <span className="custom-control-label">&nbsp;</span> */}
                      </div>
                    </div>
                  </div>
                  <div className="card d-flex flex-row mb-3">
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                        <p className="mb-0 text-small w-15 u">U</p>
                        <NavLink
                          className="list-item-heading mb-0 truncate w-20"
                          to="/customer-menu/profile"
                        >
                          <span className="ml-2">ADL</span>
                        </NavLink>

                        <p className="mb-0 text-muted text-small w-20">
                          Адуун Чулуун
                        </p>
                        <p className="mb-0 text-muted text-small w-20">
                          2020/05/20 20:00
                        </p>
                        <p className="mb-0 text-muted text-small w-15">
                          2020/05/20 20:00
                        </p>
                        <p className="mb-0 text-muted text-small w-15">1500</p>

                        <div className="w-15">
                          <span className="badge badge-pill badge-secondary verified w-80">
                            ACTIVE
                          </span>
                        </div>
                      </div>

                      <div className="custom-control custom-checkbox mb-1 align-self-center pr-2">
                        <Input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        {/* <span className="custom-control-label">&nbsp;</span> */}
                      </div>
                    </div>
                  </div>
                  <div className="card d-flex flex-row mb-3">
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                        <p className="mb-0 text-small w-15 u">U</p>
                        <NavLink
                          className="list-item-heading mb-0 truncate w-20"
                          to="/customer-menu/profile"
                        >
                          <span className="ml-2">ADL</span>
                        </NavLink>

                        <p className="mb-0 text-muted text-small w-20">
                          Адуун Чулуун
                        </p>
                        <p className="mb-0 text-muted text-small w-20">
                          2020/05/20 20:00
                        </p>
                        <p className="mb-0 text-muted text-small w-15">
                          2020/05/20 20:00
                        </p>
                        <p className="mb-0 text-muted text-small w-15">1500</p>

                        <div className="w-15">
                          <span className="badge badge-pill badge-secondary verified w-80">
                            ACTIVE
                          </span>
                        </div>
                      </div>

                      <div className="custom-control custom-checkbox mb-1 align-self-center pr-2">
                        <Input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        {/* <span className="custom-control-label">&nbsp;</span> */}
                      </div>
                    </div>
                  </div>
                  <div className="card d-flex flex-row mb-3">
                    <div className="d-flex flex-grow-1 min-width-zero">
                      <div className="card-body align-self-center d-flex flex-column flex-md-row justify-content-between min-width-zero align-items-md-center">
                        <p className="mb-0 text-small w-15 u">U</p>
                        <NavLink
                          className="list-item-heading mb-0 truncate w-20"
                          to="/customer-menu/profile"
                        >
                          <span className="ml-2">ADL</span>
                        </NavLink>

                        <p className="mb-0 text-muted text-small w-20">
                          Адуун Чулуун
                        </p>
                        <p className="mb-0 text-muted text-small w-20">
                          2020/05/20 20:00
                        </p>
                        <p className="mb-0 text-muted text-small w-15">
                          2020/05/20 20:00
                        </p>
                        <p className="mb-0 text-muted text-small w-15">1500</p>

                        <div className="w-15">
                          <span className="badge badge-pill badge-secondary delete w-80">
                            CLOSED
                          </span>
                        </div>
                      </div>

                      <div className="custom-control custom-checkbox mb-1 align-self-center pr-2">
                        <Input
                          type="checkbox"
                          className="custom-control-input"
                        />
                        {/* <span className="custom-control-label">&nbsp;</span> */}
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
export default AccountList;
