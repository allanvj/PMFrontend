import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Add.css'

const AddReport = () => {
    const [employee_id, setEmployee_id] = useState('')
    const [emp_name, setEmp_name] = useState('')
    const [changes, setChanges] = useState('')
    const [updated_info, setUpdated_info] = useState('')
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const saveReport = (e) => {
        e.preventDefault()
        const report = { employee_id, emp_name, changes, updated_info }
        console.log(report);
        if(employee_id==="" || emp_name===""||changes===""||updated_info===""){
            alert('Fields cannot be empty');
            return
        }
        fetch("http://localhost:8080/Employee/ReportUpdate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(report)

        }).then((response) => {
            if (response.ok) {
            setSuccessMessage('Report added successfully!');
            setErrorMessage('');
            resetFormFields();
        }else {
                setSuccessMessage('');
                setErrorMessage('Failed to add report, check the details correctly');
                resetFormFields();
        }

        })
            .catch((error) => {
                setSuccessMessage('');
                setErrorMessage('Failed to add Report');
                console.error(error);
                resetFormFields();
            });
    };

    const resetFormFields = () => {
        setEmployee_id('');
        setEmp_name('');
        setChanges('');
        setUpdated_info('');
    };

    return (
        <div>
            <br />
            <div className="ad-container">
                <div className="ad-row">
                    <div className="custom-card">
                        <h2 className='text-ad'>Add Report</h2>
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
                                        placeholder="Enter Employeee Name"
                                        name="EmpName"
                                        className="ad-form-control"
                                        value={emp_name}
                                        onChange={(e) => setEmp_name(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="ad-form-group">
                                    <label className="ad-form-label"> Changes In  :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Changes In"
                                        name="Changes"
                                        className="ad-form-control"
                                        value={changes}
                                        onChange={(e) => setChanges(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="ad-form-group">
                                    <label className="ad-form-label"> Updated Info :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter Updated Info"
                                        name="UpdatedInfo"
                                        className="ad-form-control"
                                        value={updated_info}
                                        onChange={(e) => setUpdated_info(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className="ad-btn-success" onClick={(e) => saveReport(e)} >Submit </button>
                                <Link to="/EmployeeHome/EmpAction"><button className="ad-btn-danger">Back </button> </Link>
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

export default AddReport