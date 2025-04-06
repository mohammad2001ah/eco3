import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home/Home';
import Login from './component/login/Login';
import SignUp from "./component/login/SignUP";
import Product from "./component/Product";
import Smart from "./component/Products/Smart";
import Laptop from "./component/Products/Laptop";
import Electricals from "./component/Products/Electricals";
import Clothes from "./component/Products/Clothes";
import Watch from "./component/Products/Watch";
import AboutUs from "./component/AboutUs";
import ContactUs from "./component/ContactUs";
import Footer from "./component/Footer";
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login'element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Product" element={<Product/>}/>
        <Route path="/Smart" element={<Smart/>}/>
        <Route path="/laptop" element={<Laptop />} />
        <Route path="/electricals" element={<Electricals />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/watch" element={<Watch />} />
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
