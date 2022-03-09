import React from 'react'
import { Label, Input } from 'reactstrap';

const AddDiposit=({show,setShow})=>{
    return(<>
    <div
        
        tabIndex="-1"
        style={{position: "relative", zIndex: 1050,display:show?"block":'none'}}
      >
        <div className="modal-right">
          <div
            className="modal fade show"
            role="dialog"
            tabIndex="-1"
            style={{display: "block"}}
          >
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title">Diposit Request</h5>
                  <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true" onClick={()=>setShow(false)}> ×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <Label className="">customer name</Label>
                  <Input type="text" className="form-controller" placeholder='Search'/>
                  <Label className="mt-4">Amount</Label>
                  <Input type="text" className="form-controller" />
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-secondary">
                    Cancel
                  </button>
                  <button type="button" className="btn btn-primary">
                    Diposit
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="modal-backdrop fade show"/>
        </div>
      </div></>)
}
export default AddDiposit;