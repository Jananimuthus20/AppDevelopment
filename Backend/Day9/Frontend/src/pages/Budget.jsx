import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout'
import { getUserIncome } from '../service/api';

const Budget = () => {
  const [incomes, setIncomes] = useState([]);

  const fetchUserIncomes = async () => {
    try {
      const response = await getUserIncome(localStorage.getItem('xuserId'));
      setIncomes(response.data);
    } catch (error) {
      console.error('Error fetching incomes:', error);
    }
  };
  useEffect(() => {
    fetchUserIncomes();
  }, []);

  
  return (
    <div>
      <Layout/>
      <main className="content">
        
        <div className="records">
          <h3 style={{ textAlign: 'center', color: 'cornflowerblue' }}>INCOME MANAGEMENT</h3>
          <br />
          <div className="tab">
            <h4 style={{ textAlign: 'center', color: 'darkcyan' }}>RECORD OF YOUR INCOME</h4>
            <br />
            <table className="table table-info table-bordered" style={{float:"right"}}>
              <thead>
                <tr>
                  <th scope="col">S.no</th>
                  <th scope="col">Income Amount</th>
                  <th scope="col">Income Category</th>
                </tr>
              </thead>
              <tbody>
              {incomes.map((income, index) => (
                  <tr key={income.id}>
                    <td>{index + 1}</td>
                    <td>{income.incAmount}</td>
                    <td>{income.incCategory}</td>
                   
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

export default Budget
