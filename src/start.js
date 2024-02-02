import React from 'react'
import './Start.css';
import './style.css';
import { Link } from 'react-router-dom';

function Start() {
  return (
    <div className='loginPage'>
      <div className='loginForm'>
        <h2>Login As</h2>
        <div className='container'>
          <Link to='/Loginform'><button className='btn1' >Admin</button></Link>
          <Link to='/LoginformEmp'><button className='btn2' >Employee</button></Link>
        </div>
      </div>
    </div>
  )
}

export default Start