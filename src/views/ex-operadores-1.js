import Swiper from "swiper/swiper-bundle";
import React, { useEffect, useRef } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ExSliderFondo from "../components/clases/ex-slider-fondo";
import ExHeaderSlider from "../components/clases/ex-header-slider";
import ExPresentacionA from "../components/clases/operadores/pre/ex-presentacion-a";
import ExProblema001 from "../components/clases/operadores/pre/ex-problema-001";
import ExProblema002 from "../components/clases/operadores/pre/ex-problema-002";
import ExProblema003 from "../components/clases/operadores/pre/ex-problema-003";
import ExProblema004 from "../components/clases/operadores/pre/ex-problema-004";
import ExProblema005 from "../components/clases/operadores/pre/ex-problema-005";
import ExProblema006 from "../components/clases/operadores/pre/ex-problema-006";
import ExProblema007 from "../components/clases/operadores/pre/ex-problema-007";
import ExProblema008 from "../components/clases/operadores/pre/ex-problema-008";
import ExProblema009 from "../components/clases/operadores/pre/ex-problema-009";
import ExProblema010 from "../components/clases/operadores/pre/ex-problema-010";
import ExProblema011 from "../components/clases/operadores/pre/ex-problema-011";
import ExProblema012 from "../components/clases/operadores/pre/ex-problema-012";
import ExProblema013 from "../components/clases/operadores/pre/ex-problema-013";
import ExProblema014 from "../components/clases/operadores/pre/ex-problema-014";
import ExProblema015 from "../components/clases/operadores/pre/ex-problema-015";
import ExProblema016 from "../components/clases/operadores/pre/ex-problema-016";
import ExProblema017 from "../components/clases/operadores/pre/ex-problema-017";
import ExProblema018 from "../components/clases/operadores/pre/ex-problema-018";
import ExProblema019 from "../components/clases/operadores/pre/ex-problema-019";
import ExProblema020 from "../components/clases/operadores/pre/ex-problema-020";
import ExProblema021 from "../components/clases/operadores/pre/ex-problema-021";
import ExProblema022 from "../components/clases/operadores/pre/ex-problema-022";
import ExProblema023 from "../components/clases/operadores/pre/ex-problema-023";
import ExProblema024 from "../components/clases/operadores/pre/ex-problema-024";
import ExProblema025 from "../components/clases/operadores/pre/ex-problema-025";
import ExProblema026 from "../components/clases/operadores/pre/ex-problema-026";
import ExProblema027 from "../components/clases/operadores/pre/ex-problema-027";
import ExProblema028 from "../components/clases/operadores/pre/ex-problema-028";
import ExProblema029 from "../components/clases/operadores/pre/ex-problema-029";
import ExProblema030 from "../components/clases/operadores/pre/ex-problema-030";
import ExProblema031 from "../components/clases/operadores/pre/ex-problema-031";

const EjemploStyled = styled.div`
  width: 100%;
  height: 100%;
  background: #02071a;
  .swiper {
    &-container {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
    }

    &-wrapper {
      width: 100%;
      height: 100%;
    }
    &-slide {
      width: 100%;
      height: 100%;
      background: #02071a;
    }
    &-pagination-bullet {
      width: 20px;
      height: 20px;
      text-align: center;
      line-height: 20px;
      font-size: 12px;
      color: #000;
      opacity: 1;
      background: #65c1df;
      &-active {
        color: #fff;
        background: #6eef31;
      }
    }
  }
`;
const ExOperadores1 = () => {
  const swiperH = useRef(null);

  useEffect(() => {
    swiperH.current = new Swiper(".swiper-container-h", {
      allowTouchMove: false,
      pagination: {
        el: ".swiper-pagination-h",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + index + "</span>";
        },
      },
    });
  }, []);
  return (
    <HelmetProvider>
      <EjemploStyled>
        <Helmet>
          <title>Operadores Matemáticos</title>
        </Helmet>
        <ExHeaderSlider />
        <div className="swiper-container swiper-container-h">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <ExPresentacionA />
            </div>
            <div className="swiper-slide">
              <ExProblema001 />
            </div>
            <div className="swiper-slide">
              <ExProblema002 />
            </div>
            <div className="swiper-slide">
              <ExProblema003 />
            </div>
            <div className="swiper-slide">
              <ExProblema004 />
            </div>
            <div className="swiper-slide">
              <ExProblema005 />
            </div>
            <div className="swiper-slide">
              <ExProblema006 />
            </div>
            <div className="swiper-slide">
              <ExProblema007 />
            </div>
            <div className="swiper-slide">
              <ExProblema008 />
            </div>
            <div className="swiper-slide">
              <ExProblema009 />
            </div>
            <div className="swiper-slide">
              <ExProblema010 />
            </div>
            <div className="swiper-slide">
              <ExProblema011 />
            </div>
            <div className="swiper-slide">
              <ExProblema012 />
            </div>
            <div className="swiper-slide">
              <ExProblema013 />
            </div>
            <div className="swiper-slide">
              <ExProblema014 />
            </div>
            <div className="swiper-slide">
              <ExProblema015 />
            </div>
            <div className="swiper-slide">
              <ExProblema016 />
            </div>
            <div className="swiper-slide">
              <ExProblema017 />
            </div>
            <div className="swiper-slide">
              <ExProblema018 />
            </div>
            <div className="swiper-slide">
              <ExProblema019 />
            </div>
            <div className="swiper-slide">
              <ExProblema020 />
            </div>
            <div className="swiper-slide">
              <ExProblema021 />
            </div>
            <div className="swiper-slide">
              <ExProblema022 />
            </div>
            <div className="swiper-slide">
              <ExProblema023 />
            </div>
            <div className="swiper-slide">
              <ExProblema024 />
            </div>
            <div className="swiper-slide">
              <ExProblema025 />
            </div>
            <div className="swiper-slide">
              <ExProblema026 />
            </div>
            <div className="swiper-slide">
              <ExProblema027 />
            </div>
            <div className="swiper-slide">
              <ExProblema028 />
            </div>
            <div className="swiper-slide">
              <ExProblema029 />
            </div>
            <div className="swiper-slide">
              <ExProblema030 />
            </div>
            <div className="swiper-slide">
              <ExProblema031 />
            </div>
          </div>
          <div className="swiper-pagination swiper-pagination-h"></div>
        </div>
        <ExSliderFondo />
      </EjemploStyled>
    </HelmetProvider>
  );
};

export default ExOperadores1;
