import React from 'react'
import Form from 'react-bootstrap/Form';
import titleimage from '../assets//toppng.com-create-animated-png-campaña-de-marketi-518x369.png'
import { Link } from 'react-router-dom';

function Auth({register}) {
    const registerForm =register?true:false
  return (
    <>
 
      <div className='row p-5 mb-5 mt-5' >
          
               <div className="col-md-2"></div>
        
                <div className="col-md-8">
        
                    <Link to={'/'} style={{textDecoration:"none", color:"black"}}><h6><i class="fa-solid fa-arrow-left"></i> Back to Home</h6></Link>
                    <div className='container bg-success rounded'>
                        <div className="row mx-auto ">
                            <div className="col-md-5 mt-5">
                                <img className='w-100 p-3 mt-5' src={titleimage} alt="" />
                            </div>
                            <div className="col-md-7 p-2 mb-4  mt-3">
                                <h2 className='text-center fw-bolder'><i class="fa-solid fa-diagram-project"></i>  Project Fair</h2>
    
                        <h6 className='text-center mb-3 mt-4 fw-bold'>
                                {
                                    registerForm? "Sign Up to your Account": "Sign In to your Account"
                                }
        
                        </h6>
    
                        <Form className=''>
                                {
                                    registerForm && 
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter a username" />
                                   
                                </Form.Group>
    
    
                                }
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label>Email address </Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
    
                                    <Form.Group className="mb-3 mt-2" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Type your Password" />
                                    </Form.Group>
    
    
    
                                    {
                                        registerForm?
                                        
                                        
                                    <div>
                                        <p>Already a user? Click here to <Link to={'/login'} style={{color:"blue"}}>Login</Link> </p>                                   
                                        <button className='btn btn-outline-dark fw-bolder'>Register</button>
                                    </div>:
                                       <div>
                                       <p>Don't have an account? Click here to <Link to={'/register'} style={{color:"blue"}}>Register</Link> </p>
                                       <button className='btn btn-outline-dark fw-bolder'>Login</button>
                                   </div>
    
    
    
                                    }
    
    
                             </Form>
    
                            </div>
                        </div>
    
                    </div>
        
                </div>
        
               <div className="col-md-2"></div>
         
            
      </div>
 
    
    </>
  )
}

export default Auth