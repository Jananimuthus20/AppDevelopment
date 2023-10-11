import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import { BsFillFileEarmarkTextFill,
   BsFillGridFill,
   BsDatabaseFillCheck, 
   BsPlusLg} from "react-icons/bs";
   import { FiLogOut } from "react-icons/fi";

const Leftbar = () => {
    const dispatch= useDispatch();
    const navigate=useNavigate();

    const logoutHandler = () =>{
      localStorage.clear();
      dispatch(logout())
      navigate('/login')
  }
  const trans =() =>{
    navigate('/transaction')
  }
  const recHandler=()=>{
    navigate('/records')
  }
  const dashHandler=()=>{
    navigate('/dashboard')
  }
  const budgetHandler=()=>{
    navigate('/budget')
  }
  return (
    <div className="App">
        <div className="dashboard">
        <nav className="sidebar">
          <ul>
            <li onClick={dashHandler}class="active"><BsFillGridFill/>&nbsp;&nbsp;Dashboard</li>
            <li onClick={budgetHandler}>< BsDatabaseFillCheck/>&nbsp;&nbsp;Budgets</li>
            <li onClick={recHandler}><BsFillFileEarmarkTextFill/>&nbsp;&nbsp;Records</li>
            <li onClick={trans}><BsPlusLg/>&nbsp;&nbsp;Add Transaction</li>
            <li onClick={logoutHandler}> <FiLogOut/>&nbsp;&nbsp;Logout</li>
          </ul>
        </nav>
      </div>
    </div>
    
  )
}

export default Leftbar
