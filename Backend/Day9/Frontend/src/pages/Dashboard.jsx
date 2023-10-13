import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { useSelector } from 'react-redux'
import { selectUser } from '../redux/userSlice'
import savings from '../assets/images/savings.png'
import expense1 from '../assets/images/expense1.png'
import income1 from '../assets/images/income1.png'
import piechart1 from '../assets/images/piechart1.png'
import donut from '../assets/images/donut.png'
import { getTotalExpense, getTotalIncome } from '../service/api'
import Graph from '../components/Graph'


const Dashboard = () => {
    const user=useSelector(selectUser)
    const [totalExpense, setTotalExpense] = useState(0);
    const [totalIncome, setTotalIncome] = useState(0);
    const [balance, setBalance] = useState(0);

    const fetchTotalExpense = async () => {
      try {
        const response = await getTotalExpense(localStorage.getItem('xuserId'));
        setTotalExpense(response.data);
      } catch (error) {
        console.error('Error fetching total expense:', error);
      }
    };
    useEffect(() => {
      fetchTotalExpense();
  }, [])

  const fetchTotalIncome = async () => {
    try {
      const response = await getTotalIncome(localStorage.getItem('xuserId'));
      setTotalIncome(response.data);
    } catch (error) {
      console.error('Error fetching total income:', error);
    }
  };
  useEffect(() => {
    fetchTotalIncome();
}, [])

// Calculate balance by subtracting expenses from income
useEffect(() => {
  const newBalance = totalIncome - totalExpense;
  setBalance(newBalance);
}, [totalIncome, totalExpense]);


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
                 <p class="card-text" style={{color:"green"}}><b>${totalIncome}</b></p>
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
                 <p class="card-text" style={{color:"blueviolet"}}><b>${totalExpense}</b></p>
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
                 <p class="card-text" style={{color:"darkred"}}><b>${balance}</b></p>
                 </div>
            </div>
            <br/>
            </div>

            </div>
            </div>
            <br/> <br/>
            <h2 style={{textAlign: 'center', color: 'darkcyan' }}>Expense by Category (Pie Chart)</h2>
            <br/> <br/>
            <div className="chart" > 
              <Graph/>
        </div>
          {/* Add content for other sections here */}
        </div>
        </main>

          
    </div>
  )
}

export default Dashboard
