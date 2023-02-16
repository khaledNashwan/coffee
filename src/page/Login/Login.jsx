import React, { useState } from 'react'
import './login.css'
import loginphote from '../../image/WhatsApp Image 2022-12-18 at 14.58.10.jpg'
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    
    const formHandler = (e) => {
        e.preventDefault()
        if (email.trim() === "") return toast.error("Email is requred");
    if (password.trim() === "") return toast.error("Password is requred");
            console.log({email , password})
    }

        
    
    return (
        <div className='contianer login_contianer'>
            <ToastContainer />
            <div className="login_left">
                <div className="login_img">
                    <img src={loginphote} alt="login" />
                    </div>
                <h1 className='login_hea'>Ristretto Coffee Lab</h1>
            </div>
            <div className="login_right">
    <form onSubmit={formHandler} className="contact-for">
    <input value={email} onChange={(e) => setEmail(e.target.value)} className='input_log' type="email" name = "Email " placeholder = "your Email Address"  />
     <input value={password} onChange={(e) => setPassword(e.target.value)}  className='input_log' type="password" name ="Password" placeholder = "Password"  />
    <Link to='/Home' className="btn_login" type="submit">
        Log In
    </Link>
    <p className="parag_login" >Forget Password ?</p>
        <hr
        style={{
            backgroundColor: '#4a4a4a',
            height: 2
        }}
/>

<Link to='/Register' className="btn_login" type="submit">Create new Account </Link>

</form> 
            </div>
      </div>
  )
}

export default Login