import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo3 from '../assets/images/logo3.png'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'

const Register = () => {

    const[login,setLogin]=useState({
        email:'',
        username:'',
        password:''
    })

    const [errors, setErrors] = useState({
      email: '',
      password: '',
    });

    const handleChange = (e)=>{
        e.preventDefault();
        setLogin({...login,[e.target.id]:e.target.value})
    }

    const validateEmail = (email) => {
      const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return pattern.test(email);
    };
  
    const validatePasswordStrength = (password) => {
      return password.length >= 8; 
    };


    const handleSubmit=(e)=>{
      e.preventDefault();
        // Validate email
    if (!validateEmail(login.email)) {
      setErrors({ ...errors, email: 'Invalid email format' });
      return;
    }

    // Validate password strength
    if (!validatePasswordStrength(login.password)) {
      setErrors({ ...errors, password: 'Password must be at least 8 characters long' });
      return;
    }

    // Clear previous validation errors
    setErrors({ email: '', password: '' });

    // If validation passes, proceed with registration
      console.log(`Email : ${login.email}`)
      console.log( `Password: ${login.password}`)
      console.log( `Username: ${login.username}`)
      toast.promise(
        new Promise((resolve) => {
          // Simulate some asynchronous operation
          setTimeout(() => {
            resolve('Sign up successfull!');
          }, 2000); // Adjust the delay as needed
        }),
        {
          loading:'Creating your account...',
          success: 'Sign up successfull!',
          error: 'An error occurred while signing in.',
        }
      ).then(() => {
        // Navigate to the next page after the toast is closed or after a delay
        setTimeout(() => {
          nav('/');
        }, 1000); // Adjust the delay as needed
      });

      }
      
    const nav=useNavigate()
    const handleRoute=(e)=>{
        nav('/')
    }
  return (
    <>
       <div><Toaster/></div>
    <div className="main d-flex-c">
         <form onSubmit={handleSubmit}>
             <div className="auth-form d-flex-c">
             <img src={logo3} style={{width:"30%"}} />
             <br/>
              <h3>Signup here!</h3>
                <input type="email " name="email" id="email" className='input-field' placeholder='Email' onChange={handleChange} autoFocus required/>
                {errors.email && <p className="error-text">{errors.email}</p>}
                <input type="username " name="username" id="username" className='input-field' placeholder='Username' onChange={handleChange} required/>
                <input type="password" name="password" id="password" className='input-field' placeholder='password' onChange={handleChange} required/>
                {errors.password && <p className="error-text">{errors.password}</p>}
                <button type="submit" className="auth-btn">SignUp</button>
                <p> <span className='text-link' onClick={handleRoute}><b>Already have an account, Login</b></span></p>
           </div>
          </form>
     
    </div>
    </>
  )
}

export default Register
