import React from 'react'
import Layout from '../components/Layout'

const Budget = () => {
  return (
    <div>
      <Layout/>
      <main className="content">
        <div className="records">
            <h4>House Rent</h4>
        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-danger" style={{width: "85%"}}>85%</div>
        </div>
        <br/>
        <h4>Entertainment</h4>
        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-info" style={{width: "45%"}}>45%</div>
        </div>
        <br/>
        <h4>Food</h4>
        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar  bg-warning" style={{width: "55%"}}>55%</div>
        </div>
        <br/>
        <h4>Tax</h4>
        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-primary" style={{width: "35%"}}>35%</div>
        </div>
        <br/>
        <h4>Education</h4>
        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-success" style={{width: "15%"}}>15%</div>
        </div>
        <br/>
        <h4>Health</h4>
        <div class="progress" role="progressbar" aria-label="Example with label" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                <div class="progress-bar bg-secondary" style={{width: "55%"}}>55%</div>
        </div>
   <br/><br/><br/>
           <h2>Budget Table</h2>
           <br/>
<div className="tab">
<table class="table table-primary table-bordered">
<thead>
    <tr>
      <th scope="col">S.no</th>
      <th scope="col">Date</th>
      <th scope="col">Amount spent</th>
      <th scope="col">Category</th>
      <th scope="col">Budget Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>10/5/2021</td>
      <td>$5000</td>
      <td>House Rent</td>
      <td>$4500</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>21/7/2021</td>
      <td>$2000</td>
      <td>Entertainment</td>
      <td>$2000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>15/3/2022</td>
      <td>$1500</td>
      <td>Tax</td>
      <td>$2000</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>09/6/2022</td>
      <td>$2500</td>
      <td>Health</td>
      <td>$3000</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>11/4/2023</td>
      <td>$1500</td>
      <td>Education</td>
      <td>$2000</td>
    </tr>
    <tr>
      <th scope="row">6</th>
      <td>05/7/2023</td>
      <td>$2500</td>
      <td>Food</td>
      <td>$1500</td>
    </tr>
  </tbody>
</table>
</div>
</div>
    </main>
    </div>
  )
}

export default Budget
