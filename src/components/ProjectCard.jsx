import React from 'react'
import Card from 'react-bootstrap/Card';
import projectimage from '../assets/pexels-pixabay-434446.jpg' 
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';
import { BASE_URL } from '../services/baseURL';
import { upload } from '@testing-library/user-event/dist/upload';


function ProjectCard({project}) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
    
    <Card className='w-100 shadow text-center '  onClick={handleShow}>
      <Card.Img variant="top" src={`${BASE_URL}/uploads/${project.projectImage}` } style={{height:"250px"}}/>
      <Card.Body>
        <Card.Title><b>{project.title}</b></Card.Title>
      </Card.Body>
    </Card>

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>{project.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row className='container'>
          <Col md={6}>
            <img style={{}} className='rounded w-100' src={`${BASE_URL}/uploads/${project.projectImage}` } alt="" />
          </Col>
          <Col md={6}>
          <p className='mt-3'><b>OverView : </b>{project.overview}.</p>
          <p><span className='fw-bolder'>Technologies : </span> {project.language}</p>
          </Col>
        </Row>
        <div className='d-flex mt-3 mb-2'>
          <a href={project.github} target='blank' style={{color:"black"}}><i class="fa-brands fa-github fa-xl ms-3"></i></a>
          <a href={project.website}  target='_blank' style={{color:"black"}}><i class="fa-solid fa-link fa-xl ms-4 "></i></a>
        </div>
        </Modal.Body>

      

      </Modal>


    </>
  )
}

export default ProjectCard