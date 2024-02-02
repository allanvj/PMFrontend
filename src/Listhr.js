import React, { useEffect, useState } from 'react'
import './list.css'
import { Link } from 'react-router-dom';

const Listhr = () => {
    const [admins, setAdmins] = useState([])

    const getAdmin = async () => {
        try {
            const response = await fetch('http://localhost:8080/HRPage/AllHr');
            const jsonData = await response.json();
            setAdmins(jsonData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {

        getAdmin();
    }, [])

    return (
        <div className="container-list">
            <h2 className="text-list"> List Admins </h2>
            <Link to="/Admin/Manage"><button className='btn-list'> Return </button></Link>
            <table className="table-striped">
                <thead>
                    <th> Id </th>
                    <th> Name </th>
                    <th> PhoneNo</th>
                    <th> Email </th>
                </thead>
                <tbody>
                    {
                        admins.map(
                            admin =>
                                <tr key={admin.hr_id}>
                                    <td> {admin.hr_id} </td>
                                    <td> {admin.hr_name} </td>
                                    <td>{admin.hr_phno}</td>
                                    <td>{admin.hr_email}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Listhr