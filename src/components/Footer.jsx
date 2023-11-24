import React from 'react'
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom'

function Footer() {
  return (
   
    <div className='d-flex justify-content-center align-items-center bg-dark text-light flex-column'>
        
    <Container>
        <div className='footer d-flex justify-content-evenly align-items-center w-100'>

            <div className="row">
                <div className="col-md-3 mt-4">
                <h4 style={{overflowY:"hidden"}} className='text-center'><i class="fa-solid fa-diagram-project"></i>{''} Project Fair</h4>
          <h6 style={{overflowY:"hidden"}} className='mt-3 text-start'>Lorem ipsum dolo. Nemo quos repellat doloremque magnam optio aut corrupti voluptatibus animi, commodi dolore vel aliquid voluptate assumenda, voluptates reprehenderit facere iure autem modi.</h6>
          <h6 style={{overflowY:"hidden"}} className=' text-start'>simiplweled, ewkghelew , gskwehgk?</h6>
                </div>
                <div className="col-md-3 mt-4">
                <div className="links d-flex flex-column">
          <h4 style={{overflowY:"hidden"}} className='mb-2 text-center'>Links</h4>
          <Link to={'/'} style={{textDecoration:'none', color:'white'}} className='mt-2 ms-5'><i class="fa-solid fa-house"></i> Home</Link>
          <Link to={'/login'} style={{textDecoration:'none', color:'white'}} className='mt-1 ms-5'><i class="fa-solid fa-right-to-bracket"></i> Login</Link>
          <Link to={'/register'} style={{textDecoration:'none', color:'white'}} className='mt-1 ms-5'><i class="fa-solid fa-cash-register"></i> Register</Link>
          <Link to={'/dashboard'} style={{textDecoration:'none', color:'white'}} className='mt-1 ms-5'><i class="fa-solid fa-chart-line"></i> Dashboard</Link>
          <Link to={'/project'} style={{textDecoration:'none', color:'white'}} className='mt-1 ms-5'><i class="fa-solid fa-diagram-project"></i> Projects</Link>

          </div>
                </div>
                
                <div className="col-md-3 mt-4">
                <div className="guides d-flex flex-column">
            <h4 className='mb-2 text-center' style={{overflowY:"hidden"}}>Guides</h4>
          <Link to={'https://react.dev/'} target='blank' className='mt-2 ms-5' style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-hand-point-right"></i> React</Link>
          <Link to={'https://react-bootstrap.netlify.app/'} target='blank' className='mt-1 ms-5' style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-hand-point-right"></i> React Bootsrap</Link>
          <Link to={'https://bootswatch.com/'} target='blank' className='mt-1 ms-5' style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-hand-point-right"></i> Bootswatch</Link>
          <Link to={'https://fontawesome.com/'} target='blank' className='mt-1 ms-5' style={{textDecoration:'none', color:'white'}}><i class="fa-solid fa-hand-point-right"></i> Font Awesome</Link>
          </div>
                </div>

                <div className="col-md-3 mt-4">
                <h4 className='text-center' style={{overflowY:"hidden"}}>Contact Us</h4>
            <div className="d-flex mb-3 mt-4">
              <input type="text" className='form-control rounded-3 ' placeholder='enter your email id'/>
              <button className='btn btn-outline-light rounded-3 ms-2'>Send</button>
            </div>
            <div className='d-flex justify-content-evenly align-items-center mt-4 '>
              <Link to={'https://www.instagram.com/criz.t1n/'} target='blank' style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-instagram fa-2x"></i></Link>
              <Link to={'https://twitter.com/_naughty_criz_'} target='blank' style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-twitter fa-2x"></i></Link>
              <Link to={'www.linkedin.com/in/christin-thomas-48919421b'} target='blank' style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-linkedin fa-2x"></i></Link>
              <Link to={'https://www.facebook.com/profile.php?id=100071308058217'}target='blank' style={{textDecoration:'none', color:'white'}}><i class="fa-brands fa-facebook fa-2x"></i></Link>
    
            </div>
                </div>

            </div>
    
        </div>
      
    </Container>
    <div className='bg-secondary w-100 mt-5 p-4'> <p className='mt-4 text-center mb-4 text-secondary-emphasis'><b>Copyright © 2023 media player. Built with React</b></p></div>
  </div>
    

  )
}

export default Footer