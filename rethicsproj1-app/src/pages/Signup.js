import React, { useState } from 'react';
import { signup } from '../services/auth';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const user = await signup(name, email, password);
      console.log('Signed up user:', user);
      navigate('/login'); // Redirect to login  after signup
    console.log('Role:', name); 
    } catch (error) {
      console.error('Signup failed:', error);
      alert("Account already exist, please Login  instead!")
    }
  };

  return (
    <div className="container mt-5">
      <h2>Signup</h2>
      <form onSubmit={handleSignup}>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required={true}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required={true}
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required={true}
          />
        </div>
       
        <button type="submit" className="btn btn-primary">Signup</button>
      </form>
     
      <p>Already have an account? please <a href='/login'><h3>login</h3></a></p>
    </div>
  );
};

export default Signup;




