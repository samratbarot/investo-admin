import React from 'react';

const AddArtical = () => {
    return <>
        <form action='#'>
            <div className='container'>
                    <div className='edit-ipo'>
                    <div className='row'>
                        <div className='col-lg-4 col-sm-4 col-md-4 col-12'>
                            <p className='name'>Stock Name</p>
                            <input type='text' className='input' name="name" value='ADL' />
                            
                            <p className='name mt-3'>Start Date</p>
                            <input type='date' className='input' name="date" />
                            
                            <p className='name mt-3'>Icon</p>
                            <div className='icon'>
                               <input type='text' name='text' className='input' /> <button type='submit' className='browse'>Browse</button>
                            </div>
                        </div>

                        <div className='col-lg-4 col-sm-4 col-md-4 col-12'>
                            <p className='name'>Stock Name</p>
                            <input type='text' className='input' name="name" value="Адуун Чулуун ХХК" />
                            
                            <p className='name mt-3'>Start Date</p>
                            <input type='date' className='input' name="date" />
                        </div>

                        <div className='col-lg-4 col-sm-4 col-md-4 col-12'>
                            <p className='name'>Stock Name</p>
                            <input type='text' className='input' name="value" value="1500" />
                            
                            <p className='name mt-3'>Start Date</p>
                            <input type='text' className='input' name="active" value="active" />
                        </div>
                        <button type='submit' className='save mt-3 ml-3'>SAVE CHANGES</button>
                    </div>
                </div>
            </div>
        </form>
    </>
}
export default AddArtical