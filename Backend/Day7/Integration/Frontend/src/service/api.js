import axios from "axios";

let jwtToken = localStorage.getItem('Token')
const authheader = `Bearer ${jwtToken}`;
console.log(jwtToken)

const headers = {
  'Authorization': authheader,
  'Content-Type': 'application/json',
};

const URI = 'http://localhost:7777'




//endpoint 1
const getExpense = () => axios.get(`${URI}/api/v1/expense/getAllExpense`, { headers })
const getExpensebyId = (id) => axios.get(`${URI}/api/v1/expense/getExpense/${id}`, { headers })
const addExpense = (expense,id) => axios.post(`${URI}/api/v1/expense/save/${id}`, expense, { headers })
const editExpense = (id, expense) => axios.put(`${URI}/api/v1/expense/updateExpense/${id}`, expense, { headers })
const deleteExpense = (id) => axios.delete(`${URI}/api/v1/expense/deleteExpense/${id}`, { headers })
const getUserExpense =(id) => axios.get(`${URI}/api/v1/expense/getUserExpense/${id}`, { headers })
const getTotalExpense =(id) =>  axios.get(`${URI}/api/v1/expense/getTotalExpense/${id}`, { headers })

const getUser = () => axios.get(`${URI}/api/v1/user/getAll`, { headers })
const getUserbyId = (id) => axios.get(`${URI}/api/v1/user/getUserById/${id}`, { headers })
const editUser = (id, user) => axios.put(`${URI}/api/v1/user/updateUser/${id}`, user, { headers })
const deleteUser = (id) => axios.delete(`${URI}/api/v1/user/deleteUser/${id}`, { headers })

const userLogin = (login) => axios.post(`${URI}/api/v1/auth/login`, login)
const userRegister = (register) => axios.post(`${URI}/api/v1/auth/register`, register)
//const adminLogin = (signin) => axios.post(`${URI}/admin/login`, signin, { headers })

const getIncome=(id,income)=> axios.post(`${URI}/api/v1/income/getIncome/add/${id}`,income,{headers})
const getIncomebyId = (id) =>axios.get(`${URI}/api/v1/income/getIncome/${id}`,{headers})
const addIncome = (income,id) => axios.post(`${URI}/api/v1/income/save/${id}`, income, { headers })
const editIncome = (id, income) => axios.put(`${URI}/api/v1/income/updateIncome/${id}`, income, { headers })
const deleteIncome = (id) => axios.delete(`${URI}/api/v1/income/deleteIncome/${id}`, { headers })
const getUserIncome = (id) => axios.get(`${URI}/api/v1/income/getUserIncome/${id}`,{headers})
const getTotalIncome = (id) => axios.get(`${URI}/api/v1/income/getTotalIncome/${id}`,{headers})


export { getExpense, getExpensebyId, getUserExpense,getTotalExpense, addExpense, editExpense, deleteExpense, getUser, getUserbyId, editUser, deleteUser,userLogin,userRegister,addIncome,getIncome, getIncomebyId ,getUserIncome, getTotalIncome, editIncome, deleteIncome}