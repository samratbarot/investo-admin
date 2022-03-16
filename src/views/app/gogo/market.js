import React from 'react';
// import React, { useState } from 'react';
import { Row } from 'reactstrap';
// import IntlMessages from 'helpers/IntlMessages';
import { Colxx } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
// import { NavLink } from 'react-router-dom';
// import apu from '../../../assets/img/article/apu.png';

const Market = ({ match }) => {
    return (
        <>
            <Row>
                <Colxx xxs="12">
                    <Breadcrumb heading="Market" match={match} />
                </Colxx>
            </Row>
        </>
    );
};
export default Market;