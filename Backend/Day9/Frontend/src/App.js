import { BrowserRouter,Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Aboutus from "./pages/Aboutus";
import FAQ from "./pages/FAQ";
import Transaction from "./pages/Transaction";
import Records from "./pages/Records";
import Budget from "./pages/Budget";
import Feedback from "./pages/Feedback";
import UserAuth from "./Auth/UserAuth";
import AdminAuth from "./Auth/AdminAuth";
import AdminHome from "./pages/Admin/AdminHome";
import UserUpdate from "./pages/Admin/UserUpdate";


function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/privacy' element={<Privacy/>}/>
          <Route exact path='/terms' element={<Terms/>}/>
          <Route exact path='/aboutus' element={<Aboutus/>}/>
          <Route exact path='/feedback' element={<Feedback/>}/>
          <Route exact path='/faq'element={<FAQ/>}/>

          <Route element={<UserAuth/>}>
          <Route exact path='/dashboard' element={<Dashboard/>}/>
          <Route exact path='/transaction' element={<Transaction/>}/>
          <Route exact path='/records' element={<Records/>}/>
          <Route exact path='/budget' element={<Budget/>}/>
          </Route>

          <Route element={<AdminAuth/>}>
          <Route path='/adminHome' element={<AdminHome/>}/>
         <Route path='/userUpdate/:id' element={<UserUpdate/>}/>
          </Route>
          
          
       </Routes>     
     </BrowserRouter>
    </>
  );
}

export default App;
