import React from 'react'
import { useState } from 'react'
import { Toaster } from 'react-hot-toast'
import toast from 'react-hot-toast'
import '../assets/CSS/app.css'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import logo3 from '../assets/images/logo3.png'
import { userLogin } from '../service/api'
import { login } from '../redux/userSlice';
import image_bg1 from '../assets/images/image-bg1.png';
import Topbar from '../components/Topbar'
import login_logo from '../assets/images/login_logo.gif'

const Login=()=> {
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
  
    const handleSubmit=async(e)=>{
    e.preventDefault();


    const res = await userLogin(login1);
        if ((res.status) == "200" && (res.data.role)== "USER")  {
         
      
            console.log(res.data);

            localStorage.setItem('Token', res.data.token);
            localStorage.setItem('Role', res.data.role);
            localStorage.setItem('xuserEmail', res.data.email);
            localStorage.setItem('xuserId', res.data.uid);

            dispatch(login({
              email :login1.email
            }))

            toast.promise(
              new Promise((resolve) => {
                // Simulate some asynchronous operation
                setTimeout(() => {
                  resolve('successfully Logged in!');
                }, 2000); // Adjust the delay as needed
              }),
              {
                loading:'Creating your account...',
                success: 'successfully logged in!',
                error: 'An error occurred while signing in.',
              }
            ).then(() => {
              // Navigate to the next page after the toast is closed or after a delay
              setTimeout(() => {
                nav('/dashboard');
              }, 1000); // Adjust the delay as needed
            });
          }      
       
          else if ((res.status) == "200" && (res.data.role)== "ADMIN")  {
            dispatch(login({
              email :login1.email
            }))
            console.log(res.data);

            localStorage.setItem('Token', res.data.token);
            localStorage.setItem('Role', res.data.role);
            localStorage.setItem('xuserEmail', res.data.email);
            localStorage.setItem('xuserId', res.data.uid);

            toast.promise(
              new Promise((resolve) => {
                // Simulate some asynchronous operation
                setTimeout(() => {
                  resolve('successfully Logged in!');
                }, 2000); // Adjust the delay as needed
              }),
              {
                loading:'Creating your account...',
                success: 'successfully logged in!',
                error: 'An error occurred while signing in.',
              }
            ).then(() => {
              // Navigate to the next page after the toast is closed or after a delay
              setTimeout(() => {
                nav('/adminHome');
              }, 1000); // Adjust the delay as needed
            });
          } 

       

           
    // Validate email
    if (!validateEmail(login1.email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }

    setEmailError('');

    // Proceed with login
   
    console.log(`Email : ${login1.email}`)
    console.log( `Password: ${login1.password}`)

   
    };

    const nav=useNavigate()
    const handleRoute=(e)=>{
        nav('/register')
    }
  return (
    <>
    <div><Toaster/></div>
    <Topbar/>
    {/*<img src={image_bg1} style={{position:"absolute",width:"31%",top:"10px"}}/>*/}
    <div className="main d-flex-c">
         <form onSubmit={handleSubmit}>
             <div className="auth-form d-flex-c">
             <img src={login_logo} style={{width:"20%"}} />
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
