import React, { useEffect, useState } from 'react'
import Form from 'react-bootstrap/Form';
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';
import { allProjectAPI } from '../services/allAPI';

function Project() {

  const [allProject, setAllProject]= useState([])
  const [searchKey, setSearchKey]= useState("")


  const getAllProject = async()=>{

    if(sessionStorage.getItem("token")){
      const token = sessionStorage.getItem("token")

      const reqHeader ={
        "Content-Type":"application/json",
        "Authorization":`Bearer ${token}`
      }

      const result = await allProjectAPI(searchKey,reqHeader)
      console.log(result.data);
      setAllProject(result.data)
    }

  
  }
  console.log(searchKey);

  useEffect(()=>{
    getAllProject()
  },[searchKey])

  return (
    <div>
      <Header/>
      <h3 className='text-center mt-5 mb-3 fw-bolder'>All Projects</h3>

      <Form className='w-75 mx-auto mt-4 mb-5'>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Control className='fw-lighter text-center' type="text" placeholder="Search Project using Technologies" value={searchKey} onChange={e=>setSearchKey(e.target.value)}/>   
        <button className='btn rounded border-1 btn-outline-dark ms-2'><i  class="fa-solid fa-magnifying-glass fa-rotate-90 "></i></button>
      </Form.Group>

      <Row className='mt-5 mb-5 '>
        {allProject?.length>0?
        allProject.map((item)=>(<Col sm={12} md={6} lg={4} className='mt-3'>
          <ProjectCard project={item}/></Col>))
          :
            <div className='row'>

          {/* pendinggggg */}

                <img className='' src="https://i.pinimg.com/originals/a8/12/1a/a8121abee959e18cbad25ad4046f76d8.gif" alt="" />
             


            </div>
         
          }
          
          
        
        
      </Row>

     
     
    </Form>
    </div>
  )
}

export default Project