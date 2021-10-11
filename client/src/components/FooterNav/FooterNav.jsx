import { React, useState } from "react";
import { Link } from "react-router-dom";
import "./FooterNav.css";
import { Spiral as Hamburger } from "hamburger-react";
import { Desktop, Mobile } from "../../utils/media";

export default function FooterNav(props) {
const [navbarOpen, setNavbarOpen] = useState(false);

const handleToggle = () => {
  setNavbarOpen(!navbarOpen)
}



  return (
    <>
      <Desktop>
        <div className="footer-nav-container z-10">
          <Link to="/collection">collection</Link>
          <span className="nav-symbol">◊</span>
          {props.user ? (
            <Link to="/myaltars">create</Link>
          ) : (
            <Link to="/login">create</Link>
          )}
          <span className="nav-symbol" id="star">
            *
          </span>
          <Link to="/about">about</Link>
        </div>
      </Desktop>

      <Mobile>
        <div className="navBar">
          
          <button onClick={handleToggle}>
            
            <Hamburger color="yellow" toggled={navbarOpen} toggle={setNavbarOpen}/>
          </button>
          <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
            <li>
              <Link to="/collection">collection</Link>
            </li>

            <li>
              {props.user ? (
                <Link to="/myaltars">create</Link>
              ) : (
                <Link to="/login">create</Link>
              )}
            </li>

            <li>
              <Link to="/about">about</Link>
            </li>
          </ul>

        </div>
      </Mobile>
    </>
  );
}
