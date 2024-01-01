import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

function Header({Dashboard}) {
  const navigate = useNavigate()
  const handleLogout=() =>{
    sessionStorage.removeItem("existingUser")
    sessionStorage.removeItem("token")
    navigate('/',{ replace: true })
  }

  // Check if the user is authenticated

  const isAuthenticated = !!sessionStorage.getItem('token');

  //Modal function 

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
   <div className=' bg-dark text-light p-4 d-flex justify-content-between'>
   <Link to={'/'} style={{textDecoration:"none",color:"white"}} >  <div className='container fs-2'><i class="fa-solid fa-diagram-project"></i> Project Fair</div></Link>
  {Dashboard && isAuthenticated && (
          // Display logout button only if authenticated
          <button className='btn btn-outline-warning' onClick={handleShow}>
            Logout <i className='fa-solid fa-power-off'></i>
          </button>
        )}
   </div>


   {/* modal */}

   <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      
      >
        <Modal.Header closeButton >
          <Modal.Title>Are you sure to Logout?</Modal.Title>
        </Modal.Header>
        <Modal.Footer>
          <Button variant="outline-secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="outline-danger" onClick={handleLogout}>Confirm</Button>
        </Modal.Footer>
      </Modal>
  
    </>
  )
}

export default Header