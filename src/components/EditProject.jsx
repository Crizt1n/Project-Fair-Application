import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import { useState } from 'react';
import { BASE_URL } from '../services/baseURL';
import { editProjectAPI } from '../services/allAPI';
import { editProjectResponseContext } from '../Contexts/ContextShare';

function EditProject({project}) {

    const {editProjectResponse, setEditProjectResponse} = useContext(editProjectResponseContext)

    const [modalShow, setModalShow] = useState(false);
    const [preview, setPreview] = useState("")
    const [projectDetails,setProjectDetails]= useState({
        id:project._id,
        title: project.title,
        language: project.language,
        github: project.github,
        website: project.website,
        overview: project.overview,
        projectImage: ""
      })
      console.log(project);

      useEffect(()=>{
        if(projectDetails.projectImage){
            setPreview(URL.createObjectURL(projectDetails.projectImage))
        }
      },[projectDetails.projectImage])

      //to remove only the edited content
      const handleUndo = ()=>{
        setProjectDetails({
            title: project.title,
            language: project.language,
            github: project.github,
            website: project.website,
            overview: project.overview,
            projectImage: ""
        })
        setPreview("")
      }

      const handleUpdate = async ()=>{
        const {id,title,language,github,website,overview,projectImage} = projectDetails

        if(!title || !language || !github || !website || !overview){
            toast.dark("Fill the form Completely")

        }
        else{
            const reqBody = new FormData()
            reqBody.append("title",title)
            reqBody.append("language",language)
            reqBody.append("github",github)
            reqBody.append("website",website)
            reqBody.append("overview",overview)
            preview?reqBody.append("projectImage",projectImage):reqBody.append("projectImage",project.projectImage)

            const token = sessionStorage.getItem("token")

            if(preview){
                const reqHeader = {
                    "Content-Type":"multipart/form-data",
                    "Authorization":`Bearer ${token}`
                }
                const result = await editProjectAPI(id,reqBody,reqHeader)
                console.log(result);

                if(result.status===200){
                  console.log(result.data);
                  toast.success('Updated Successfully')
                  setModalShow(false)
                  setEditProjectResponse(result.data)

                }
                else{
                  console.log(result.response.data);
                }
            }
            else{
                const reqHeader={
                    "Content-Type":"application/json",
                    "Authorization":`Bearer ${token}`
                }
                const result = await editProjectAPI(id,reqBody,reqHeader)
                console.log(result);

                if(result.status===200){
                  console.log(result.data);
                  toast.success('Updated Successfully')
                  setModalShow(false)
                  setEditProjectResponse(result.data)

                }
                else{
                  console.log(result.response.data);
                }
            }
        }
      }

  return (
    <>
    <button onClick={() => setModalShow(true)} className='btn me-1'><i class="fa-solid fa-pen-to-square text-info"></i></button>

    
    <Modal
        show={modalShow}
        size="lg"
        onHide={() => setModalShow(false)}
        backdrop="static"
        keyboard={false}
       
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
          <div className="col-md-6">
          <label >
              <input  type="file" style={{display:"none"}} onChange={(e)=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}/>
              <img src={preview?preview:`${BASE_URL}/uploads/${project.projectImage}`} className='w-100 shadow mb-4 rounded-4' alt="no image" />
          </label>
          </div>
          <div className="col-md-6">
          <TextField id="outlined-basic" label="Project Title" variant="outlined" className='w-100 mb-3' value={projectDetails.title} onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})}/>

          <TextField id="outlined-basic" label="Language Used" variant="outlined" className='w-100 mb-3'  value={projectDetails.language} onChange={(e)=>setProjectDetails({...projectDetails,language:e.target.value})} />

          <TextField id="outlined-basic" label="GitHub Link" variant="outlined" className='w-100 mb-3' value={projectDetails.github} onChange={(e)=>setProjectDetails({...projectDetails,github:e.target.value})}/>

          <TextField id="outlined-basic" label="Website Link" variant="outlined" className='w-100 mb-3' value={projectDetails.website} onChange={(e)=>setProjectDetails({...projectDetails,website:e.target.value})}/>

          <TextField
          id="outlined-multiline-static"
          label="Project Overview"
          multiline
          rows={4}
          className='w-100'
          value={projectDetails.overview} onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})}
          />
          </div>
       </div>


        </Modal.Body>
        <Modal.Footer >
          <Button variant="outline-danger" onClick={() => setModalShow(false)}>
            Close
          </Button>
          <Button variant="outline-info" onClick={handleUndo}>Undo</Button>
          <Button variant="outline-success" onClick={handleUpdate}>Save Changes</Button>
        </Modal.Footer>
      </Modal>

      {/* ToastContainer if needed */}
      <ToastContainer autoClose={2000} theme='colored' position='top-center' />
    </>
  )
}

export default EditProject