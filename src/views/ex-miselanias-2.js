import Swiper from "swiper/swiper-bundle";
import React, { useEffect, useRef } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ExSliderFondo from "../components/clases/ex-slider-fondo";
import ExHeaderSlider from "../components/clases/ex-header-slider";
import ExProblema001 from "../components/clases/porcentajes/pre/ex-problema-001";
import ExProblema002 from "../components/clases/porcentajes/pre/ex-problema-002";
import ExProblema003 from "../components/clases/estadistica/pre/ex-problema-001";
import ExProblema0031 from "../components/clases/estadistica/pre/ex-problema-0011";
import ExProblema004 from "../components/clases/estadistica/pre/ex-problema-002";
import ExProblema0041 from "../components/clases/estadistica/pre/ex-problema-0021";
import ExProblema005 from "../components/clases/estadistica/pre/ex-problema-003";
import ExProblema0051 from "../components/clases/estadistica/pre/ex-problema-0031";
import ExProblema006 from "../components/clases/estadistica/pre/ex-problema-004";
import ExProblema0061 from "../components/clases/estadistica/pre/ex-problema-0041";
import ExProblema007 from "../components/clases/suficiencia-datos/pre/ex-problema-001";
import ExProblema008 from "../components/clases/suficiencia-datos/pre/ex-problema-002";
import ExProblema009 from "../components/clases/deductivo/pre/ex-problema-001";
import ExProblema010 from "../components/clases/deductivo/pre/ex-problema-002";
import ExProblema011 from "../components/clases/orden-informacion/pre/ex-problema-001";
import ExProblema012 from "../components/clases/parentesco/pre/ex-problema-001";
import ExProblema013 from "../components/clases/tiempo-cronometria/pre/ex-problema-001";
import ExProblema014 from "../components/clases/deductivo/pre/ex-problema-003";
import ExProblema015 from "../components/clases/fracciones/pre/ex-problema-001";
import ExProblema0151 from "../components/clases/fracciones/pre/ex-problema-0011";
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
const ExMiselanias1 = () => {
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
      allowTouchMove: false,
      direction: "vertical",
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
          <title>Miselánias R.Matemático</title>
        </Helmet>
        <ExHeaderSlider />
        <div className="swiper-container swiper-container-h">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <ExProblema001 />
            </div>
            <div className="swiper-slide">
              <ExProblema002 />
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
            <div className="swiper-slide">
              <div className="swiper-container swiper-container-v">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <ExProblema004 />
                  </div>
                  <div className="swiper-slide">
                    <ExProblema0041 />
                  </div>
                </div>
                <div className="swiper-pagination swiper-pagination-v"></div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-container swiper-container-v">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <ExProblema005 />
                  </div>
                  <div className="swiper-slide">
                    <ExProblema0051 />
                  </div>
                </div>
                <div className="swiper-pagination swiper-pagination-v"></div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-container swiper-container-v">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <ExProblema006 />
                  </div>
                  <div className="swiper-slide">
                    <ExProblema0061 />
                  </div>
                </div>
                <div className="swiper-pagination swiper-pagination-v"></div>
              </div>
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
              <div className="swiper-container swiper-container-v">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <ExProblema015 />
                  </div>
                  <div className="swiper-slide">
                    <ExProblema0151 />
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

export default ExMiselanias1;