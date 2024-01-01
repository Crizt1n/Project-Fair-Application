import React from 'react'
import Header from '../components/Header'
import MyProjects from '../components/MyProjects'
import Profile from '../components/Profile'
import { useState } from 'react'
import { useEffect } from 'react'

function Dashboard() {

  const [username,setUsername] = useState("")
  useEffect(()=>{
    setUsername(JSON.parse(sessionStorage.getItem("existingUser")).username)
  },[])
  console.log(username);
  return (
    <>

        <Header Dashboard/>

        <div className='container'>
          <h3 className='mt-3 '>Welcome, <span className='text-primary fs-2'>{username} </span> !</h3>

          <div className="row">
            <div className="col-md-9 mt-2">
              <MyProjects/>
            </div>
            <div className="col-md-3 mt-2">
              <Profile/>
            </div>
          </div>

        </div>


    </>
  )
}

export default Dashboard