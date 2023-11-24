import React from 'react'
import Card from 'react-bootstrap/Card';
import projectimage from '../assets/pexels-pixabay-434446.jpg' 
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { Col, Row } from 'react-bootstrap';


function ProjectCard() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
  return (
    <>
    
    <Card className='w-100 shadow text-center '  onClick={handleShow}>
      <Card.Img variant="top" src={projectimage} />
      <Card.Body>
        <Card.Title><b>Media Player</b></Card.Title>
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
          <Modal.Title>Media Player</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Row className='container'>
          <Col md={6}>
            <img style={{width:"100%", height:"250px"}} className='rounded' src={projectimage} alt="" />
          </Col>
          <Col md={6}>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo voluptas placeat, rerum tempora repellat rem magni impedit praesentium labore error odio voluptatibus eaque? Nihil corporis dicta praesentium sequi, accusamus id.</p>
          <p><span className='fw-bolder'>Technologies : </span> HTML, CSS, REACT</p>
          </Col>
        </Row>
        <div className='d-flex mt-3 mb-2'>
          <a href="https://github.com/Crizt1n/Media-Player-Front-end" target='blank' style={{color:"black"}}><i class="fa-brands fa-github fa-xl ms-3"></i></a>
          <a href="https://github.com/Crizt1n/Media-Player-Front-end"  target='_blank' style={{color:"black"}}><i class="fa-solid fa-link fa-xl ms-4 "></i></a>
        </div>
        </Modal.Body>

      

      </Modal>


    </>
  )
}

export default ProjectCard