import React, { useContext, useEffect, useState } from 'react'
import AddProject from './AddProject'
import { allUserProject, deleteProjectAPI } from '../services/allAPI'
import { addProjectResponseContext, editProjectResponseContext } from '../Contexts/ContextShare'
import EditProject from './EditProject'
import { toast } from 'react-toastify'

function MyProjects() {

  const {addProjectResponse, setAddProjectResponse} = useContext(addProjectResponseContext)
  const {editProjectResponse, setEditProjectResponse} = useContext(editProjectResponseContext)


  const [userProject, setUserProject] = useState([])

  const getUserProject = async()=>{

    const token = sessionStorage.getItem("token")

    const reqHeader ={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }

    const result = await allUserProject(reqHeader)
    console.log(result.data);
    setUserProject(result.data)
  }

  useEffect(()=>{
    getUserProject()
  },[addProjectResponse,editProjectResponse])


  const handleDelete = async(id)=>{
    const token = sessionStorage.getItem("token")
    const reqHeader ={
      "Content-Type":"application/json",
      "Authorization":`Bearer ${token}`
    }

    const result = await deleteProjectAPI(id,reqHeader)
    console.log(result);

    if(result.status ===200){
      getUserProject()
      toast.info('Project Deleted')
    }
    else{
      alert(result.response.data)
    }

  }

  return (
    <>
    <div className=''>
        <div className=' card  shadow mb-4 '>
        <div className='d-flex mt-3 p-2'>
           <h5 className='text-success ms-3 fw-bolder'> My projects</h5>
           <div className="ms-auto">
            <AddProject/>
            </div>

        </div>

            
            <div className='container '> 
              { userProject?.length>0?
              userProject.map((item)=>( <div className= 'border border-dark rounded d-flex justify-content-between  p-2 mb-4'>
              <p className='fw-bolder m-2 text-center'>{item.title.slice(0,15)}... </p>
             <div className='d-flex'>
                  <EditProject project={item}/>
                  <a href={item.github} target='blank' className='btn me-1'><i class="fa-brands fa-github text-dark"></i></a>
                  <button className='btn me-1' onClick={()=>{handleDelete(item._id)}}><i class="fa-solid fa-trash text-danger"></i></button>
             </div>
          </div>)):
          <div><p>No Projects Uploaded</p></div>
             }
            </div>

        </div>
    </div>
    </>
  )
}

export default MyProjects