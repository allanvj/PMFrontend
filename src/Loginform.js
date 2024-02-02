import React, { useState } from 'react';
import axios from 'axios';
import './Start.css'
import './style.css'
import { useNavigate } from 'react-router-dom';


const Loginform = () => {
  const navigate = useNavigate();
  const [hr_id, setHr_id] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();

    const userdata = { hr_id, password};
    console.log(userdata);

    const det = await axios.get("http://localhost:8080/HRPage/AllHr",userdata); 
    const long = det.data;
    console.log(long);
    long.forEach(element => {
      if(element.hr_id === parseInt(hr_id) && element.password === password){
        sessionStorage.setItem("loginDetails", JSON.stringify(userdata));
        navigate("/Admin");
      }else{
        setError('Check Email and Password');
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
              name='hrId'
              value={hr_id}
              onChange={(e) => setHr_id(e.target.value)}
              className='form-value'
              autoComplete='off'
            />
          </div>
          <div className='margin-bottom'>
            <label htmlFor='password'>
              <strong>Password</strong>
            </label>
            <input
              type='password'
              placeholder='Enter Password'
              name='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='form-value'
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

export default Loginform;
