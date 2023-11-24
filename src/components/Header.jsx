import React from 'react'
import { Link } from 'react-router-dom'

function Header({Dashboard}) {
  return (
    <>
   <div className=' bg-dark text-light p-4 d-flex justify-content-between'>
   <Link to={'/'} style={{textDecoration:"none",color:"white"}} >  <div className='container fs-2'><i class="fa-solid fa-diagram-project"></i> Project Fair</div></Link>
   {
    Dashboard && 
    <button className='btn btn-outline-warning '>Logout <i className='fa-solid fa-power-off'></i></button>
  }
   </div>
  
    </>
  )
}

export default Header