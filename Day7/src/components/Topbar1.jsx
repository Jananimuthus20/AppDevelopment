import React from 'react'
import logo2 from '../assets/images/logo2.png'

const Topbar1 = () => {
  return (
    <div class="nav-container circleBehind">
    <div className='logo1'>
    <img src={logo2} style={{ width:"8%"}} alt="Logo" />
      </div>
    <a href='#' >ABOUT US</a>
    <a href='#'>CONTACT</a>
    <a href='#'>LOGIN</a>
    
  </div>

  )
}

export default Topbar1
