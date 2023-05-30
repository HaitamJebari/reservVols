import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signlog.css';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const history = useNavigate();

  async function sing() {

    setName('');
        setEmail('');
        setPassword('');
    let item = {
      "name": name,
      "email" : email,
      "password" : password  
    };
    console.log(item);

    let result = await fetch('http://localhost:8000/api/singUp', {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    result = await result.json();
    console.log('result', result);

    history('/');

  }

 return (
    <div className="login-box">
      <p>Sign Up</p>
      <form>
        <div className="user-box">
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Name</label>
        </div>
        <div className="user-box">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Email</label>
        </div>
        <div className="user-box">
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label>Password</label>
        </div>
        <button type="button" onClick={sing}>
      Submit
      </button>
  </form>
  <p>You already have account : <a href="/login" className="a2">Login</a></p>
</div>
  )
}
