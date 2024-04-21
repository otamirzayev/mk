import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";

import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

import { useContext } from "react";
import { GlobalContext } from "../context/useGlobalContext";

function Navbar() {
  const { navbarBgColor, user } = useContext(GlobalContext);

  const signOutFunc = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div
      className="bg-base-300 mb-10 duration-300 transition"
      style={{ backgroundColor: navbarBgColor }}
    >
      <div className="navbar align-element">
        <div className="navbar-start">
          <Link to="/" className="btn btn-primary lg:btn-lg hidden lg:flex ">
            MyKitchen
          </Link>
          <div className="dropdown lg:hidden">
            <button
              tabIndex={0}
              role="button"
              className="btn  btn-primary lg:btn-lg mt-3"
            >
              MK
            </button>
            <div
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <NavLinks />
            </div>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <NavLinks />
        </div>
        <div className="navbar-end">
          {user && <p className="mr-3">{user.displayName}</p>}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt={`${user.displayName ?? "user"} image`}
                  src={user.photoURL}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <button onClick={signOutFunc} className="btn btn-sm">
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
