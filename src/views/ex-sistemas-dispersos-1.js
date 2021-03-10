import Swiper from "swiper/swiper-bundle";
import React, { useEffect, useRef } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ExSliderFondo from "../components/clases/ex-slider-fondo";
import ExHeaderSlider from "../components/clases/ex-header-slider";
import ExProblema001 from "../components/clases/sistemas-dispersos/pre/ex-problema-001";
import ExProblema0011 from "../components/clases/sistemas-dispersos/pre/ex-problema-0011";
import ExProblema002 from "../components/clases/sistemas-dispersos/pre/ex-problema-002";
import ExProblema0021 from "../components/clases/sistemas-dispersos/pre/ex-problema-0021";
import ExProblema003 from "../components/clases/sistemas-dispersos/pre/ex-problema-003";
import ExProblema0031 from "../components/clases/sistemas-dispersos/pre/ex-problema-0031";

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
const ExSistemasDispersos1 = () => {
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
          <title>Sistemas Dispersos</title>
        </Helmet>
        <ExHeaderSlider />
        <div className="swiper-container swiper-container-h">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="swiper-container swiper-container-v">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <ExProblema001 />
                  </div>
                  <div className="swiper-slide">
                    <ExProblema0011 />
                  </div>
                </div>
                <div className="swiper-pagination swiper-pagination-v"></div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-container swiper-container-v">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <ExProblema002 />
                  </div>
                  <div className="swiper-slide">
                    <ExProblema0021 />
                  </div>
                </div>
                <div className="swiper-pagination swiper-pagination-v"></div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-container swiper-container-v">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <ExProblema003 />
                  </div>
                  <div className="swiper-slide">
                    <ExProblema0031 />
                  </div>
                </div>
                <div className="swiper-pagination swiper-pagination-v"></div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination swiper-pagination-h"></div>
        </div>
        <ExSliderFondo />
      </EjemploStyled>
    </HelmetProvider>
  );
};

export default ExSistemasDispersos1;
