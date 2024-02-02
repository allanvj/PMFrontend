import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Add.css'

const AddEmployee = () => {
    const [employee_id, setEmployee_id] = useState('')
    const [emp_name, setEmp_name] = useState('')
    const [phone_no, setPhone_no] = useState('')
    const [hours_worked_pw, setHours_worked_pw] = useState('')
    const [address, setAddress] = useState('')
    const [email, setEmail] = useState('')
    const [salary, setSalary] = useState('')
    const [performance, setPerformance] = useState('')
    const [department, setDepartment] = useState('')
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const saveEmployee = (e) => {
        e.preventDefault();
        const employee = { employee_id, emp_name, phone_no, hours_worked_pw, address, email, salary, performance, department }
        console.log(employee);
        if(employee_id==="" || emp_name===""||phone_no===""||hours_worked_pw===""||address===""||email===""||salary===""||performance===""||department===""){
            alert('Fields cannot be empty');
            return
        }
        fetch("http://localhost:8080/HRPage/AddEmp", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(employee)
            

        }).then((response) => {
            if (response.ok) {
            setSuccessMessage('Employee added successfully!');
            setErrorMessage('');
            resetFormFields();
        } else {
            setSuccessMessage('');
            setErrorMessage('Failed to add employee, check the details correctly');
            resetFormFields();
            }
        })
            .catch((error) => {
                setSuccessMessage('');
                setErrorMessage('Failed to add Employee');
                console.error(error);
                resetFormFields();
            });
    };
    const resetFormFields = () => {
        setEmployee_id('');
        setEmp_name('');
        setPhone_no('');
        setHours_worked_pw('');
        setAddress('');
        setEmail('');
        setSalary('');
        setPerformance('');
        setDepartment('');
    };

    return (
        <div>
            <br />
            <div className="ad-container">
                <div className="ad-row">
                    <div className="custom-card">
                        <h2 className='text-ad'>Add Employee</h2>
                        <div className="ad-card-body">
                            <form>
                                <div className="ad-form-group">
                                    <label className="ad-form-label"> Employee ID :</label>
                                    <input
                                        type="number"
                                        placeholder="Enter Employee Id"
                                        name="employeeId"
                                        className="ad-form-control"
                                        value={employee_id}
                                        onChange={(e) => setEmployee_id(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="ad-form-group">
                                    <label className="ad-form-label"> Employee Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Employee Name"
                                        name="EmpName"
                                        className="ad-form-control"
                                        value={emp_name}
                                        onChange={(e) => setEmp_name(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="ad-form-group">
                                    <label className="ad-form-label"> Phone Number :</label>
                                    <input
                                        type="number"
                                        placeholder="Enter Phone No"
                                        name="PhoneNo"
                                        className="ad-form-control"
                                        value={phone_no}
                                        onChange={(e) => setPhone_no(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="ad-form-group">
                                    <label className="ad-form-label"> Hours Worked(Week) :</label>
                                    <input
                                        type="number"
                                        placeholder="Enter Hours Worked"
                                        name="Hoursworkedpw"
                                        className="ad-form-control"
                                        value={hours_worked_pw}
                                        onChange={(e) => setHours_worked_pw(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="ad-form-group">
                                    <label className="ad-form-label"> Address :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Address"
                                        name="Address"
                                        className="ad-form-control"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="ad-form-group">
                                    <label className="ad-form-label"> Email :</label>
                                    <input
                                        type="email"
                                        placeholder="Enter Email"
                                        name="Email"
                                        className="ad-form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="ad-form-group">
                                    <label className="ad-form-label"> Enter Salary :</label>
                                    <input
                                        type="number"
                                        placeholder="Enter Salary"
                                        name="Salary"
                                        className="ad-form-control"
                                        value={salary}
                                        onChange={(e) => setSalary(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="ad-form-group">
                                    <label className="ad-form-label"> Performance :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Performance"
                                        name="Performance"
                                        className="ad-form-control"
                                        value={performance}
                                        onChange={(e) => setPerformance(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="ad-form-group">
                                    <label className="ad-form-label"> Department :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Department"
                                        name="Department"
                                        className="ad-form-control"
                                        value={department}
                                        onChange={(e) => setDepartment(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className="ad-btn-success" onClick={(e) => saveEmployee(e)} >Submit </button>
                                <Link to="/Admin/Manage"><button className="ad-btn-danger">Back </button> </Link>
                                {successMessage && <p>{successMessage}</p>}
                                {errorMessage && <p>{errorMessage}</p>}
                            </form>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default AddEmployee