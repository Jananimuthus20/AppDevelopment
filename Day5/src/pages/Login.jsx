import React from 'react'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
import '../assets/CSS/app.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import logo3 from '../assets/images/logo3.png'
import { login } from '../redux/userSlice';
import image_bg1 from '../assets/images/image-bg1.png';



const Login = () => {
  const dispatch = useDispatch();
    const[login1,setLogin1]=useState({
        email:'',
        password:''
    })

    const handleChange = (e)=>{
        e.preventDefault();
        setLogin1({...login1,[e.target.id]:e.target.value})
    }

    const [emailError, setEmailError] = useState('');

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  
    const handleSubmit=(e)=>{
    e.preventDefault();
    
  
    // Validate email
    if (!validateEmail(login1.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setEmailError('');

    // Proceed with login
   
    console.log(`Email : ${login1.email}`)
    console.log( `Password: ${login1.password}`)

    dispatch(login({
      email :login1.email
    }))

    toast.promise(
      new Promise((resolve) => {
        // Simulate some asynchronous operation
        setTimeout(() => {
          resolve('Login successfull!');
        }, 2000); // Adjust the delay as needed
      }),
      {
        loading:'Creating your account...',
        success: 'Login successfull!',
        error: 'An error occurred while signing in.',
      }
    ).then(() => {
      // Navigate to the next page after the toast is closed or after a delay
      setTimeout(() => {
        nav('/home');
      }, 1000); // Adjust the delay as needed
    });


    };

    const nav=useNavigate()
    const handleRoute=(e)=>{
        nav('/register')
    }
  return (
    <>
    <div><Toaster/></div>
    {/*<img src={image_bg1} style={{position:"absolute",width:"31%",top:"10px"}}/>*/}
    <div className="main d-flex-c">
         <form onSubmit={handleSubmit}>
             <div className="auth-form d-flex-c">
             <img src={logo3} style={{width:"30%"}} />
             <br/>
              <h3>Login here!</h3>
                <input type="email " name="email" id="email" className='input-field' placeholder='Email' onChange={handleChange} autoFocus />
                {emailError && <p className="error-text">{emailError}</p>}
                <input type="password" name="password" id="password" className='input-field' placeholder='password' onChange={handleChange} />
                <button type="submit" className="auth-btn">Login</button>
                <p> <span className='text-link' onClick={handleRoute}><b>New user, click here to signup</b></span></p>
           </div>           
          </form>     
    </div>
    </>
  )
}

export default Login
