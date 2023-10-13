import React, { useState, useEffect } from 'react'
import Layout from '../components/Layout'
import { getUserExpense } from '../service/api';

const Records = () => {

  const [expenses, setExpenses] = useState([]);

  const fetchUserExpenses = async () => {
    try {
      const response = await getUserExpense(localStorage.getItem('xuserId')) // Assuming user ID 1
      setExpenses(response.data);
    } catch (error) {
      console.error('Error fetching expenses:', error);
    }
  };

  useEffect(() => {
    fetchUserExpenses();
}, [])

  return (
    <div>
      <Layout/>
      <main className="content">
        <div className="records">
            
<div className="tab">
  <h3  style={{textAlign:"center",color:"cornflowerblue"}}>RECORD OF YOUR TRANSACTIONS</h3>
  <br/>
<table class="table table-info table-bordered">
<thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Date</th>
      <th scope="col">Amount spent</th>
      <th scope="col">Category</th>
    </tr>
  </thead>
  <tbody>
  {expenses.map((expense, index) => (
            <tr key={expense.id}>
              <td>{index + 1}</td>
              <td>{expense.date}</td>
              <td>{expense.expAmount}</td>
              <td>{expense.category}</td>
              {/* Add more columns as needed */}
            </tr>
          ))}
  </tbody>
</table>
</div>
            </div>
            </main>

    </div>
  )
}

export default Records
