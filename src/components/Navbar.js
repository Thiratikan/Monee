import React from "react";
import { Nav } from "../styles/NavbarStyle";

function Navbar() {
  return (
    <Nav>
      <div className="background-one">
        <div className="link-container">
          <a className="link-one" href="#">
            Timeline
          </a>
        </div>
      </div>

      <div className="background-two link-container">
        <a className="link-two" href="#">
          Wallet
        </a>
      </div>

      <div className="background-one">
        <div className="link-container">
          <a className="link-one" href="#">
            Budget
          </a>
        </div>
      </div>

      <div className="background-three link-container">
        <a className="link-three" href="#">
          News
        </a>
      </div>
    </Nav>
  );
}

export default Navbar;
