import React, { useEffect, useState } from 'react';
import './Profile.css';

export const AdminProfile = () => {
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
    <div>
      
      <div className="App">
        <table>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>PhoneNo</th>
            <th>Email</th>
          </tr>
          <tr>
            
            <td>{userDetails.hr_id }</td>
            <td>{userDetails.hr_name }</td>
            <td>{ userDetails.hr_phno}</td>
            <td>{ userDetails.hr_email}</td>
          </tr>
        </table>
      </div>
      <div className='div'>
      </div>
    </div>
  )
}
export default AdminProfile;