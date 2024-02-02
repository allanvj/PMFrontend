import React, { useState } from 'react';
import './Add.css';
import { Link } from 'react-router-dom';

const DeleteEmployee = () => {
  const [employeeId, setEmployeeId] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleDelete = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/HRPage/deleteEmp/${employeeId}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          setSuccessMessage('Employee deleted successfully');
          setErrorMessage('');
          setEmployeeId('');
        } else {
          setSuccessMessage('');
          setErrorMessage('Failed to delete employee');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setSuccessMessage('');
        setErrorMessage('An error occurred while deleting the employee');
      });
  };

  return (
    <div className="ad-container">
      <h2>Delete Employee</h2>
      <form>
        <div className="ad-form-group">
          <label>Employee ID:</label>
          <input
            type="text"
            placeholder="Enter Employee ID"
            className='ad-form-control'
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
          />
        </div>
        <div>
          <button className="ad-btn-danger" onClick={(e) => handleDelete(e)}>Delete Employee</button>

          <Link to="/Admin/Manage"><button className="ad-btn-success">Back </button> </Link>
        </div>
        {successMessage && <p>{successMessage}</p>}
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default DeleteEmployee;
