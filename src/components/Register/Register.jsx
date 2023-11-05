import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function () {
  const { createUser, user } = useContext(AuthContext);
  const [error, setError] = useState("");
  const location = useLocation();
  console.log("regisgration", location);
  const nagivate = useNavigate();
  const handleCreateUser = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (!/[!@#$%^&*]/.test(password)) {
      setError("Password must contain at least one special character.");
    }

    if (!/[A-Z]/.test(password)) {
      setError("Password must contain at least one capital letter.");
      return;
    }

    if (password.length < 6) {
      setError("Password must have at least 6 characters.");
      return;
    }

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        e.target.reset();
        nagivate(location?.state ? location.state : "/");
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleCreateUser} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    name="email"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                </div>
                <div>
                  <p className="text-red-700">{error}</p>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Register</button>
                </div>
                <label className="label">
                  Already Registered?
                  <Link to="/login">Log In</Link>
                </label>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
