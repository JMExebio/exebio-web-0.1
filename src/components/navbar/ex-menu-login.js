import React, { useState, useEffect } from "react";
import { withRouter, useHistory } from "react-router-dom";
import styled from "styled-components";
import BanderaPeru from "../../static/img/icon-peru.svg";
import Google from "../../static/img/red-social/icon-google-color.svg";
import Logout from "../../static/img/red-social/icon-logout-color.svg";
import { fb, gloogleAuthProvider } from "../basedatos/ex-connection";

const MenuLoginStyled = styled.div`
  .content-login {
    display: ${({ user }) => (user ? "none" : "flex")};
    margin: 1em;
    right: 0;
    img {
      width: 24px;
      margin: 0 0.2em;
    }
    .btn {
      background: transparent;
      border: none;
    }
  }
  .content-user {
    display: ${({ user }) => (user ? "flex" : "none")};
    .btn {
      background: transparent;
      border: none;
    }
    img {
      width: 24px;
      height: 24px;
      border-radius: 50%;
      margin: 0 0.2em;
    }
  }
  @media screen and (min-width: 768px) {
    .content-login {
      img {
        width: 32px;
        margin: 0 0.5em;
        }
    }
    .content-user {
      img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
        margin: 0 0.5em;
      }
    }
  }
`;
const ExMenuLogin = () => {
  const [user, setUser] = useState(null);
  const history = useHistory();
  const handleGoogle = () => {
    fb.auth()
      .signInWithPopup(gloogleAuthProvider)
      .then((result) => {
        return history.push("/");
      })
      .catch((error) => console.log(`Error ${error.code}: ${error.message}`));
  };
  const handleLogout = (e) => {
    e.preventDefault();
    fb.auth()
      .signOut()
      .then(() => {
        return history.push("/");
      });
  };
  useEffect(() => {
    fb.auth().onAuthStateChanged((user) => setUser(user));
  }, []);

  return (
    <MenuLoginStyled user={user}>
      {user && (
        <div className="content-user">
          <img src={BanderaPeru} alt="" />
          <img src={user.photoURL} alt="" />
          <button onClick={handleLogout} className="btn">
            <img src={Logout} alt="" />
          </button>
        </div>
      )}

      <div className="content-login">
        <img src={BanderaPeru} alt="" />
        <button onClick={handleGoogle} className="btn">
          <img src={Google} alt="" />
        </button>
      </div>
    </MenuLoginStyled>
  );
};

export default withRouter(ExMenuLogin);
