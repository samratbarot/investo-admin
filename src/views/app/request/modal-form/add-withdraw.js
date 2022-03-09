import React from 'react'

const AddWithdraw=({show,setShow})=>{
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
                  <h5 className="modal-title">Add New Item</h5>
                  <button type="button" className="close" aria-label="Close">
                    <span aria-hidden="true" onClick={()=>setShow(false)}> ×</span>
                  </button>
                </div>
                 <div className="modal-body">modal body</div>
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
          <div className="modal-backdrop fade show"/>
        </div>
      </div></>)
}
export default AddWithdraw;