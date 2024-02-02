import React, { useState } from 'react';
import axios from 'axios';
import './Search.css'
import { Link } from 'react-router-dom';

const EmpByPerform = () => {
  const [performance, setPerformance] = useState('');
  const [foundEmployees, setFoundEmployees] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/HRPage/performance/${performance}`);
      const employees = response.data;
      setFoundEmployees(employees);
    } catch (error) {
      console.error(error);
      setFoundEmployees([]);
    }
  };

  return (
    <div className="employee-search-container">
      <br/>
      <input
        type="text"
        value={performance}
        onChange={(e) => setPerformance(e.target.value)}
        placeholder="Enter Performance"
      />
      <button className="search-button" onClick={handleSearch}>Search</button>

      <Link to="/Admin/Manage"><button className='return-button'> Return </button></Link>
      <br />
      {foundEmployees.length > 0 ? (
        <table className="table-striped">
          <thead>
            <th> Id </th>
            <th> Name </th>
            <th> PhoneNo</th>
            <th> Hours Worked(Week) </th>
            <th> Employee Address </th>
            <th> Email </th>
            <th> Salary </th>
            <th> Performance </th>
            <th> Department </th>
          </thead>
          <tbody>
            {
              foundEmployees.map(
                employee =>
                  <tr key={employee.employee_id}>
                    <td> {employee.employee_id} </td>
                    <td> {employee.emp_name} </td>
                    <td>{employee.phone_no}</td>
                    <td>{employee.hours_worked_pw}</td>
                    <td>{employee.address}</td>
                    <td>{employee.email}</td>
                    <td>{employee.salary}</td>
                    <td>{employee.performance}</td>
                    <td>{employee.department}</td>
                  </tr>
              )
            }
          </tbody>
        </table>

      ) : (
        <p className='no-employee'>No employees found</p>
      )}
    </div>
  );
}


export default EmpByPerform