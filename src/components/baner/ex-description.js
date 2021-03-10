import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { fb } from "../basedatos/ex-connection";
const DescriptionStyled = styled.div`
  .span {
    color: #492ebd;
  }
  @media screen and (min-width: 768px) {
    grid-area: description;
    .copy {
      font-size: 20px;
    }
  }
`;
function ExDescription() {
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    fb.auth().onAuthStateChanged((user) => {
      if (user) {
        const nameC = user.displayName.split(" ");
        const name = nameC[0];
        setUserName(name);
      } else {
        setUserName(null);
      }
    });
  }, [userName]);
  return (
    <DescriptionStyled className="hero-description">
      <h1 className="title-h1">
        Hola {userName && <span className="span">{userName}</span>}{" "}
        Bienvenido(a)
      </h1>
      <p className="copy">
        Soy Jesús Exebio un educador que le apasiona la ciencia, aquí pude
        publicar algunos de mis trabajos.
      </p>
    </DescriptionStyled>
  );
}

export default ExDescription;
