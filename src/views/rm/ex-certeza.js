import Swiper from "swiper/swiper-bundle";
import React, { useEffect, useRef } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ExSliderFondo from "../../components/clases/ex-slider-fondo";
import ExHeaderSlider from "../../components/clases/ex-header-slider";
import ExPresentacionA from "../../components/clases/certeza/pre/ex-presentacion-a";
import ExTeoria1 from "../../components/clases/certeza/pre/ex-teoria-1";
const EjemploStyled = styled.div`
  width: 100%;
  height: 100%;
  background: #02071a;
  .swiper {
    &-container {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      &-v {
        background: #eee;
      }
    }

    &-wrapper {
      width: 100%;
      height: 100%;
    }
    &-slide {
      width: 100%;
      height: 100%;
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
const ExCerteza = () => {
  const swiperH = useRef(null);

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
  }, []);
  return (
    <HelmetProvider>
      <EjemploStyled>
        <Helmet>
          <title>Certeza</title>
        </Helmet>
        <ExHeaderSlider />
        <div className="swiper-container swiper-container-h">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <ExPresentacionA />
            </div>
            <div className="swiper-slide">
              <ExTeoria1 />
            </div>
          </div>
          <ExSliderFondo />
          <div className="swiper-pagination swiper-pagination-h"></div>
        </div>
      </EjemploStyled>
    </HelmetProvider>
  );
};

export default ExCerteza;
