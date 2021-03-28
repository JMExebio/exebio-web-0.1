import Swiper from "swiper/swiper-bundle";
import React, { useEffect, useRef } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ExSliderFondo from "../../components/clases/ex-slider-fondo";
import ExHeaderSlider from "../../components/clases/ex-header-slider";
import ExProblema001 from "../../components/clases/analisis-figuras/pre/ex-problema-001";
import ExProblema002 from "../../components/clases/analisis-figuras/pre/ex-problema-002";
import ExProblema003 from "../../components/clases/analisis-figuras/pre/ex-problema-003";
import ExProblema004 from "../../components/clases/analisis-figuras/pre/ex-problema-004";
import ExProblema005 from "../../components/clases/analisis-figuras/pre/ex-problema-005";
import ExProblema006 from "../../components/clases/analisis-figuras/pre/ex-problema-006";
import ExProblema007 from "../../components/clases/analisis-figuras/pre/ex-problema-007";
import ExProblema008 from "../../components/clases/analisis-figuras/pre/ex-problema-008";
import ExProblema009 from "../../components/clases/analisis-figuras/pre/ex-problema-009";
import ExProblema010 from "../../components/clases/analisis-figuras/pre/ex-problema-010";
import ExProblema011 from "../../components/clases/analisis-figuras/pre/ex-problema-011";
import ExProblema012 from "../../components/clases/analisis-figuras/pre/ex-problema-012";
import ExProblema013 from "../../components/clases/analisis-figuras/pre/ex-problema-013";
import ExProblema014 from "../../components/clases/analisis-figuras/pre/ex-problema-014";
import ExProblema015 from "../../components/clases/analisis-figuras/pre/ex-problema-015";
import ExPresentacionA from "../../components/clases/analogias-distribuciones/colegio/ex-presentacion-a";
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
const ExAnalisisFiguras1 = () => {
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
          <title>Analogías y Distribuciones</title>
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
          </div>
          <div className="swiper-pagination swiper-pagination-h"></div>
        </div>
        <ExSliderFondo />
      </EjemploStyled>
    </HelmetProvider>
  );
};

export default ExAnalisisFiguras1;