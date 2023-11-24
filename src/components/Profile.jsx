import React, { useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';

function Profile() {


    const [open, setOpen] = useState(false);


  return (
    <>
        <div className='card shadow p-4 mb-5'>
            <div className='d-flex justify-content-between'>
                
                <h3 className='me-2'>Profile</h3>
                <button className='btn btn-outline-info' onClick={() => setOpen(!open)}><i class="fa-solid fa-angle-down"></i></button>
            </div>

           


            <Collapse in={open}>
                <div className="justify-content-center mt-5 ">
                    <label htmlFor="profile">
                        <input id='profile' type="file" style={{display:"none"}} />
                        <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className='w-100' alt="no image" />
                    </label>
                    <div className="mb-3 mt-4">
                        <input type="text" className='form-control ' placeholder='Github' />
                    </div>
                    <div className="mb-3">
                        <input type="text" className='form-control ' placeholder='Linkedin'/>
                    </div>
                    <div className='mt-3'>
                        <button className='btn btn-outline-success w-100'>Update</button>
                    </div>
                </div>
            </Collapse>
        </div>
    
    
    
    </>
  )
}

export default Profile