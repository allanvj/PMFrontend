import React, { useState } from 'react';
import axios from 'axios';
import './Start.css'
import './style.css'
import { useNavigate } from 'react-router-dom';

const LoginformEmp = () => {
  const navigate = useNavigate();
  const [employee_id, setEmployee_id] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    const userdata = { employee_id, email};
    console.log(userdata);

    const det = await axios.get("http://localhost:8080/HRPage/AllEmployee",userdata); 
    const long = det.data;
    console.log(long);
    long.forEach(element => {
      if(element.employee_id === parseInt(employee_id) && element.email === email){
        sessionStorage.setItem("loginDetails", JSON.stringify(userdata));
        navigate("/EmployeeHome");
      }else{
        setError('Check ID and Email');
      }
      
    });

      
    }

  return (
    <div className='loginPage'>
      <div className='loginForm'>
        <div className='text-value'>{error && error}</div>
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className='margin-bottom'>
            <label htmlFor='number'>
              <strong>ID</strong>
            </label>
            <input
              type='number'
              placeholder='Enter ID'
              name='employeeId'
              value={employee_id}
              onChange={(e) => setEmployee_id(e.target.value)}
              className='form-value'
              autoComplete='off'
            />
          </div>
          <div className='margin-bottom'>
            <label htmlFor='email'>
              <strong>Email</strong>
            </label>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='form-value'
              autoComplete='off'
            />
          </div>
          <button type='submit' className='btn-value'>
            Log in
          </button>
          <p>You agree to our terms and policies</p>
        </form>
      </div>
    </div>
  );
};

export default LoginformEmp;
