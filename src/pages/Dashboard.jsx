import React from 'react'
import Header from '../components/Header'
import MyProjects from '../components/MyProjects'
import Profile from '../components/Profile'

function Dashboard() {
  return (
    <>

        <Header Dashboard/>

        <div className='container'>
          <h3 className='mt-3 '>Welcome, <span className='text-primary'>User</span>!</h3>

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