import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import { BsFillFileEarmarkTextFill,
   BsFillBarChartFill,
   BsFillGridFill,
   BsBootstrap,
   BsDatabaseFillCheck } from "react-icons/bs";
   import { FiLogOut } from "react-icons/fi";

const Leftbar = () => {
    const dispatch= useDispatch();
    const navigate=useNavigate();

    const logoutHandler = () =>{
      dispatch(logout())
      navigate('/')
  }
  return (
    <div className="App">
        <div className="dashboard">
        <nav className="sidebar">
          <ul>
            <li class="active"><BsFillFileEarmarkTextFill/>&nbsp;&nbsp;Records</li>
            <li>< BsFillBarChartFill/>&nbsp;&nbsp;Analysis</li>
            <li><BsBootstrap/>&nbsp;&nbsp;Budgets</li>
            <li><BsDatabaseFillCheck/>&nbsp;&nbsp;Accounts</li>
            <li><BsFillGridFill/>&nbsp;&nbsp;Categories</li>
            <li onClick={logoutHandler}> <FiLogOut/>&nbsp;&nbsp;Logout</li>

          </ul>
        </nav>
      </div>
    </div>
    
  )
}

export default Leftbar
