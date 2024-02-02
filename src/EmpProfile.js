import React, { useEffect, useState } from 'react'
import './Profile.css'

const EmpProfile = () => {
  const [userDetails, setUserDetails] = useState('');
  useEffect(() =>{
  const value=sessionStorage.getItem("loginDetails");
  const use=JSON.parse(value);
  console.log(use);
  fetch(`http://localhost:8080/HRPage/Emp/${use.employee_id}`)
  .then(response => response.json())
  .then(data => {
    setUserDetails(data);
  })
  .catch(error => {
    console.error('Error retrieving user details:', error);
  });
}, []);
  return (
    <div>
      <div className="App">
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>PhoneNo</th>
            <th>Hours Worked(Week)</th>
            <th>Address</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Performance</th>
            <th>Department</th>
          </tr>
          <tr className='tdata'>
            <td>{userDetails.employee_id}</td>
            <td>{userDetails.emp_name}</td>
            <td>{userDetails.phone_no}</td>
            <td>{userDetails.hours_worked_pw}</td>
            <td>{userDetails.address}</td>
            <td>{userDetails.email}</td>
            <td>{userDetails.salary}</td>
            <td>{userDetails.performance}</td>
            <td>{userDetails.department}</td>
          </tr>
        </table>
      </div>
      <div className='div'>
      </div>
    </div>
  )
}

export default EmpProfile