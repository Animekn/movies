import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css"
import {
  BrowserRouter as Router,
  Routes,
  Route,
Redirect,
Navigate
} from 'react-router-dom'
import Home from "./Pages/home/Home.jsx";
import UserList from "./Pages/userList/UserList";
import User from "./Pages/user/User";
//@ts-ignore
import NewUser from "./Pages/NewUser/NewUser";
import ProductList from "./Pages/productList/ProductList";
import Product from "./Pages/product/product";
import NewProduct from "./Pages/NewProduct/NewProduct";
import Login from "./Pages/login/Login";
import { useContext } from "react";
import { AuthContext } from "./context/authcontext/AuthContext";

function App() {
  const { user } =useContext(AuthContext)  
  return (
    <Router>
     {/* <div className="container"> */}
        { user ? <Navigate replace to="/"/>:<Login/>}
        <Routes>
         <Route exact path='/Login' element={<Login />} />
         {user&&
         <>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/users' element={<UserList />} />
          <Route exact path='/user/:userId' element={<User />} />
          <Route exact path='/newUser' element={<NewUser />} />
          <Route exact path='/movies' element={<ProductList />} />
          <Route exact path='/product/:productId' element={<Product />} />
          <Route exact path='/newproduct' element={<NewProduct />} /> 
          </>
         }
        </Routes>
      {/* </div> */}
    </Router>
  );
}

export default App;
