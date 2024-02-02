import React from 'react'
import './EmployeeServices.css'
import { Link } from 'react-router-dom'

const EmpServices = () => {
    return (
        <div className='backg-emp'>
            <div className='main-emp'>

                <Link to="/EmployeeHome/EmpAction/empdetails" className='btn-emp'>View Employee's Detail</Link>
                <Link to="/EmployeeHome/EmpAction/admin" className='btn-emp'>View Admin</Link>
                <Link to="/EmployeeHome/EmpAction/reportchange" className='btn-emp'>Report Changes</Link>
            </div>
        </div>
    )
}

export default EmpServices