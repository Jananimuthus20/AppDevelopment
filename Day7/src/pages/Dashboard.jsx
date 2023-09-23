import React from 'react'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import savings from '../assets/images/savings.png'
import expense1 from '../assets/images/expense1.png'
import income1 from '../assets/images/income1.png'


const Dashboard = () => {
    const user=useSelector(selectUser)
  return (
    <div className="homeclass">
      <Layout/>
      <main className="content">
        <div className="records">
            <h6 style={{color:"black"}}>Welcome <b>{user?user.email:'Guest'} </b>!</h6>
            
            {/* for cards to display */}
            <div class="container">
            <div class="row">
            <div class="col">
            <div class="card c" style={{width: "16rem"}}>
            <div class="text-center">
                 <img src={income1} class="card-img-top" alt="savings"/>
                 </div>
                 <div class="card-body">
                  <h5 style={{color:"green"}}>INCOME</h5>
                 <p class="card-text" style={{color:"green"}}><b>$ 50,000</b></p>
                 </div>
            </div>
            <br/>
            </div>


            <div class="col">
            <div class="card c" style={{width: "16rem"}}>
              <div class="text-center">
                 <img src={expense1} class="card-img-top" alt="expense"/>
              </div>
                 <div class="card-body">
                 <h5 style={{color:"blueviolet"}}>EXPENSES</h5>
                 <p class="card-text" style={{color:"blueviolet"}}><b>$ 15,000</b></p>
                 </div>
            </div>
            <br/>
            </div>

            <div class="col">
            <div class="card c" style={{width: "16rem"}}>
            <div class="text-center">
                 <img src={savings} class="card-img-top" alt="income"/>
                 </div>
                 <div class="card-body">
                 <h5 style={{color:"darkred"}}>BALANCE</h5>
                 <p class="card-text" style={{color:"darkred"}}><b>$ 35,000</b></p>
                 </div>
            </div>
            <br/>
            </div>

            </div>
            </div>
            <br/>



          {/* Add content for other sections here */}
        </div>
        </main>
          
    </div>
  )
}

export default Dashboard
