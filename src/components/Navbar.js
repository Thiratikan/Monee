import React from "react";
import { Nav } from "./styles/NavbarStyle";

function Navbar() {
  return (
    <Nav>
      <div class="background-one">
        <div class="link-container">
          <a
            class="link-one"
            href="https://jhancock532.github.io/link-hover-effects/"
          >
            Home
          </a>
        </div>
      </div>
      <div class="background-two link-container">
        <a
          class="link-two"
          href="https://jhancock532.github.io/link-hover-effects/"
        >
          Wallet
        </a>
      </div>
      <div class="background-three link-container">
        <a
          class="link-three"
          href="https://jhancock532.github.io/link-hover-effects/"
        >
          News
        </a>
      </div>
    </Nav>
  );
}

export default Navbar;
