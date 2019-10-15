import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet/Header.css";

// eslint-disable-next-line
// const NavBar = ({ children }) => <div className="menu-item">{children}</div>;
const Header = () => {
  return (
    <nav>
      <div id="nav-left" className="header-blink">
        <Link to="/game">
          <img src="/img/logo.png" alt="logo" />
        </Link>
      </div>
      <div id="nav-center">
        <span>USERNAME</span>
        <span>HIGHEST SCORE: NULL</span>
        <span>
          <Link to="/game/ranking">RANKING: 1</Link>
        </span>
      </div>
      <div id="nav-right">
        <Link to="/">LOGOUT</Link>
      </div>

      {/* <div className="center">
        <NavBar>
          <span>USERNAME</span>
          <div className={`header-blink`}></div>
        </NavBar>
        <NavBar>
          <div>HIGHEST SCORE</div>
        </NavBar>
        <NavBar>
          <Link to="/game/ranking">
            <div>RANKING</div>
          </Link>
        </NavBar>
      </div> */}
    </nav>
  );
};
export default Header;
