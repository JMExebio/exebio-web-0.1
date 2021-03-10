import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ExWrapper from "../ex-wrapper";
import ExMenu from "./ex-menu";
import ExMenuLogin from "./ex-menu-login";

const HeaderStyled = styled.header`
  padding: 0;
  position: fixed;
  width: 100%;
  background: ${({ background }) =>
    background ? "rgba(0, 0, 0, 0.8)" : "rgba(0, 0, 0, 0.1)"};
  z-index: 3;
  .header {
    &-content {
      width: 100%;
      display: flex;
      justify-content: space-between;
    }
    &-logo {
      height: 24px;
      align-self: center;
      padding: 1.5em 0;
    }
    &-menus{
      display: flex;
      align-items:center;
    }
  }
  @media screen and (min-width: 768px) {
    .header {
      &-logo{
        height: 32px;
      }
    }
  }
`;
function ExHeader() {
  const [background, setBackground] = useState(true);
  const handleScroll = () => {
    let scrollTop = document.documentElement.scrollTop;
    let heightPantalla = window.innerHeight;
    if (scrollTop > heightPantalla/5) {
      setBackground(false);
    } else {
      setBackground(true);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <HeaderStyled background={background}>
      <ExWrapper>
        <div className="header-content">
          <Link to="/">
            <img
            src="https://firebasestorage.googleapis.com/v0/b/exebio-educacion.appspot.com/o/web-exebio%2Flogo1-146x32.png?alt=media&token=a86a66ac-dbdb-4aa0-96eb-0c2a5ca86c29"
            alt=""
            className="header-logo"
          />
          </Link>
          <div className="header-menus">
            <ExMenuLogin />
            <ExMenu />
          </div>
        </div>
      </ExWrapper>
    </HeaderStyled>
  );
}

export default ExHeader;
