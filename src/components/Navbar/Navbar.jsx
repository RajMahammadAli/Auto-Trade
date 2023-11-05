import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

export default function () {
  const { user, userLogOut } = useContext(AuthContext);
  const handleLogOut = () => {
    userLogOut();
  };
  const logo = `https://i.ibb.co/xG7j65Z/carlogo.png`;
  const navlinks = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#196EAF]" : ""
        }
      >
        <span className="mr-2 text-base font-bold">Home</span>
      </NavLink>
      <NavLink
        to="/addProduct"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#196EAF]" : ""
        }
      >
        <span className="mr-2 text-base font-bold">Add Product</span>
      </NavLink>
      <NavLink
        to="/myCart"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-[#196EAF]" : ""
        }
      >
        <span className="mr-2 text-base font-bold">My Cart</span>
      </NavLink>
    </>
  );
  return (
    <>
      <div className="navbar bg-base-100 shadow-lg">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navlinks}
            </ul>
          </div>

          <Link to="/" className="cursor-pointer normal-case text-xl">
            <img className="w-20" src={logo} alt="logo" />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navlinks}
            {user ? (
              <div className="flex justify-center items-center space-x-3">
                <NavLink onClick={handleLogOut}>
                  <span className="mr-2 text-base font-bold">log out</span>
                </NavLink>
              </div>
            ) : (
              <div>
                <NavLink
                  to="/Login"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-[#196EAF]" : ""
                  }
                >
                  <span className="mr-2 text-base font-bold">Login</span>
                </NavLink>
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}
