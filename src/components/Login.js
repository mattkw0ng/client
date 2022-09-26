import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../Login.css'

async function loginUser(credentials) {
  return fetch('http://localhost:5000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    setToken(token);
  }

  return(
    <div className="login-wrapper mt-5">
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={e => setUserName(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
        </div>
        <div className='form-group'>
          <button type="submit" className='btn btn-primary'>Submit</button>
        </div>
      </form>
    </div>
  )
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired
}