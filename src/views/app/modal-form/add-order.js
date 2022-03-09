import React from 'react';
import { Label, Input } from 'reactstrap';

const AddOrder = ({ show, setShow }) => {
  return (
    <>
      <div
        tabIndex="-1"
        style={{
          position: 'relative',
          zIndex: 1050,
          display: show ? 'block' : 'none',
        }}
      >
        <div className="modal-right">
          <div
            className="modal fade show"
            role="dialog"
            tabIndex="-1"
            style={{ display: 'block' }}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Add Order</h5>
                  <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true" onClick={() => setShow(false)}>
                      {' '}
                      ×
                    </span>
                  </button>
                </div>
                <div className="modal-body">
                  <Label className="">Customer Name</Label>
                  <Input
                    type="text"
                    className="form-controller"
                    placeholder="Search customer"
                  />
                  <Label className="mt-4">National ID</Label>
                  <Input type="text" className="form-controller" />
                  <Label className="mt-4">Email</Label>
                  <select className="form-controller form-select">
                    <option selected>Mongolian Citizen</option>
                  </select>
                  <Label className="mt-4">Account number</Label>
                  <Input type="text" className="form-controller" />
                  <Label className="mt-4">User balance</Label>
                  <Input type="text" className="form-controller" />
                  <Label className="mt-4">Minimum balance</Label>
                  <Input type="text" className="form-controller" />
                  <Label className="mt-4">Securities</Label>
                  <select className="form-controller form-select">
                    <option selected>Choose</option>
                  </select>
                  <Label className="mt-4">Available Securities</Label>
                  <select className="form-controller form-select">
                    <option selected>Choose</option>
                  </select>
                  <Label className="mt-4">Quantity</Label>
                  <select className="form-controller form-select">
                    <option selected>Search</option>
                  </select>
                  <Label className="mt-4">Fee</Label>
                  <Input
                    type="text"
                    className="form-controller"
                    placeholder="Fee"
                  />
                  <Label className="mt-4">Price</Label>
                  <Input
                    type="text"
                    className="form-controller"
                    placeholder="Price"
                  />
                  <Label className="mt-4">Overall Trade Value</Label>
                  <Input
                    type="text"
                    className="form-controller"
                    placeholder="Price"
                  />
                  <Label className="mt-4">Overall trade value</Label>
                  <select className="form-controller form-select">
                    <option selected>1%</option>
                  </select>
                  <Label className="mt-4">Order type</Label>
                  <select className="form-controller form-select">
                    <option selected>Choose</option>
                  </select>
                  <Label className="mt-4">Date</Label>
                  <Input
                    type="text"
                    className="form-controller"
                    placeholder="2021/09/15"
                  />
                  <Label className="mt-4">Conditions for fulfillment</Label>
                  <select className="form-controller form-select">
                    <option selected>Choose</option>
                  </select>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-secondary">
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show" />
        </div>
      </div>
    </>
  );
};
export default AddOrder;
