// src/components/Navbar.jsx
import { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthLayouts/AuthContext";
import { FaMoon, FaSun } from "react-icons/fa";
import Loading from './Loading'
import Swal from "sweetalert2";

const Navbar = () => {
  const { logOut, user, profile } = useContext(AuthContext)
  const [showButton, setShowButton] = useState(false)
console.log(profile);


  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);


  const handleLogOut = () => {
    logOut().then(() => {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Log Out Successfull !!!",
        showConfirmButton: false,
        timer: 1500
      });
    }).catch(err => {
      Swal.fire({
        position: 'center',
        icon: "success",
        title: `${err.message}`,
        showConfirmButton: false,
        timer: 1500
      });
    })
  }


  const navLinks = (
    <>
      <li><NavLink to="/">Home</NavLink></li>
      <li><NavLink to="/explore">Explore Gardeners</NavLink></li>
      <li><NavLink to="/tips">Browse Tips</NavLink></li>
      <li><NavLink to="/share-tip">Share a Garden Tip</NavLink></li>
      <li><NavLink to="/my-tips">My Tips</NavLink></li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md lg:px-4 sticky top-0 z-50">
      {/* Left: Logo */}
      <div className="navbar-start">
        <h2 to="/" className="text-xl lg:text-2xl font-bold text-green-600 flex items-center gap-3"><img src="https://i.ibb.co.com/gbDzgsdN/Green-Simple-Nature-Beauty-Care-Initials-Logo.png" className="w-12 rounded-full" alt="" /> GardenHub</h2>
      </div>

      {/* Center: Links for Large Devices */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">
          {navLinks}
        </ul>
        {/* theme button */}
        <div className="flex-none">
          <button
            className="btn"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <FaSun className="text-blue-500 cursor-pointer" title="Light Mode" /> : <FaMoon className="text-yellow-500 cursor-pointer" title="Night Mode" />}
          </button>
        </div>
      </div>

      {/* Right: Auth Buttons */}
      <div className="navbar-end hidden lg:flex gap-2">

        {/* profile btn-- */}
        {
          user && <div onClick={() => setShowButton(showButton => !showButton)} className="relative h-12 w-20 cursor-pointer">
            <img className="w-12 h-12 rounded-full mx-auto" src={ user?.photoURL ||profile?.photo|| 'https://i.ibb.co.com/b5ws6f07/defaul-profile.jpg'} alt="profile" />
            <div className="absolute inset-0 opacity-0 hover:opacity-100 text-xs h-12">
              <p className="text-white font-bold bg-black p-2">{profile?.name || user?.displayName
              }</p>
            </div>
            {
              showButton && <button onClick={() => handleLogOut()} className="btn btn-primary text-xs">log Out</button>
            }
          </div>
        }

        <NavLink to="/register" className="btn btn-outline btn-sm">Sign up</NavLink>
        <NavLink to="/login" className="btn btn-success btn-sm text-white">Login</NavLink>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden navbar-end">
        {/* theme button */}
        <div className="flex-none">
          <button
            className="btn"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {theme === "light" ? <FaSun className="text-blue-500 cursor-pointer" title="Light Mode" /> : <FaMoon className="text-yellow-500 cursor-pointer" title="Night Mode" />}
          </button>
        </div>
        {/* profile btn-- */}
        {
          user && <div onClick={() => setShowButton(showButton => !showButton)} className="relative h-12 w-20 cursor-pointer">
            <img className="w-12 h-12 rounded-full mx-auto" src={profile?.photo || user?.photoURL || 'https://i.ibb.co.com/b5ws6f07/defaul-profile.jpg'} alt="profile" />
            <div className="absolute inset-0 opacity-0 hover:opacity-100 text-xs h-12">
              <p className="text-white font-bold bg-black p-2">{profile?.name || user?.displayName
              }</p>
            </div>
            {
              showButton && <button onClick={() => handleLogOut()} className="btn btn-primary text-xs">log Out</button>
            }
          </div>
        }
        {/* 3 line btn */}
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none"
              viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round"
                strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52">
            {navLinks}
            <div className="mt-2 flex flex-col gap-2">
              <NavLink to="/register" className="btn btn-outline btn-sm">Sign Up</NavLink>
              <NavLink to="/login" className="btn btn-success btn-sm text-white">Login</NavLink>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
