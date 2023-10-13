import React, { useState, useEffect } from 'react'
import '../assets/CSS/transaction.css'
import Topbar from '../components/Topbar'
import e1 from '../assets/images/e1.gif'
import e2 from '../assets/images/e2.gif'
import toast from 'react-hot-toast'
import { Toaster } from 'react-hot-toast'
import back from '../assets/images/back.gif'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addExpense, addIncome, getExpense } from '../service/api'


const Transaction = () => {
   const [formData, setFormData] = useState({
      expAmount: '',
      category: '',
    });
    const { expAmount, category } = formData;
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
//income
    const [formData1, setFormData1] = useState({
      incAmount: '',
      incCategory:'',     
    });
    const { incAmount, incCategory} = formData1;
    const handleChange1= (e) => {
      setFormData1({
        ...formData1,
        [e.target.name]: e.target.value,
      });
    };


    const handleExpenseSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const fixedDate = new Date();
        console.log({ expAmount, category, date: fixedDate });
        await addExpense({ expAmount, category, date: fixedDate },localStorage.getItem('xuserId'));
        toast.success('Expense added successfully!');
      } catch (error) {
        console.error('Error adding expense:', error);
        toast.error('An error occurred while adding expense.');
      }
    };

//income
    const handleIncomeSubmit = async (e) => {
      e.preventDefault();
  
      try {
        console.log({ incAmount,incCategory });
        await addIncome({ incAmount,incCategory },localStorage.getItem('xuserId'));
        console.log('After addIncome call:');
        toast.success('Income added successfully!');
      } catch (error) {
        console.error('Error adding income:', error);
        toast.error('An error occurred while adding income.');
      }
    };
   

  return (
    <div>
        <Topbar/>
        <div><Toaster/></div>
        <div class ="whole">
         <div class="back">
        <Link to='/dashboard'> <img src={back} style={{width:"5%",position:"absolute",left:"0px",top:"50px"}}/></Link>
         </div>
         <div class="exp">
         <h3  style={{textAlign:"center"}}>ADD YOUR EXPENSE AND INCOME HERE</h3>
         </div><br/> <br/>
        <div class="container2" >
            <img src={e1}style={{width:"13%",marginLeft:"45%"}}/>
      <div class="text">
        Add Expense
      </div>
      <form onSubmit={handleExpenseSubmit}>
         <div class="form-row">
               <label for="">Expense Amount</label>
            <div class="input-data">
               <input
                type="number" 
                name="expAmount" 
                value={expAmount}
                onChange={handleChange}
                />
               <div class="underline"></div>
            </div>
               <label for="">Category</label>
            <div class="input-data">
               <select
                id="category"
                 name="category"
                 value={category}
                 onChange={handleChange}
                 >
               <option value="Food">Food</option>
               <option value="Entertainment">Entertainment</option>
               <option value="Tax">Tax</option>
               <option value="Health">Health</option>
               <option value="Education">Education</option>
               <option value="Rent">House Rent</option>
            </select>
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

      {/*another container for income */}


      <div class="container3">
      <img src={e2}style={{width:"13%",marginLeft:"45%"}}/>
      <div class="text">
        Add Income
      </div>
      <form onSubmit={handleIncomeSubmit}>
         <div class="form-row">
               <label for="">Total Income</label>
            <div class="input-data">
               <input 
               type="number"
               name="incAmount" 
               value={incAmount}
               onChange={handleChange1}
                />
               <div class="underline"></div>
            </div>
            </div>
            <label for="">Category</label>
            <div class="input-data">
               <select
                id="incCategory"
                 name="incCategory"
                 value={incCategory}
                 onChange={handleChange1}
                 >
               <option value="Salary">Salary</option>
               <option value="Rent">Rent</option>
               <option value="Trade">Trade</option>
               <option value="Bank">Bank</option>
               <option value="Others">Others</option>
            </select>
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
