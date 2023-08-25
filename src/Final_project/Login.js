import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  function Handlesubmit(e) {
    navigate("/");
    e.preventDefault();
  }

  return (
    <>
      <div className="container product-background w-25 mt-5 p-5">
        <h4>Welcome to Dashboard, Login</h4>
        <form onSubmit={Handlesubmit} className="row login-form mt-4">
          <div className="form-group col-lg-12 col-12">
            <label for="name">Username</label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-control "
              required
            />
          </div>
          <div className="form-group col-lg-12 col-12">
            <label for="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              className="form-control "
              required
            />
          </div>
          <div className="button ">
            <button className="btn">LOGIN</button>
          </div>
          <div className="button mt-3">
            <button className="btn">FORGET YOUR PASSWORD?</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
