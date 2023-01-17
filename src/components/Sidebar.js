import React from "react";
import { SideNav } from "./styles/Sidebarstyle";

function Sidebar() {
  return (
    <SideNav>
      <nav>
        <div class="navicon">
          <div></div>
        </div>

        <a>HOME</a>
        <a>WALLET</a>
        <a>NEWS</a>
      </nav>
    </SideNav>
  );
}

export default Sidebar;
