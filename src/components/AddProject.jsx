import React, { useContext, useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { TextField } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from '../services/allAPI';
import { addProjectResponseContext } from '../Contexts/ContextShare';

function AddProject() {
  // useContext hook is to used to accesss the context api
  const {addProjectResponse, setAddProjectResponse} = useContext(addProjectResponseContext)

  const [modalShow, setModalShow] = useState(false);

  //state to hold the value form the input box
  const [projectDetails,setProjectDetails]= useState({
    title:"",
    language:"",
    github:"",
    website:"",
    overview:"",
    projectImage:""
  })
  console.log(projectDetails);

  const [token, setToken] = useState("")

  const clearForm = () => {
    setProjectDetails({
      title: "",
      language: "",
      github: "",
      website: "",
      overview: "",
      projectImage: "",
      
    });
    setPreview("")
  };
    
  //to hold the url of the image
  const [preview,setPreview]= useState("")

  console.log(projectDetails);

  useEffect(()=>{
    if(projectDetails.projectImage){
      //javascript predefined method - url - createObjectURL - files will be converted into url
      setPreview(URL.createObjectURL(projectDetails.projectImage))
    }
  },[projectDetails.projectImage])
  console.log(preview);


  useEffect(()=>{
    if(sessionStorage.getItem("token")){
      setToken(sessionStorage.getItem("token"))
    }
    else{
      setToken("")
    }

  },[])
    console.log(token);



  const handleAdd= async(e)=>{
    e.preventDefault()

    const {title,language,github,website,overview,projectImage} = projectDetails

    if(!title || !language || !github || !website || !overview || !projectImage){
      toast.warning('Please fill the form Completely')
    }
    else{
      //reqbody
      //if there is any uploading content from the system . we should send the body in the form of formdata
      //1) create object for the class form Data 
      const reqBody = new FormData()
      
      //2) Add value to the form Data - append()
      reqBody.append("title",title)
      reqBody.append("language",language)
      reqBody.append("github",github)
      reqBody.append("website",website)
      reqBody.append("overview",overview)
      reqBody.append("projectImage",projectImage)


      //reqHeader

      if(token){ 
        const reqHeader = {
        "Content-Type":"multipart/form-data",
        "Authorization":`Bearer ${token}`

      }


      const result = await addProjectAPI(reqBody,reqHeader)
      console.log(result);

      if (result.status === 200) {
    toast.success('Project Successfully Added');

    clearForm();
    setModalShow(false)
    setAddProjectResponse(result.data)
    
   /*  // Add this line to reload the page
    window.location.reload(); */
    
    } else {
        if (result.response && result.response.data) {
            toast.error(result.response.data);
        } else {
            toast.error('An error occurred');
            console.log(result); // Log the result to see what it contains
        }
    }


    }}
  }
  return (
    <>
      <Button variant="outline-success" onClick={() => setModalShow(true)} >
        <i className="fa-solid fa-plus"></i> Add Project
      </Button>

      <Modal
        show={modalShow}
        size="lg"
        onHide={() => setModalShow(false)}
        backdrop="static"
        keyboard={false}
       
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className="row">
          <div className="col-md-6">
          <label >
              <input  type="file" style={{display:"none"}} onChange={(e)=>setProjectDetails({...projectDetails,projectImage:e.target.files[0]})}/>
              <img src={preview?preview:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Add_document_icon_%28the_Noun_Project_27896%29.svg/2048px-Add_document_icon_%28the_Noun_Project_27896%29.svg.png"} className='w-100 shadow mb-4 rounded-4' alt="no image" />
          </label>
          </div>
          <div className="col-md-6">
          <TextField id="outlined-basic" label="Project Title" variant="outlined" className='w-100 mb-3' value={projectDetails.title} onChange={(e)=>setProjectDetails({...projectDetails,title:e.target.value})}/>

          <TextField id="outlined-basic" label="Language Used" variant="outlined" className='w-100 mb-3'   value={projectDetails.language}
          onChange={(e) => setProjectDetails({...projectDetails, language: e.target.value})}/>

          <TextField id="outlined-basic" label="GitHub Link" variant="outlined" className='w-100 mb-3' value={projectDetails.github} onChange={(e)=>setProjectDetails({...projectDetails,github:e.target.value})}/>

          <TextField id="outlined-basic" label="Website Link" variant="outlined" className='w-100 mb-3' value={projectDetails.website} onChange={(e)=>setProjectDetails({...projectDetails,website:e.target.value})}/>

          <TextField
          id="outlined-multiline-static"
          label="Project Overview"
          multiline
          rows={4}
          className='w-100'
          value={projectDetails.overview} onChange={(e)=>setProjectDetails({...projectDetails,overview:e.target.value})}/>
          </div>
       </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={() => setModalShow(false)}>
            Close
          </Button>
          <Button variant="outline-info" onClick={clearForm}>Clear</Button>
          <Button variant="outline-success" onClick={handleAdd}>Add</Button>
        </Modal.Footer>
      </Modal>

      {/* ToastContainer if needed */}
      <ToastContainer autoClose={2000} theme='colored' position='top-center' />
    </>
  );
}

export default AddProject;
