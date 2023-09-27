import React from 'react'
import logo2 from '../assets/images/logo2.png'
import { Link, useNavigate } from 'react-router-dom'

const Topbar1 = () => {
  const nav=useNavigate();
  const handleClickScroll = () => {
    nav('/')
    const element = document.getElementById('contact');
    if (element) {
      //Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
    <div class="nav-container circleBehind">
    <div className='logo1'>
    <img src={logo2} style={{ width:"8%"}} alt="Logo" />
      </div>
    <Link to ='/aboutus'>ABOUT US</Link>
    <Link to ='/'>HOME</Link>
    <a href='/#contact' onClick={handleClickScroll}>CONTACT</a>
    <Link to='/login'>LOGIN</Link>    
  </div>

  )
}

export default Topbar1
