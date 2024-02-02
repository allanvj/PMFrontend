import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Add.css'

const AddAdmin = () => {
    const [hr_id, setHr_id] = useState('')
    const [hr_name, setHr_name] = useState('')
    const [hr_phno, setHr_phno] = useState('')
    const [hr_email, setHr_mail] = useState('')
    const [password, setPassword] = useState('')
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const saveAdmin = (e) => {
        e.preventDefault()
        const admin = { hr_id, hr_name, hr_phno, hr_email, password }
        console.log(admin);
        fetch("http://localhost:8080/HRPage/HRInfo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(admin)

        }).then((response) => {
            if (response.ok) {
            setSuccessMessage('Admin added successfully!');
            setErrorMessage('');
            resetFormFields();
            }else {
            setSuccessMessage('');
            setErrorMessage('Failed to add Admin, check the details correctly');
            resetFormFields();
            }
        })
            .catch((error) => {
                setSuccessMessage('');
                setErrorMessage('Failed to add Admin');
                console.error(error);
                resetFormFields();
            });
    };
    const resetFormFields = () => {
        setHr_id('');
        setHr_name('');
        setHr_phno('');
        setHr_mail('');
        setPassword('');
    };

    return (
        <div>
            <br />
            <div className="ad-container">
                <div className="ad-row">
                    <div className="custom-card">
                        <h2 className='text-ad'>Add Admin</h2>
                        <div className="ad-card-body">
                            <form>
                                <div className="ad-form-group">
                                    <label className="ad-form-label"> Admin ID :</label>
                                    <input
                                        type="number"
                                        placeholder="Enter HR Id"
                                        name="hrId"
                                        className="ad-form-control"
                                        value={hr_id}
                                        onChange={(e) => setHr_id(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="ad-form-group">
                                    <label className="ad-form-label"> Admin Name :</label>
                                    <input
                                        type="text"
                                        placeholder="Enter HR Name"
                                        name="HrName"
                                        className="ad-form-control"
                                        value={hr_name}
                                        onChange={(e) => setHr_name(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="ad-form-group">
                                    <label className="ad-form-label"> Phone Number :</label>
                                    <input
                                        type="number"
                                        placeholder="Enter Phone No"
                                        name="hrPhNo"
                                        className="ad-form-control"
                                        value={hr_phno}
                                        onChange={(e) => setHr_phno(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="ad-form-group">
                                    <label className="ad-form-label"> Email :</label>
                                    <input
                                        type="email"
                                        placeholder="Enter Email"
                                        name="HrEmail"
                                        className="ad-form-control"
                                        value={hr_email}
                                        onChange={(e) => setHr_mail(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <div className="ad-form-group">
                                    <label className="ad-form-label"> Password :</label>
                                    <input
                                        type="password"
                                        placeholder="Enter Password"
                                        name="Paaword"
                                        className="ad-form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    >
                                    </input>
                                </div>

                                <button className="ad-btn-success" onClick={(e) => saveAdmin(e)} >Submit </button>
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

export default AddAdmin