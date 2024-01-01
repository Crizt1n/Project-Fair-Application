import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import titleimage from '../assets//toppng.com-create-animated-png-campaña-de-marketi-518x369.png'
import { Link, useNavigate } from 'react-router-dom';
import { LoginAPI, registerAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Auth({register}) {
    // to hold the value from the input box
    const [userData, setUserData]= useState({
        username:"",
        email:"",
        password:""
    })
    console.log(userData);

    //for navigate
    const navigate = useNavigate()

    const registerForm =register?true:false

    //register button

    const handleRegister = async(e)=>{
        e.preventDefault()

        const {username,email,password} = userData

        if(!username || !email || !password){
            toast.info('Please fill the Data Completely')
        }
        else{
            const result = await registerAPI(userData)
            /* console.log(result.data); */
            if(result.status ===200){
            toast.success(`${result.data.username} is successfully registered`)
            setUserData({
                username:"",
                email:"",
                password:""
            })
            //move to login page
            navigate('/login')
        }
        else{
            toast.error(result.response.data)
        }
        }
    }

    //Login FUnction

    const handleLogin = async(e)=>{
        e.preventDefault()

        //destructure 
        const {email,password}=userData

        if(!email || !password){
            toast.info('Please fill the Form Completetly')

        }
        else{
            const result = await LoginAPI(userData)
            console.log(result);

            if(result.status === 200){
                toast.success('Login Successfull')

                sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
                sessionStorage.setItem("token",result.data.token)

                setUserData({
                    username:"",
                    email:"",
                    password:""

                })

                //navigate
                setTimeout(() => {
                    navigate('/')
                }, 1500);
            }
            else{
                toast.error(result.response.data)

            }
        }
    }
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
                                    <Form.Control type="text" placeholder="Enter a username"  value={userData.username} onChange={(e)=>setUserData({...userData,username:e.target.value})}/>
                                   
                                </Form.Group>
    
    
                                }
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                    <Form.Label>Email address </Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
                                </Form.Group>
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                    </Form.Text>
    
                                    <Form.Group className="mb-3 mt-2" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Type your Password" value={userData.password} onChange={(e)=>setUserData({...userData,password:e.target.value})}/>
                                    </Form.Group>
    
    
    
                                    {
                                        registerForm?
                                        
                                        
                                    <div>
                                        <p>Already a user? Click here to <Link to={'/login'} style={{color:"blue"}}>Login</Link> </p>                                   
                                        <button className='btn btn-outline-dark fw-bolder' onClick={handleRegister} >Register</button>
                                    </div>:
                                       <div>
                                       <p>Don't have an account? Click here to <Link to={'/register'} style={{color:"blue"}}>Register</Link> </p>
                                       <button className='btn btn-outline-dark fw-bolder' onClick={handleLogin}>Login</button>
                                   </div>
    
    
    
                                    }
    
    
                             </Form>
    
                            </div>
                        </div>
    
                    </div>
        
                </div>
        
               <div className="col-md-2"></div>
         
            
      </div>
      <ToastContainer autoClose={2000} theme='colored' position='top-center' />
 
    
    </>
  )
}

export default Auth