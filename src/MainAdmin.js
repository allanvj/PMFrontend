import React, { useEffect, useState } from 'react';
import './MainAdmin.css';

export const MainAdmin = () => {
  const [userDetails, setUserDetails] = useState('');
  useEffect(() =>{
  const value=sessionStorage.getItem("loginDetails");
  const use=JSON.parse(value);
  console.log(use);
  fetch(`http://localhost:8080/Employee/HRDetail/${use.hr_id}`)
  .then(response => response.json())
  .then(data => {
    setUserDetails(data);
  })
  .catch(error => {
    console.error('Error retrieving user details:', error);
  });
}, []);
  return (
    <div className='high'>
      <div className='main-box'>
        <div className='side-box'>
          <div className='text'>
            <h4>Admin ID</h4>
          </div>
          <hr />
          <div>
            <h5>{userDetails.hr_id }</h5>
          </div>
        </div>
        <div className='side-box'>
          <div className='text'>
            <h4>Name</h4>
          </div>
          <hr />
          <div>
            <h5> {userDetails.hr_name }</h5>
          </div>


        </div>
      </div>
      <div className="details">
        <h3> Admin Service Control</h3>
      </div>
    </div>
  )
}
