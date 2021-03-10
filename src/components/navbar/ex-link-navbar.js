import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const LinkNavbarStyled = styled.li`
  display: flex;
  align-items: center;
  a {
    min-height:100px;
    position: relative;
    padding: 0.5em 0;
    font-weight: 700;
    margin: 0 1em;
    text-decoration: none;
    font-size: 32px;
    letter-spacing: 0.1em;
    color: #4e2cbe;
    ::after {
      --scale: 0;
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      top: 90%;
      height: 5px;
      border-radius: 2.5px;
      background: #4e2cbe;
      transform: scale(var(--scale));
      -webkit-transform: scale(var(--scale));
      transform-origin: var(--x) 50%;
      -webkit-transform-origin: var(--x) 50%;
      transition: transform 0.3s cubic-bezier(0.51, 0.092, 0.24, 1);
      -webkit-transition: transform 0.3s cubic-bezier(0.51, 0.092, 0.24, 1);
      -webkit-transition: -webkit-transform 0.3s
        cubic-bezier(0.51, 0.092, 0.24, 1);
      z-index: 4;
    }
    :hover::after {
      --scale: 1;
    }
  }
`;
function ExLinkNavbar({ children, href }) {
  return (
    <LinkNavbarStyled>
      <Link to={{ pathname: "/", hash: href }}>{children}</Link>
    </LinkNavbarStyled>
  );
}

export default ExLinkNavbar;