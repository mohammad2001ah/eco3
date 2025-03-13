import 'bootstrap/dist/css/bootstrap.min.css';
import React,{ useState } from 'react';
import { useNavigate } from 'react-router-dom';
export default function Login() {
  const[loginData,setLoginData]=useState({email:"",password:""});
  const handleSubmit = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === loginData.email && storedUser.password === loginData.password) {
      alert("Login successful!");
    } else {
      alert("Invalid email or password!");
    }
  };
  const navigate = useNavigate();

  return (
    <section className="vh-100 gradient-custom my-2">
    <div className="container py-2 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card bg-dark text-white mt-5 " style={{ borderRadius: '1rem' }}>
            <div className="card-body pt-2 mt-5 text-center">
              <form id="loginForm">
                <div className="mb-md-5 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-1">Please enter your Email and password!</p>
                  <div data-mdb-input-init className="form form-white mb-4 mx-5">
                    <label className="form-label" htmlFor="typeEmailX">Email</label>
                    <input
                      type="email"
                      id="emailLogin"
                      className="form-control form-control-lg"
                      placeholder="info@example.com"
                    />
                  </div>
                  <div data-mdb-input-init className="form form-white mb-4 mx-5">
                    <label className="form-label" htmlFor="typePasswordX">Password</label>
                    <input
                      type="password"
                      id="passLogin"
                      className="form-control form-control-lg"
                      placeholder="password"
                    />
                  </div>
                  <p className="small mb- pb-lg-2">
                    <a className="text-white-50" href="#!">Forgot password?</a>
                  </p>
                  <button id='log-btn' data-mdb-button-init data-mdb-ripple-init class="btn btn-outline-light btn-lg px-5"
                    type="submit" onClick={()=>navigate('/Product')}>Login</button>
                </div>
              </form>
              <div>
                <p className="mb-3">
                  Don't have an account?{' '}
                  <a onClick={() => navigate("/SignUp")} className="text-white-50 fw-bold" style={{ cursor: 'pointer' }}>
                      Sign Up
                    </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
