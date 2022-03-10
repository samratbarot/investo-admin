import React from 'react'

const Profile=()=>{
    return(<>
      <div className="row">
                <div className='col-lg-3 col-sm-3 col-md-3 col-12'>
                  <div className='main-box'>
                    <div className='row'>
                      <div className='col-lg-6 col-6'>
                        <p className="mb-0 text-small w-xs-15 u">
                          U
                        </p>
                      </div>
                      <div className='col-lg-6 col-6'>
                        <span className="badge badge-pill badge-secondary verified w-80">
                          VERIFIED
                        </span>
                      </div>
                    </div>

                    <div className='row mt-5'>
                      <div className='col-lg-6 col-6'>
                        <p className='p-p1'>First Name:</p>
                        <p className='p-p1'>Last Name:</p>
                        <p className='p-p1'>Email:</p>
                        <p className='p-p1'>Phone:</p>
                        <p className='p-p1'>Registered date:</p>
                        <p className='p-p1'>National ID:</p>
                        <p className='p-p1'>Bank account type:</p>
                        <p className='p-p1'>Bank account:</p>
                      </div>
                      <div className='col-lg-6 col-6'>
                        <p className='p-p2'>Bat</p>
                        <p className='p-p2'>Gerel:</p>
                        <p className='p-p2'>gerel@mail.com</p>
                        <p className='p-p2'>99776655</p>
                        <p className='p-p2'>2022/02/12 14:00</p>
                        <p className='p-p2'>Хувьцаа</p>
                        <p className='p-p2'>khan Bank</p>
                        <p className='p-p2'>5011234567</p>
                      </div>
                    </div>

                  </div>
                </div>
              
                <div className='col-lg-3 col-sm-3 col-sm-3 col-md-3 col-12'>
                  <div className='box'>
                    <p className='text-p text-center'>User balance</p> 
                    <p className='text-green text-center'>1.200.100₮</p> 
                  </div>

                  <div className='box mt-3'>
                    <p className='text-p text-center'>Total deposit amount</p> 
                    <p className='text-green text-center'>1.200.100₮</p> 
                  </div>

                  <div className='box mt-3'>
                    <p className='text-p text-center'>Total withdraw amount</p> 
                    <p className='text-green text-center'>565.600₮</p> 
                  </div>
                </div>

                <div className='col-lg-3 col-sm-3 col-sm-3 col-md-3 col-12'>
                  <div className='box'>
                    <p className='text-p text-center'>foreign and domestic trade Status</p> 
                    <p className='text-green text-center'>Both</p> 
                  </div>

                  <div className='box mt-3'>
                    <p className='text-p text-center'>Domestic trading fee</p> 
                    <p className='text-green text-center'>1.5%</p> 
                  </div>

                  <div className='box mt-3'>
                    <p className='text-p text-center'>Government Bond trading fee</p> 
                    <p className='text-green text-center'>1%</p> 
                  </div>

                  <div className='box mt-3'>
                    <p className='text-p text-center'>Company Bond trading fee</p> 
                    <p className='text-green text-center'>1.5%</p> 
                  </div>
                </div>

                <div className='col-lg-3 col-sm-3 col-sm-3 col-md-3 col-12'>
                  <div className='box'>
                    <p className='text-p text-center'>Activities Today</p> 
                    <p className='text-green text-center'>215.000₮</p> 
                  </div>

                  <div className='box mt-3'>
                    <p className='text-p text-center'>Activities Last week</p> 
                    <p className='text-green text-center'>1.200.100₮</p> 
                  </div>

                  <div className='box mt-3'>
                    <p className='text-p text-center'>Activities Last month</p> 
                    <p className='text-green text-center'>1.320.100₮</p> 
                  </div>

                  <div className='box mt-3'>
                    <p className='text-p text-center'>Activities Overall</p> 
                    <p className='text-green text-center'>1.320.100₮</p> 
                  </div>
                </div>

              </div></>)
}
export default Profile