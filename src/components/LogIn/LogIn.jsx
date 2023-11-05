import React, { useState } from "react";
import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function () {
  const { googleSignIn, userSignIn } = useContext(AuthContext);
  const [errorMessage, setErrorMessage] = useState("");

  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    userSignIn(email, password)
      .then((result) => {
        const user = result.user;
        e.target.reset();

        toast("log In Successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });

        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        setErrorMessage("Invalid email or password. Please try again.");
        console.log(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("log In Successful", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <>
      <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <form onSubmit={handleSignIn} className="card-body">
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
                  <p className="text-red-700">{errorMessage}</p>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Log IN</button>
                </div>
                <label className="label">
                  New Here?
                  <Link to="/register">Register</Link>
                </label>
                <label className="label mx-auto">or ‍sign Up using</label>
                <div
                  onClick={handleGoogleSignIn}
                  className="form-control mt-2 mx-auto cursor-pointer"
                >
                  <img
                    className="w-10"
                    src="https://i.ibb.co/hCFKf5k/google-icon-2048x2048-czn3g8x8-removebg-preview.png"
                    alt=""
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
