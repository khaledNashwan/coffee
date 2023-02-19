import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './register.css'

const Register = () => {
      const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
  return (
    <>
      <div className="contianer">
        <h1 className="Register_hea">Register</h1>
        <div className="contianer auth-form-container">
          <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Full name</label>
            <input
              className="auth"
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
              id="name"
              placeholder="full Name"
            />
            <label htmlFor="email">email</label>
            <input
              className="auth"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="youremail@gmail.com"
              id="email"
              name="email"
            />
            <label htmlFor="password">password</label>
            <input
              className="auth"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              type="password"
              placeholder="********"
              id="password"
              name="password"
            />
            <Link to="/" className="btn_submit" type="submit">
              Register
            </Link>
          </form>
          <div className="login_regi">
            <p>
              Are you Registed ?<Link to="/">Log In</Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register

