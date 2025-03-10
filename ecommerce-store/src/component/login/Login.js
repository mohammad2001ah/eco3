import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css"
export default function Login() {
  return (
    <section className="vh-100 gradient-custom">
    <div className="container py-2 h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-12 col-md-8 col-lg-6 col-xl-5">
          <div className="card bg-dark text-white" style={{ borderRadius: '1rem' }}>
            <div className="card-body p-2 text-center">
              <form id="loginForm">
                <div className="mb-md-5 mt-md-4">
                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-1">Please enter your login and password!</p>
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
                </div>
              </form>
              <div>
                <p className="mb-3">
                  Don't have an account?{' '}
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
