import React, { useEffect } from "react";
import styled from "styled-components";
import anime from "animejs";
import ExWrapper from "../ex-wrapper";
import ExLogo from "./ex-logo";
import ExLogotipo from "./ex-logotipo";
import ExDescription from "./ex-description";
import { Helmet, HelmetProvider } from "react-helmet-async";

const HeroStyled = styled.section`
  background: linear-gradient(
      180deg,
      rgba(20, 20, 21, 0.7) 0%,
      rgba(20, 15, 52, 0.7) 100%
    ),
    url("https://firebasestorage.googleapis.com/v0/b/exebio-educacion.appspot.com/o/web-exebio%2Fimg-desktop.png?alt=media&token=1cac2c48-53dd-4c3e-acdb-2d770dc97556"),
    bottom, left;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  height: 100%;
  .hero-content {
    display: grid;
    grid-template-columns: 320px;
    justify-content: center;
    grid-row-gap: 1em;
    padding-top: 8em;
    padding-bottom: 1.5em;
  }
  @media screen and (min-width: 768px) {
    .hero-content {
      grid-template-columns: 200px 408px;
      grid-column-gap: 15px;
      align-items: center;
      justify-content: center;
      grid-template-areas:
        "logo logotipo"
        "description description";
    }
  }
  @media screen and (min-width: 1024px) {
    .hero-content {
      grid-template-columns: 270px 500px;
      grid-column-gap: 64px;
    }
  }
`;

function ExHero() {
  useEffect(() => {
    var basicTimeline = anime.timeline();
    basicTimeline
      .add({
        targets: ".hero-logo",
        opacity: {
          value: [0, 1],
          duration: 1000,
          delay: 800,
          easing: "easeInOutQuart",
        },
        rotateY: {
          value: 1080,
          duration: 2000,
          easing: "easeInOutSine",
          delay: 1000,
        },
      })
      .add({
        targets: ".hero-logotipo",
        scale: [0, 1],
        duration: 3000,
        easing: "easeInOutSine",
      })
      .add({
        targets: ".hero-description",
        opacity: [0, 1],
        duration: 3000,
        easing: "easeInOutSine",
      });
  }, []);
  return (
    <HelmetProvider>
      <HeroStyled>
        <Helmet>
          <title>Exebio</title>
        </Helmet>
        <ExWrapper>
          <div className="hero-content">
            <ExLogo />
            <ExLogotipo />
            <ExDescription />
          </div>
        </ExWrapper>
      </HeroStyled>
    </HelmetProvider>
  );
}

export default ExHero;
