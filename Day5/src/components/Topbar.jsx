import React from 'react'
import logo2 from '../assets/images/logo2.png'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import {BsFillPersonFill} from 'react-icons/bs'

const Topbar = () => {
    const user=useSelector(selectUser)
  return (
     <div className="App1">
      <header className="header" style={{position:"webkit-sticky"}}>
          <img src={logo2} style={{ width:"8%"}} alt="Logo" />
         <BsFillPersonFill className="profile_icon"
         style={{position:"absolute",color:"black", height:"40%", width:"10%", right:"14%",top:"22%"}}/>
          <h6 style={{color:"black",marginRight:"0px"}}> {user.email}</h6>
      </header>
      </div>
  )
}

export default Topbar
