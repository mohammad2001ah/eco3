import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  return (
    <section className="vh-100 d-flex justify-content-center align-items-center" style={{ backgroundColor: '#f8f9fa' }}>
      <div className="card" style={{ width: '350px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
        <div className="card-body p-4">
          <h2 className="card-title text-center mb-4" style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Login</h2>
          <form id="loginForm">
            <div className="mb-3">
              <label htmlFor="username" className="form-label" style={{ fontSize: '0.9rem', fontWeight: '500' }}>Username</label>
              <input
                type="text"
                id="username"
                className="form-control"
                placeholder="Enter your username"
                style={{ borderRadius: '5px', border: '1px solid #ced4da' }}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{ fontSize: '0.9rem', fontWeight: '500' }}>Password</label>
              <input
                type="password"
                id="password"
                className="form-control"
                placeholder="Enter your password"
                style={{ borderRadius: '5px', border: '1px solid #ced4da' }}
              />
            </div>
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="rememberMe"
              />
              <label className="form-check-label" htmlFor="rememberMe" style={{ fontSize: '0.9rem' }}>Remember me</label>
            </div>
            <button
              className="btn btn-dark w-100 mb-3"
              type="submit"
              style={{ borderRadius: '5px', fontSize: '1rem', fontWeight: '500' }}
              onClick={(e) => {
                e.preventDefault();
                navigate('/Product');
              }}
            >
              Login
            </button>
            <div className="text-center">
              <a href="#!" className="text-decoration-none" style={{ fontSize: '0.9rem', color: '#6c757d' }}>Forgot Password?</a>
              <div>
            <p className="mb-0">
              Don't have an account?{' '}
              <a
                onClick={() => navigate("/SignUp")}
                className="text-black-50 fw-bold"
                style={{ cursor: 'pointer' }}
              >
                Sign Up
              </a>
            </p>
          </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}