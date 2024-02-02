import React, { useState } from 'react';
import axios from 'axios';
import './list.css'
import './Search.css'
import { Link } from 'react-router-dom';

const ViewAdmin = () => {
  const [admin_id, setAdmin_id] = useState('');
  const [foundAdmin, setFoundAdmin] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/Employee/HRDetail/${admin_id}`);
      const employee = response.data;
      setFoundAdmin(employee);
    } catch (error) {
      console.error(error);
      setFoundAdmin(null);
    }
  };

  return (
    
    <div className="employee-search-container">
      <br/>
      <input
        type="number"
        value={admin_id}
        onChange={(e) => setAdmin_id(e.target.value)}
        placeholder="Enter Admin ID"
      />
      <button className="search-button" onClick={handleSearch}>Search</button>
      <Link to="/EmployeeHome/EmpAction"><button className='return-button'> Return </button></Link>
      <br />
      {foundAdmin ? (
        <table className="table-striped">
          <thead>
            <th> Id </th>
            <th> Name </th>
            <th> PhoneNo</th>
            <th> Email </th>
          </thead>
          <tbody>
            <tr key={foundAdmin.hr_id}>
              <td> {foundAdmin.hr_id} </td>
              <td> {foundAdmin.hr_name} </td>
              <td>{foundAdmin.hr_phno}</td>
              <td>{foundAdmin.hr_email}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p className='no-employee'>No Admin found</p>
      )}
    </div>
  );
}

export default ViewAdmin