import React from 'react'
import { Col, Row } from 'react-bootstrap'
import titleimage from '../assets//toppng.com-create-animated-png-campaña-de-marketi-518x369.png'
import ProjectCard from '../components/ProjectCard'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div style={{width:"100%"}} >
      <div className='bg-warning shadow '>
            <div className='container justify-content-center align-items-center '>
                <Row className='align-items-center '>
                    <Col sm={12} md={6}  >
                    <h1 className='text-dark shadow container' style={{fontSize:'90px'}}><b>Project Fair</b></h1>
                    <p className='fs-4 mt-5' style={{marginTop:"100px",marginBottom:'0px'}}>One stop destination for all software development projects.</p>
                    <Link to={'/login'} type='button' className='btn btn-outline-dark fs-4 rounded mt-4 p-4 mb-3 mt-5'><b>Get Started <i class="fa-solid fa-arrow-right"></i></b></Link>
                    </Col>
                    <Col sm={12} md={6} style={{marginTop:"110px",marginBottom:'100px'}} className='p-55'>
                        <img className=' container w-100' src={titleimage} alt="" />
                    </Col>
                </Row>
            </div>
      </div>

        {/* section for all projects */}
        <div className='all-project mt-5 '>
           <div className='text-center'>
             <h1>All Projects</h1>
           

                <marquee scrollAmount={10} >

                <div className="d-flex mt-5 mb-5">

                    <div className="ms-4 ">
                        <ProjectCard/>
                    </div>

                    <div className="ms-4">
                        <ProjectCard/>
                    </div>

                    <div className="ms-4">
                        <ProjectCard/>
                    </div>

                    </div>

                </marquee>


           


                

                <div className="text-center">
                    <h6 className='mt-5 mb-5'><Link  to={'/project'}>See More Projects</Link></h6>
                </div>

            
             </div>

        </div>

    </div>
    </>
  )
}

export default Home