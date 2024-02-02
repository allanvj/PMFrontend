import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './project.css'

const ProjectSelect = () => {
    const [employees, setEmployees] = useState([]);
    const [hours_worked_pw, setHours_worked_pw] = useState('');
    const [performance, setPerformance] = useState('');
    const [department, setDepartment] = useState('');

    const fetchEmployees = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/ProjectSelect/Filter/${hours_worked_pw}/${performance}/${department}`);
            const foundemployees = response.data;
            setEmployees(foundemployees);
        } catch (error) {
            console.error(error);
            setEmployees([]);
        }
    };

    return (
        <div className='major' >
            <br/>
            <h2 className='h-p'>Employee List</h2>
            <div className='proj-container'>
                <label className='label-p'> Hours Worked: </label>
                <input type="number" value={hours_worked_pw} onChange={(e) => setHours_worked_pw(e.target.value)} />

                <label className='label-p'>Performance: </label>
                <input type="text" value={performance} onChange={(e) => setPerformance(e.target.value)} />

                <label className='label-p'>Department: </label>
                <input type="text" value={department} onChange={(e) => setDepartment(e.target.value)} />
            </div>
            <div className='bttn'>
                <button onClick={fetchEmployees} className='search-button-p'>Search</button>
                <Link to="/Admin/Manage"><button className='return-button-p'> Return </button></Link>
            </div>
            <br />
            {employees.length > 0 ? (
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
                            employees.map(
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
                <p className='no-employee-p'>No employees found</p>
            )}
        </div>
    );
};


export default ProjectSelect;