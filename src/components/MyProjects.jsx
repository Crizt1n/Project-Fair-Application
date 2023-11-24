import React from 'react'
import AddProject from './AddProject'

function MyProjects() {
  return (
    <>
    <div className=''>
        <div className=' card  shadow mb-4'>
            <div className='d-flex justify-content-between p-3'>
                My Projects
                <button className='btn btn-outline-success'><i class="fa-solid fa-plus"></i> Add Project </button>
            </div>
            <div className='container '> 
               <div className= 'border border-dark rounded d-flex justify-content-between  p-2 mb-4'>
                    <p className='fw-bolder m-2 text-center'>Project Name </p>
                   <div >
                        <button className='btn me-1'><i class="fa-solid fa-pen-to-square text-info"></i></button>
                        <button className='btn me-1'><i class="fa-brands fa-github text-dark"></i></button>
                        <button className='btn me-1'><i class="fa-solid fa-trash text-danger"></i></button>
                   </div>
                </div>
            </div>

        </div>
    </div>
    </>
  )
}

export default MyProjects