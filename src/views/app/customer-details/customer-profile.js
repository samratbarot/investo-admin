import React,{useState} from 'react';
import { Row } from 'reactstrap';
// import IntlMessages from 'helpers/IntlMessages';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from 'containers/navs/Breadcrumb';
import { NavLink } from 'react-router-dom';
import Profile from './profile';
import CustomerIpoList from './customer-ipo';
import CustomerTransation from './customer-transaction';
// import { NavLink } from 'react-router-dom';


const CustomerProfile = ({ match }) => {
  const [tabIndex,setTabIndex]=useState(0)
  //   const [toggle, setToggle] = useState({
  //     orderBy: { display: 'none' },
  //     pages: { display: 'none' },
  //     checkAll: { display: 'none' },
  //   });
  return (
    <>
      <Row>
        <Colxx xxs="11">
          <Breadcrumb heading="Bat Gerel" match={match} />
          <div className="top-right-button-container">
            <button
              type="button"

              className="btn btn-primary btn-lg top-right-button mr-1"
            >
              Edit Profile
            </button>

          </div>
      
        </Colxx>
      </Row>
      <Row>
        <Colxx xxs="12" className="mb-4">
          <section>
            <div className="container-fluid disable-text-selection">
              <div className='col-lg-4'>
                  <div className='d-flex justify-content-between'>
                      <NavLink to="#" onClick={()=>setTabIndex(0)}><p className={tabIndex===0?'text-green':"mb-0"}>PROFILE</p></NavLink>
                      <NavLink to="#" onClick={()=>setTabIndex(1)}><p className={tabIndex===1?'text-green':"mb-0"}>OWNED IPO</p></NavLink>
                      <NavLink to="#" onClick={()=>setTabIndex(2)}><p className={tabIndex===2?'text-green':"mb-0"}>TRANSACTION</p></NavLink>
                  </div>
                
                </div>
                <Separator className="mb-5" />
                {tabIndex===0?<Profile/>:null}
                {tabIndex===1?<CustomerIpoList match={match}/>:null}
                {tabIndex===2?<CustomerTransation match={match}/>:null}

            </div>
          </section>
        </Colxx>
      </Row>

    </>
  );
};
export default CustomerProfile;
