import React from 'react'
import '../assets/CSS/transaction.css'
import Topbar from '../components/Topbar'
import e1 from '../assets/images/e1.gif'
import e2 from '../assets/images/e2.gif'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'

const Transaction = () => {
   const handleExpense=(e)=>{
      e.preventDefault();
   toast.promise(
      new Promise((resolve) => {
        // Simulate some asynchronous operation
        setTimeout(() => {
          resolve('Expense added successfully!');
        }, 1500); // Adjust the delay as needed
      }),
      {
        loading:'Evaluating your transaction...',
        success: 'Expense added successfully!',
        error: 'An error occurred while adding.',
      }
    );
   }

   const handleIncome=(e)=>{
      e.preventDefault();
   toast.promise(
      new Promise((resolve) => {
        // Simulate some asynchronous operation
        setTimeout(() => {
          resolve('Income added successfully!');
        }, 1500); // Adjust the delay as needed
      }),
      {
        loading:'Evaluating your transaction...',
        success: 'Income added successfully!',
        error: 'An error occurred while adding.',
      }
    );
   }

  return (
    <div>
        <Topbar/>
        <div><Toaster/></div>
        <div class ="whole">
         <h3>ADD YOUR EXPENSE AND INCOME HERE</h3>
        <div class="container2" onSubmit={handleExpense}>
            <img src={e1}style={{width:"13%",marginLeft:"45%"}}/>
      <div class="text">
        Add Expense
      </div>
      <form action="#">
         <div class="form-row">
               <label for="">Expense Amount</label>
            <div class="input-data">
               <input type="number" />
               <div class="underline"></div>
            </div>
               <label for="">Category</label>
            <div class="input-data">
               <input type="text"required/>
               <div class="underline"></div>
            </div>
         </div>
        <br />
            <div class="form-row submit-btn">
               <div class="input-data">
                  <div class="inner">
                  <button id="sub" type="submit">Add</button>
                  </div>
               </div>
            </div>
      </form>
      </div>

      {/*another container */}


      <div class="container3" onSubmit={handleIncome}>
      <img src={e2}style={{width:"13%",marginLeft:"45%"}}/>
      <div class="text">
        Add Income
      </div>
      <form action="#">
         <div class="form-row">
               <label for="">Total Income</label>
            <div class="input-data">
               <input type="number" />
               <div class="underline"></div>
            </div>
            </div>
        <br />
            <div class="form-row submit-btn">
               <div class="input-data">
                  <div class="inner">
                  <button id="sub" type="submit">Add</button>
                  </div>
               </div>
            </div>
      </form>
      </div>


      
      
    </div>
    </div>
  )
}

export default Transaction
