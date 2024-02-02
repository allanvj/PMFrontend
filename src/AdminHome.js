import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link, Outlet } from 'react-router-dom';

const AdminHome = () => {
  return (
    <div className="container-fluid">
      <div className="row no-wrap">
        <div className="sidebar col-auto col-md-3 col-xl-2">
          <div className="sidebar-content">
            <span className="admin-title">Admin</span>
            <ul className="sidebar-menu">
              <li className="menu-item">
                <Link to="" className="menu-link">
                  <i className="icon bi-speedometer2"></i>
                  <span className="menu-text">Dashboard</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/Admin/Manage" className="menu-link">
                  <i className="icon bi-people"></i>
                  <span className="menu-text">Manage Employees</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/Admin/profile" className="menu-link">
                  <i className="icon bi-person"></i>
                  <span className="menu-text">Profile</span>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/" className="menu-link">
                  <i className="icon bi-power"></i>
                  <span className="menu-text">Logout</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col content-section">
          <div className="heading">
            <h4>Personnel Management System</h4>
          </div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;