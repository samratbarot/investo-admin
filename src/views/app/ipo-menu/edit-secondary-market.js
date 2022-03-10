import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

const EditSecondaryMaket = ({ match }) => {
  return (
    <>
      <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Edit Secondary Market" match={match} />

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

                <p className="name mt-3">Address</p>
                <input
                  type="text"
                  className="input"
                  name="date"
                  value="2022/03/09"
                />

                <p className="name mt-3">Icon</p>
                <input type="file" className="input" name="name" />
              </div>

              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name">Stock Full Name</p>
                <input
                  type="text"
                  className="input"
                  name="name"
                  value="Адуун Чулуун ХХК"
                />

                <p className="name mt-3">Founded</p>
                <input
                  type="text"
                  className="input"
                  name="date"
                  value="2022/03/09"
                />
                <p className="name mt-3">Type</p>
                <select className="form-control form-select">
                  <option value="" selected="selected">
                    choose
                  </option>
                </select>
              </div>

              <div className="col-lg-4 col-sm-4 col-md-4 col-12">


                <p className="name">CEO</p>
                <input
                  type="text"
                  className="input"
                  name="active"
                  value="1500"
                />
                 <p className="name mt-3">IPO released date</p>
                 <select className="form-control form-select">
                  <option value="" selected="selected">
                    choose
                  </option>
                </select>
                 <p className="name mt-3">Status</p>
                 <select className="form-control form-select">
                  <option value="" selected="selected">
                    choose
                  </option>
                </select>
              </div>
              <button type="submit" className="save mt-3 ml-3">
                SAVE CHANGES
              </button>
            </div>
            <div className="row">
            <textarea id="froala-editor">Initialize the Froala WYSIWYG HTML Editor on a textarea.</textarea>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};
export default EditSecondaryMaket;
