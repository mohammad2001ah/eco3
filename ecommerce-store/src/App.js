import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar';
import Home from './component/Home/Home';
import Login from './component/login/Login';
function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login'element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
