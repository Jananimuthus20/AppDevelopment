import { BrowserRouter,Routes, Route } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";

function App() {
  return (
    <>
     <BrowserRouter>
       <Routes>
          <Route exact path='/login' element={<Login/>}/>
          <Route exact path='/register' element={<Register/>}/>
          <Route exact path='/dashboard' element={<Dashboard/>}/>
          <Route exact path='/' element={<Home/>}/>
       </Routes>     
     </BrowserRouter>
    </>
  );
}

export default App;
