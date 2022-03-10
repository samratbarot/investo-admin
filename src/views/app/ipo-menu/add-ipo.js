import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';


const AddIpo = ({match}) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Add IPO" match={match} />
         
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <form action="#">
        <div className="container">
          <div className="edit-ipo">
            <div className="row">
              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name">Stock Name</p>
                <input type="text" className="input" name="name" value="ADL" />

                <p className="name mt-3">Start Date</p>
                <input type="date" className="input" name="date" />

                <p className="name mt-3">Icon</p>
                <input type="file" className="input" name="name" />
              </div>

              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name">Stock Name</p>
                <input
                  type="text"
                  className="input"
                  name="name"
                  value="Адуун Чулуун ХХК"
                />

                <p className="name mt-3">Start Date</p>
                <input type="date" className="input" name="date" />
              </div>

              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name">Stock Name</p>
                <input
                  type="text"
                  className="input"
                  name="value"
                  value="1500"
                />

                <p className="name mt-3">Start Date</p>
                <input
                  type="text"
                  className="input"
                  name="active"
                  value="active"
                />
              </div>
              <button type="submit" className="save mt-3 ml-3">
                SAVE CHANGES
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default AddIpo;
