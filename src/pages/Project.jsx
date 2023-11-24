import React from 'react'
import Form from 'react-bootstrap/Form';
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap';
import ProjectCard from '../components/ProjectCard';

function Project() {
  return (
    <div>
      <Header/>
      <h3 className='text-center mt-5 mb-3 fw-bolder'>All Project</h3>

      <Form className='w-75 mx-auto mt-4 mb-5'>
      <Form.Group className="mb-3 d-flex" controlId="formBasicEmail">
        <Form.Control className='fw-lighter text-center' type="text" placeholder="Search Project using Technologies" />   
        <button className='btn rounded border-1 btn-outline-dark ms-2'><i  class="fa-solid fa-magnifying-glass fa-rotate-90 "></i></button>
      </Form.Group>

      <Row className='mt-5 mb-5 '>
        <Col sm={12} md={6} lg={4}>
          <ProjectCard/>
          
          
        
        </Col>
      </Row>

     
     
    </Form>
    </div>
  )
}

export default Project