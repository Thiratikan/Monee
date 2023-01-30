import styled from "styled-components";

export const SideNav = styled.div`
  font: 100% Roboto, sans-serif;
  padding: 50px;
  margin: 0;
  margin-left: 88%;
  position: absolute;
  nav {
    width: 300px;
    background: transparent;
    color: rgba(0, 0, 0, 0.87);
    -webkit-clip-path: circle(24px at 30px 24px);
    clip-path: circle(24px at 32px 24px);
    -webkit-transition: -webkit-clip-path 0.5625s, clip-path 0.375s;
    transition: -webkit-clip-path 0.5625s, clip-path 0.375s;
  }

  nav:hover {
    -webkit-transition-timing-function: ease-out;
    transition-timing-function: ease-out;
    -webkit-transition-duration: 0.75s;
    transition-duration: 0.75s;
    -webkit-clip-path: circle(390px at 225px 24px);
    clip-path: circle(390px at 150px 24px);
  }

  a {
    display: block;
    line-height: 50px;
    padding: 0 20px;
    color: inherit;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }

  a:hover {
    background: #9ad3fc;
  }

  a:active {
    background: #9ad3fc;
  }

  .navicon {
    padding: 23px 20px;
    cursor: pointer;
    -webkit-transform-origin: 32px 24px;
    -ms-transform-origin: 32px 24px;
    transform-origin: 32px 24px;
  }

  .navicon div {
    position: relative;
    width: 20px;
    height: 2px;
    background: rgba(0, 0, 0, 0.87);
  }

  .navicon div:before,
  .navicon div:after {
    display: block;
    content: "";
    width: 20px;
    height: 2px;
    background: rgba(0, 0, 0, 0.87);
    position: absolute;
  }

  .navicon div:before {
    top: -7px;
  }

  .navicon div:after {
    top: 7px;
  }
`;
