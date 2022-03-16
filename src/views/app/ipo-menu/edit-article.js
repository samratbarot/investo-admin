import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from 'components/common/CustomBootstrap';
import Breadcrumb from '../../../containers/navs/Breadcrumb';

const EditArtical = ({match}) => {
  return (
    <>
       <Row>
        <Colxx xxs="12">
          <Breadcrumb heading="Edit Article" match={match} />
         
          <Separator className="mb-5" />
        </Colxx>
      </Row>
      <form action="#">
        <div className="container">
          <div className="edit-ipo">
            <div className="row">
              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name">Category</p>
                <select className='category-select'>
                  <option>ADL</option>
                </select>
              </div>

              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name">Title</p>
                <input type="text" className="input" name="name" value='Адуун Чулуун ХХК' />
              </div>

              <div className="col-lg-4 col-sm-4 col-md-4 col-12">
                <p className="name">Publish date</p>
                <input type="date"
                  className="input" name="date"/>
              </div>
              <div className='col-12 col-lg-12'>
              <p className="detail mt-3">Detail</p>
                <textarea className='text-area'/>
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
export default EditArtical;
