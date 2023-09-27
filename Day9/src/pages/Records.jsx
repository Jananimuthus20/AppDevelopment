import React from 'react'
import Layout from '../components/Layout'

const Records = () => {
  return (
    <div>
      <Layout/>
      <main className="content">
        <div className="records">
            
<div className="tab">
  <h3>RECORD OF YOUR TRANSACTIONS</h3>
  <br/>
<table class="table table-info table-bordered">
<thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Date</th>
      <th scope="col">Amount spent</th>
      <th scope="col">Category</th>
      <th scope="col">Balance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>10/5/2021</td>
      <td>$5000</td>
      <td>House Rent</td>
      <td>$45000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>21/7/2021</td>
      <td>$2000</td>
      <td>Entertainment</td>
      <td>$43000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>15/3/2022</td>
      <td>$1500</td>
      <td>Tax</td>
      <td>$41500</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>09/6/2022</td>
      <td>$2500</td>
      <td>Health</td>
      <td>$39000</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>11/4/2023</td>
      <td>$1500</td>
      <td>Education</td>
      <td>$37500</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>05/7/2023</td>
      <td>$2500</td>
      <td>Food</td>
      <td>$35000</td>
    </tr>
  </tbody>
</table>
</div>
            </div>
            </main>

    </div>
  )
}

export default Records
