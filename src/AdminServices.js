import React from 'react'
import './services.css'
import { Link } from 'react-router-dom'

const AdminServices = () => {
    return (
        <div className='backg'>
            <div className='main-ad'>

                <Link to='/Admin/Manage/AddEmp' className='btn-emp'>Add Employee</Link>
                <Link to='/Admin/Manage/ViewEmp' className='btn-emp'>View All Employees</Link>
                <Link to='/Admin/Manage/UpdateEmp' className='btn-emp'>Update Employee Details</Link>
                <Link to='/Admin/Manage/DeleteEmp' className='btn-emp'>Delete Employee</Link>
            </div>
            <marquee behavior="scroll" direction="left">
            <h4> Admin Actions</h4>
        </marquee>
            <div className='main-ad'>
                <Link to='/Admin/Manage/AddAdmin' className='btn-emp'>Add Admin Detail</Link>
                <Link to='/Admin/Manage/allAdmin' className='btn-emp'>View All Admin </Link>
                <Link to='/Admin/Manage/FindEmp' className='btn-emp'>Find Employee</Link>
                <Link to='/Admin/Manage/report' className='btn-emp'>View Reports</Link>
                <Link to='/Admin/Manage/FindPerform' className='btn-emp'>Search By Performance</Link>
                <Link to='/Admin/Manage/FindDept' className='btn-emp'>Search By Department</Link>
                <Link to='/Admin/Manage/Project' className='btn-emp'>Search For Project</Link>
            </div>
        </div>
    )
}

export default AdminServices