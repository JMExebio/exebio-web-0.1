import Swiper from "swiper/swiper-bundle";
import React, { useEffect, useRef } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ExSliderFondo from "../../components/clases/ex-slider-fondo";
import ExHeaderSlider from "../../components/clases/ex-header-slider";
import ExProblema001 from "../../components/clases/orden-informacion/pre/ex-problema-016";
import ExProblema002 from "../../components/clases/orden-informacion/pre/ex-problema-017";
import ExProblema003 from "../../components/clases/orden-informacion/pre/ex-problema-018";
import ExProblema004 from "../../components/clases/orden-informacion/pre/ex-problema-019";
import ExProblema005 from "../../components/clases/orden-informacion/pre/ex-problema-021";
import ExProblema006 from "../../components/clases/orden-informacion/pre/ex-problema-022";
import ExProblema007 from "../../components/clases/orden-informacion/pre/ex-problema-023";
import ExProblema008 from "../../components/clases/orden-informacion/pre/ex-problema-024";
import ExProblema009 from "../../components/clases/orden-informacion/pre/ex-problema-025";



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
const ExOrdenInformacion2 = () => {
  const swiperH = useRef(null);
  const swiperV = useRef(null);

  useEffect(() => {
    swiperH.current = new Swiper(".swiper-container-h", {
      allowTouchMove: false,
      pagination: {
        el: ".swiper-pagination-h",
        clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
      },
    });
    swiperV.current = new Swiper(".swiper-container-v", {
      direction: "vertical",
      allowTouchMove: false,
      pagination: {
        el: ".swiper-pagination-v",
        clickable: true,
      },
    });
  }, []);
  return (
    <HelmetProvider>
      <EjemploStyled>
        <Helmet>
          <title>Orden Información</title>
        </Helmet>
        <ExHeaderSlider />
        <div className="swiper-container swiper-container-h">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <ExProblema001 />
            </div>
            <div className="swiper-slide">
              <ExProblema006 />
            </div>
            <div className="swiper-slide">
              <ExProblema002/>
            </div> 
            <div className="swiper-slide">
              <ExProblema007 />
            </div> 
            <div className="swiper-slide">
              <ExProblema003 />
            </div> 
            <div className="swiper-slide">
              <ExProblema008 />
            </div> 
            <div className="swiper-slide">
              <ExProblema004/>
            </div>
            <div className="swiper-slide">
              <ExProblema009 />
            </div>
            <div className="swiper-slide">
              <ExProblema005 />
            </div>
          </div>
          <div className="swiper-pagination swiper-pagination-h"></div>
        </div>
        <ExSliderFondo />
      </EjemploStyled>
    </HelmetProvider>
  );
};

export default ExOrdenInformacion2;