import React from 'react';
// import React, { useState } from 'react';
import { Row } from 'reactstrap';
// import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import Rectangle from '../../../assets/img/Dashboard/Rectangle.png';
// import { NavLink } from 'react-router-dom';
// import apu from '../../../assets/img/article/apu.png';


const Market = ({ match }) => {
    return (
        <>
            <Row>
                <Colxx xxs="12">
                    <Breadcrumb heading="Market" match={match} />
                    <Separator className="mb-0" />
                </Colxx>
            </Row>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4 col-12' />
                    <div className='col-lg-8 col-sm-8 col-md-8 col-12 p-0'>
                        <div className='col-lg-12'>
                            <div className='bredcrumb2 d-flex justify-content-between mt-5'>
                                <div className='w-100'>
                                    <h5>TRD/MNT</h5>
                                    <p className='mb-0'>Digital Exchange Coin</p>
                                </div>
                                <div className='v-line' />
                                <div className='ml-3 w-100'>
                                    <h5 className='text-danger'>0.575</h5>
                                    <p className='mb-0'>Адуун Чулуун ХК</p>
                                </div>
                                <div className='w-100'>
                                    <p className='mb-0'>Адуун Чулуун ХК</p>
                                    <h5 className=' '>0.575</h5>
                                </div>
                                <div className='w-100'>
                                    <p className='mb-0'>Адуун Чулуун ХК</p>
                                    <h5 className=''>0.575</h5>
                                </div>
                                <div className='w-100'>
                                    <p className='mb-0'>Адуун(TRD)</p>
                                    <h5 className=''>0.575</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='row py-5'>
                    <div className='col-lg-4 col-sm-4 col-md-4 col-12'>
                        <div className='box-shadow-one'>
                            <div className="search-container mt-3">
                                <form action="#">
                                    <input type="text" placeholder="Search.." className='search-box' name="search" />
                                    <button type="submit"><i className="fa fa-search" /></button>
                                </form>
                            </div>
                            <div className='row'>
                                <div className='col-lg-4 col-4'>
                                    <h5 className='ml-3 mt-2'>Xocnon</h5>
                                    <div className='d-flex mt-2'>
                                        <img src={Rectangle} alt="img" className='w-15 h-25 ml-3' />
                                        <p className='ml-2'>TRD/MNT</p>
                                    </div>
                                    <div className='d-flex mt-2'>
                                        <img src={Rectangle} alt="img" className='w-15 h-25 ml-3' />
                                        <p className='ml-2'>TRD/MNT</p>
                                    </div>
                                    <div className='d-flex mt-2'>
                                        <img src={Rectangle} alt="img" className='w-15 h-25 ml-3' />
                                        <p className='ml-2'>TRD/MNT</p>
                                    </div>
                                    <div className='d-flex mt-2'>
                                        <img src={Rectangle} alt="img" className='w-15 h-25 ml-3' />
                                        <p className='ml-2'>TRD/MNT</p>
                                    </div>
                                    <div className='d-flex mt-2'>
                                        <img src={Rectangle} alt="img" className='w-15 h-25 ml-3' />
                                        <p className='ml-2'>TRD/MNT</p>
                                    </div>
                                    <div className='d-flex mt-2'>
                                        <img src={Rectangle} alt="img" className='w-15 h-25 ml-3' />
                                        <p className='ml-2'>TRD/MNT</p>
                                    </div>
                                </div>

                                <div className='col-lg-4 col-4'>
                                    <h5 className='ml-3 mt-2'>Xahw</h5>
                                    <div className='mt-2'>
                                        <p className='ml-3'>0.575</p>
                                        <p className='ml-3'>0.575</p>
                                        <p className='ml-3'>0.575</p>
                                        <p className='ml-3'>0.575</p>
                                        <p className='ml-3'>0.575</p>
                                        <p className='ml-3'>0.575</p>
                                        <p className='ml-3'>0.575</p>
                                    </div>
                                </div>

                                <div className='col-lg-4 col-4'>
                                    <h5 className='ml-3 mt-2'>Хувьцаа</h5>
                                    <div className='mt-2'>
                                        <p className='text-success ml-5'>1.41</p>
                                        <p className='text-danger ml-5'>-1.79</p>
                                        <p className='text-success ml-5'>8.41</p>
                                        <p className='text-success ml-5'>3.91</p>
                                        <p className='text-success ml-5'>3.17</p>
                                        <p className='text-success ml-5'>1.41</p>
                                        <p className='text-success ml-5'>3.41</p>
                                    </div>
                                </div>
                            </div>

                            <div className='box-shadow-two mt-3'>
                                <div className='row pb-5'>
                                    <div className='col-lg-4 col-4'>
                                        <h5 className='ml-2 mt-2'>Xocnon</h5>
                                        <div className='mt-2'>
                                            <p className='ml-2 text-danger'>0.575</p>
                                        </div>
                                        <div className='mt-2'>
                                            <p className='ml-2 text-success'>0.573</p>
                                        </div>
                                        <div className='mt-2'>
                                            <p className='ml-2 text-danger'>0.590</p>
                                        </div>
                                        <div className='mt-2'>
                                            <p className='ml-2 text-danger'>0.590</p>
                                        </div>
                                        <div className='mt-2'>
                                            <p className='ml-2 text-success'>0.590</p>
                                        </div>
                                        <div className='mt-2'>
                                            <p className='ml-2 text-success'>0.590</p>
                                        </div>
                                        <div className='mt-2'>
                                            <p className='ml-2 text-success'>0.590</p>
                                        </div>
                                    </div>

                                    <div className='col-lg-4 col-4'>
                                        <h5 className='ml-3 mt-2'>Xahw</h5>
                                        <div className='mt-2'>
                                            <p className='ml-2'>5947.346</p>
                                            <p className='ml-2'>4.052.564</p>
                                            <p className='ml-2'>43,520.737</p>
                                            <p className='ml-2'>154,382.465</p>
                                            <p className='ml-2'>4201.683</p>
                                            <p className='ml-2'>100,000.000</p>
                                            <p className='ml-2'>73.742.940</p>
                                        </div>
                                    </div>

                                    <div className='col-lg-4 col-4'>
                                        <h5 className='ml-3 mt-2'>Хувьцаа</h5>
                                        <div className='mt-2'>
                                            <p className='float-right mr-3'>17:30:15</p>
                                            <p className='float-right mr-3'>17:30:15</p>
                                            <p className='float-right mr-3'>17:30:15</p>
                                            <p className='float-right mr-3'>17:30:15</p>
                                            <p className='float-right mr-3'>17:30:15</p>
                                            <p className='float-right mr-3'>17:30:15</p>
                                            <p className='float-right mr-3'>17:30:15</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-4 col-sm-4 col-md-4 col-12'>
                        <div className='row'>
                            <div className='col-lg-6 col-12'>
                                <div className='d-flex justify-content-around'>
                                    <h5>TRD ABAX</h5>
                                    <p>0 MNT</p>
                                </div>
                                <div className='d-flex justify-content-around border-round'>
                                    <p className='mb-0'>XAHW</p>
                                    <p className='mb-0'>MNT</p>
                                </div>
                                <div className='d-flex justify-content-around border-round mt-3'>
                                    <p className='mb-0'>XAHW</p>
                                    <p className='mb-0'>TRD</p>
                                </div>
                            </div>
                            <div className='col-lg-6 col-12'>
                                <div className='d-flex justify-content-around'>
                                    <h5>TRD 3APX</h5>
                                    <p>0 MNT</p>
                                </div>
                                <div className='d-flex justify-content-around border-round'>
                                    <p className='mb-0'>XAHW</p>
                                    <p className='mb-0'>MNT</p>
                                </div>
                                <div className='d-flex justify-content-around border-round mt-3'>
                                    <p className='mb-0'>XAHW</p>
                                    <p className='mb-0'>TRD</p>
                                </div>
                            </div>
                        </div>
                    </div>                   

                    <div className='col-lg-4 col-sm-4 col-md-4 col-12'>
                        <div className='box-shadow-three'>
                            <div className='row'>
                                <div className='col-lg-4 col-4'>
                                    <h5 className='ml-3 mt-2'>yhe</h5>
                                    <p className='ml-2 mt-2 text-danger'>0.640</p>
                                    <p className='ml-2 mt-2 text-danger'>0.645</p>
                                    <p className='ml-2 mt-2 text-danger'>0.666</p>
                                    <p className='ml-2 mt-2 text-danger'>0.664</p>
                                    <p className='ml-2 mt-2 text-danger'>0.670</p>
                                    <p className='ml-2 mt-2 text-danger'>0.675</p>
                                    <p className='ml-2 mt-2 text-danger'>0.676</p>
                                </div>

                                <div className='col-lg-4 col-4'>
                                    <h5 className='ml-3 mt-2'>Xahw</h5>
                                    <div className='mt-2'>
                                    <p className='ml-2'>5947.346</p>
                                    <p className='ml-2'>4.052.564</p>
                                    <p className='ml-2'>43,520.737</p>
                                    <p className='ml-2'>154,382.465</p>
                                    <p className='ml-2'>4201.683</p>
                                    <p className='ml-2'>100,000.000</p>
                                    <p className='ml-2'>73.742.940</p>
                                    </div>
                                </div>

                                <div className='col-lg-4 col-4'>
                                    <h5 className='ml-1 mt-2'>Хувьцаа</h5>
                                    <div className='mt-2'>
                                    <p className='ml-2'>5947.346</p>
                                    <p className='ml-2'>4.052.564</p>
                                    <p className='ml-2'>43,520.737</p>
                                    <p className='ml-2'>154,382.465</p>
                                    <p className='ml-2'>4201.683</p>
                                    <p className='ml-2'>100,000.000</p>
                                    <p className='ml-2'>73.742.940</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col-lg-12 col-12'>
                                    <div className='d-flex justify-content-between'>
                                        <h5 className='mb-0'>Адуун Чулуун ХК</h5>
                                        <p className='mb-0 text-danger'>eepunmnt -0.17%</p>
                                    </div>
                                </div>
                            </div>
                            <div className='box-shadow mt-3'>
                                <div className='row pb-5'>
                                <div className='col-lg-4 col-4'>
                                    <p className='ml-2 mt-2 text-success'>0.640</p>
                                    <p className='ml-2 mt-2 text-success'>0.645</p>
                                    <p className='ml-2 mt-2 text-success'>0.666</p>
                                    <p className='ml-2 mt-2 text-success'>0.664</p>
                                    <p className='ml-2 mt-2 text-success'>0.670</p>
                                    <p className='ml-2 mt-2 text-success'>0.675</p>
                                    <p className='ml-2 mt-2 text-success'>0.676</p>
                                </div>

                                <div className='col-lg-4 col-4'>
                                    <div className='mt-2'>
                                    <p className='ml-2'>5947.346</p>
                                    <p className='ml-2'>4.052.564</p>
                                    <p className='ml-2'>43,520.737</p>
                                    <p className='ml-2'>154,382.465</p>
                                    <p className='ml-2'>4201.683</p>
                                    <p className='ml-2'>100,000.000</p>
                                    <p className='ml-2'>73.742.940</p>
                                    </div>
                                </div>

                                <div className='col-lg-4 col-4'>
                                    <div className='mt-2'>
                                    <p className='ml-2'>5947.346</p>
                                    <p className='ml-2'>4.052.564</p>
                                    <p className='ml-2'>43,520.737</p>
                                    <p className='ml-2'>154,382.465</p>
                                    <p className='ml-2'>4201.683</p>
                                    <p className='ml-2'>100,000.000</p>
                                    <p className='ml-2'>73.742.940</p>
                                    </div>
                                </div>              
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </>
    );
};
export default Market;