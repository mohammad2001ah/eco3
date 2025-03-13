import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home/Home';
import Login from './component/login/Login';
import SignUp from "./component/login/SignUP";
import Product from "./component/Product";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login'element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Product" element={<Product/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
