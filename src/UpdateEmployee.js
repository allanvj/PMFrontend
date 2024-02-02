import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Add.css'

const UpdateEmployee = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [employee, setEmployee] = useState({
    emp_name: '',
    phone_no: '',
    hours_worked_pw: '',
    address: '',
    email: '',
    salary: '',
    performance: '',
    department: '',
  });

  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleUpdate = (event) => {
    event.preventDefault();

    fetch(`http://localhost:8080/HRPage/UpdateEmp/${employeeId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(employee),
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage('Employee details updated successfully');
          setErrorMessage('');
        } else {
          setSuccessMessage('');
          setErrorMessage('Failed to update employee details');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setSuccessMessage('');
        setErrorMessage('An error occurred while updating employee details');
      });
  };

  useEffect(() => {
    if (employeeId) {
      fetch(`http://localhost:8080/HRPage/Emp/${employeeId}`)
        .then((response) => response.json())
        .then((data) => {
          setEmployee(data);
        })
        .catch((error) => {
          console.error('Error:', error);
          setEmployee({
            emp_name: '',
            phone_no: '',
            hours_worked_pw: '',
            address: '',
            email: '',
            salary: '',
            performance: '',
            department: '',
          });
        });
    }
  }, [employeeId]);

  return (
    <div className="custom-card">
      <h2 className='text-word'>Update Employee Details</h2>
      <br />
      <form onSubmit={handleUpdate}>
        <div className="ad-form-group">
          <label className="ad-form-label">Employee ID:</label>
          <input
            type="number"
            value={employeeId}
            className="ad-form-control"
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </div>
        {employeeId && (
          <>
            <div className="ad-form-group">
              <label className="ad-form-label">Name:</label>
              <input
                type="text"
                name="emp_name"
                value={employee.emp_name}
                className="ad-form-control"
                onChange={handleInputChange}
              />
            </div>
            <div className="ad-form-group">
              <label className="ad-form-label">Phone:</label>
              <input
                type="number"
                name="phone_no"
                value={employee.phone_no}
                className="ad-form-control"
                onChange={handleInputChange}
              />
            </div>
            <div className="ad-form-group">
              <label className="ad-form-label">Hours Worked(Week):</label>
              <input
                type="number"
                name="hours_worked_pw"
                value={employee.hours_worked_pw}
                className="ad-form-control"
                onChange={handleInputChange}
              />
            </div>
            <div className="ad-form-group">
              <label className="ad-form-label">Address:</label>
              <input
                type="text"
                name="address"
                value={employee.address}
                className="ad-form-control"
                onChange={handleInputChange}
              />
            </div>
            <div className="ad-form-group">
              <label className="ad-form-label">Email:</label>
              <input
                type="email"
                name="email"
                value={employee.email}
                className="ad-form-control"
                onChange={handleInputChange}
              />
            </div>
            <div className="ad-form-group">
              <label className="ad-form-label">Salary:</label>
              <input
                type="number"
                name="salary"
                value={employee.salary}
                className="ad-form-control"
                onChange={handleInputChange}
              />
            </div>
            <div className="ad-form-group">
              <label className="ad-form-label">Performance:</label>
              <input
                type="text"
                name="performance"
                value={employee.performance}
                className="ad-form-control"
                onChange={handleInputChange}
              />
            </div>
            <div className="ad-form-group">
              <label className="ad-form-label">Department:</label>
              <input
                type="text"
                name="department"
                value={employee.department}
                className="ad-form-control"
                onChange={handleInputChange}
              />
            </div>
            <button type="submit" className="ad-btn-success">Update Employee</button>
            <Link to="/Admin/Manage"><button className="ad-btn-danger">Back </button> </Link>
          </>
        )}
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default UpdateEmployee;
