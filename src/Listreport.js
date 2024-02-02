import React, { useEffect, useState } from 'react'
import './list.css'
import { Link } from 'react-router-dom'





const Listreport = () => {

  const [employees, setEmployees] = useState([])

  const viewReport = async () => {
    try {
      const response = await fetch('http://localhost:8080/HRPage/report');
      const jsonData = await response.json();
      setEmployees(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  useEffect(() => {

    viewReport();
  }, [])
  return (
    <div className="container-list">
      <h2 className="text-list"> List Reports </h2>
      <Link to="/Admin/Manage"><button className='btn-list'> Return </button></Link>
      <table className="table-striped">
        <thead>
          <th> Report No </th>
          <th> Employee Id </th>
          <th> Employee Name </th>
          <th> Changes In </th>
          <th> Updated Info </th>
        </thead>
        <tbody>
          {
            employees.map(
              employee =>
                <tr key={employee.report_no}>
                  <td> {employee.report_no} </td>
                  <td> {employee.employee_id} </td>
                  <td>{employee.emp_name}</td>
                  <td>{employee.changes}</td>
                  <td>{employee.updated_info}</td>
                </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}

export default Listreport