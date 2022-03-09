import React from 'react';
import {Row } from 'reactstrap';
// import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
// import { NavLink } from 'react-router-dom';


const CustomerProfile = ({ match }) => {

//   const [toggle, setToggle] = useState({
//     orderBy: { display: 'none' },
//     pages: { display: 'none' },
//     checkAll: { display: 'none' },
//   });
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Bat Gerel" match={match} />
          <div className="top-right-button-container">
            <button
              type="button"
             
              className="btn btn-primary btn-lg top-right-button mr-1"
            >
              Edit Profile
            </button>

          </div>
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <section>
            <div className="container-fluid disable-text-selection">
              
              <div className="row">
                  start from here
                
              </div>
            </div>
          </section>
        </Colxx>
      </Row>

    </>
  );
};
export default CustomerProfile;
