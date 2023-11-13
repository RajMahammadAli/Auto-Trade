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
        <div className="hero min-h-screen bg-base-200"></div>
      </div>
    </>
  );
}
