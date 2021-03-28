import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import ExFooterCourse from "./ex-footer-course";
import ExWrapper from "../ex-wrapper";
import ExLinkRedSocial from "./ex-link-red-social";

const FooterStyled = styled.div`
  background: #140f34;
  padding-top: 2em;
  .footer {
    &-content {
      display: grid;
      grid-template-columns: 1fr;
      width: 100%;
      align-items: center;
      justify-content: center;
      .contactos {
        display: block;
        margin: auto;
      }
      .informacion {
        color: white;
        text-align: center;
        span{
          color: #2CF30B;
        }
      }
      .logo {
        display: block;
        margin: auto;
        margin-bottom: 1em;
      }
    }
  }
  .copyright {
    background: black;
    width: 100%;
    padding: 1em 0;
    p {
      color: #2e2929;
      text-align: center;
      padding: 0;
      margin: 0;
      font-size: 24px;
    }
  }
  @media screen and (min-width: 768px) {
    .footer {
      &-content {
        .informacion {
          font-size: 1em;
        }
      }
    }
  }
  @media screen and (min-width: 1080px) {
    .footer {
      &-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
        .informacion {
          font-size: 1.2em;
        }
        .logo {
          margin-bottom: 1.5em;
        }
      }
    }
  }
`;

function ExFooter({courses}) {
  return (
    <FooterStyled>
      <ExWrapper>
        <div className="footer-content">
          <div className="contactos">
            <Link to="/">
              <img
                className="logo"
                src="https://firebasestorage.googleapis.com/v0/b/exebio-educacion.appspot.com/o/web-exebio%2Flogo1-146x32.png?alt=media&token=a86a66ac-dbdb-4aa0-96eb-0c2a5ca86c29"
                alt=""
              />
            </Link>
            <div className="informacion">
              <p>
                Hola te asesoro en temas de Matemática,Física y
                Química. Te ayudo en tus tareas, trabajos universitarios, te preparo para tu examen, etc.
                Vamos animate has click al icono de <span>WhatsApp</span> y aprendamos juntos.
              </p>
            </div>
            <ExLinkRedSocial />
          </div>
          <ExFooterCourse courses={courses} />
        </div>
      </ExWrapper>
      <div className="copyright">
        <p>copyright ©exebio</p>
      </div>
    </FooterStyled>
  );
}

export default ExFooter;
