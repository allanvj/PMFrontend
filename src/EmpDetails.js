import React, { useState } from 'react';
import axios from 'axios';
import './list.css'
import './Search.css'
import { Link } from 'react-router-dom';

const EmpDetails = () => {
  const [employee_id, setEmployee_id] = useState('');
  const [foundEmployee, setFoundEmployee] = useState(null);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/Employee/ViewDetail/${employee_id}`);
      const employee = response.data;
      setFoundEmployee(employee);
    } catch (error) {
      console.error(error);
      setFoundEmployee(null);
    }
  };

  return (
    <div className="employee-search-container">
      <br/>
      <input
        type="number"
        value={employee_id}
        onChange={(e) => setEmployee_id(e.target.value)}
        placeholder="Enter employee ID"
      />
      <button className="search-button" onClick={handleSearch}>Search</button>
      <Link to="/EmployeeHome/EmpAction"><button className='return-button'> Return </button></Link>
      <br />
      {foundEmployee ? (
        <table className="table-striped">
          <thead>
            <th> Id </th>
            <th> Name </th>
            <th> PhoneNo</th>
            <th> Hours Worked(Week) </th>
            <th> Employee Address </th>
            <th> Salary </th>
            <th> Performance </th>
            <th> Department </th>
          </thead>
          <tbody>
            <tr key={foundEmployee.employee_id}>
              <td> {foundEmployee.employee_id} </td>
              <td> {foundEmployee.emp_name} </td>
              <td>{foundEmployee.phone_no}</td>
              <td>{foundEmployee.hours_worked_pw}</td>
              <td>{foundEmployee.address}</td>
              <td>{foundEmployee.salary}</td>
              <td>{foundEmployee.performance}</td>
              <td>{foundEmployee.department}</td>
            </tr>
          </tbody>
        </table>
      ) : (
        <p className='no-employee'>No employee found</p>
      )}
    </div>
  );
}

export default EmpDetails