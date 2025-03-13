import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("user", JSON.stringify(formData)); 
    setFormData({ firstName: "", lastName: "", email: "", password: "" }); 
    navigate("/login"); 
  };
  return (
    <section>
      <div
        className="px-4 py-5 px-md-5 text-center text-lg-start"
        style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
      >
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-3 fw-bold ls-tight">
                The best offer <br />
                <span className="text">for your purchases</span>
              </h1>
              <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, itaque
                accusantium odio, soluta, corrupti aliquam quibusdam tempora at cupiditate quis eum
                maiores libero veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>
              <a href="index.html">
                <button className="btn btn-dark">Back</button>
              </a>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col-md-6 mb-4 mx-1">
                        <div className="form-group">
                          <label htmlFor="firstName">First name</label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="form-control"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-group">
                          <label htmlFor="lastName">Last name</label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="form-control"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="email">Email address</label>
                      <input
                        type="email"
                        id="emailSign"
                        name="email"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-group mb-4">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="passwordSign"
                        name="password"
                        className="form-control"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="submit" onClick={()=>navigate("/Login")} className="btn btn-dark btn-block mb-4">
                      Sign Up
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default SignUp;