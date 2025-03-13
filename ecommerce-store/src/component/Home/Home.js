import { useNavigate } from "react-router-dom";
import './style.css';
export default function Home(){
  const navigate = useNavigate();
  return(
    <>
    <img className="black-store" src="/image/black1.jpg" alt="My Image"/>
    <button className='login' onClick={()=>navigate("/Login")}>Log-in</button>
    </>
  );
};