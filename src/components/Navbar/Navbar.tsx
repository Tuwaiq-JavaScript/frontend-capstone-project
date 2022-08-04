import "./Navbar.css";
import { BiMenu } from "react-icons/bi";
import { FaSearch, FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const localUser = JSON.parse(localStorage.getItem("user") || "null");
const username = localUser ? localUser.email.split("@")[0] : null;

// #212121
// #181818

const Navbar = () => {
  const [user, setUser] = useState(localUser ? username : null);
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="navbar">
      <div className="navbar__left">
        <BiMenu />
        <div className="navbar__logo">
          <img src="images/yt-logo.png" alt="logo" />
          <h3>YouTube</h3>
        </div>
      </div>
      <div className="navbar__mid">
        <input type="text" placeholder="Search" />
        <div className="navbar__icon">
          <FaSearch />
        </div>
      </div>
      <div className="navbar__right">
        {user ? (
          <>
            <p>{username}</p>
            <Link to="/profile">
              <FaRegUser />
            </Link>
            <button onClick={logout} type="submit">
              Logout
            </button>
          </>
        ) : (
          <>
            <button onClick={() => navigate("/login")}>Login</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
