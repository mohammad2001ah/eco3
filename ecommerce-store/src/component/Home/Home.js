import { useNavigate } from "react-router-dom";
export default function Home(){
  const navigate = useNavigate();
  return(
    <>
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100">
      <div className="row">
        <div className="col-12 text-center">
          <img className="black-store" src="/image/black1.jpg" alt="My Image" style={{width:"auto",backgroundSize:"cover"}}/>
        </div>
      </div>
      <div className="row">
        <div className="col-12 text-center">
          <button className='login' onClick={()=>navigate("/Login")}
              style={{
                position: "absolute",
                top: "82%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                padding: "10px 20px",
                cursor: "pointer",
                color: "white",
                backgroundColor: "black",
                borderRadius: "50px",
                fontSize: "1.3rem",
                outline: "gray"}}>Log-in
            </button> 
        </div>
      </div>
    </div>
    {/* <img className="black-store" src="/image/black1.jpg" alt="My Image"/>
    <button className='login' onClick={()=>navigate("/Login")}>Log-in</button> */}
    </>
  );
};