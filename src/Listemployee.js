import React, { useState, useEffect } from 'react'
import './list.css'
import { Link } from 'react-router-dom'

const ListEmployee = () => {

    const [employees, setEmployees] = useState([])

    const getEmployee = async () => {
        try {
            const response = await fetch('http://localhost:8080/HRPage/AllEmployee');
            const jsonData = await response.json();
            setEmployees(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {

        getEmployee();
    }, [])




    return (
        <div className="container-list">
            <h2 className="text-list"> List Employees </h2>
            <Link to="/Admin/Manage"><button className='btn-list'> Return </button></Link>
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
        </div>
    )
}

export default ListEmployee