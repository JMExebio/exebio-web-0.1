import Swiper from "swiper/swiper-bundle";
import React, { useEffect, useRef } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
import styled from "styled-components";
import { Helmet, HelmetProvider } from "react-helmet-async";
import ExSliderFondo from "../../components/clases/ex-slider-fondo";
import ExHeaderSlider from "../../components/clases/ex-header-slider";
import ExPresentacionA from "../../components/clases/juegos-ingenio/pre/ex-presentacion-a";
import ExTeoria1 from "../../components/clases/juegos-ingenio/pre/ex-teoria-1";
import ExTeoria11 from "../../components/clases/juegos-ingenio/pre/ex-teoria-11";
import ExTeoria2 from "../../components/clases/juegos-ingenio/pre/ex-teoria-2";
import ExTeoria21 from "../../components/clases/juegos-ingenio/pre/ex-teoria-21";
import ExTeoria3 from "../../components/clases/juegos-ingenio/pre/ex-teoria-3";
import ExTeoria31 from "../../components/clases/juegos-ingenio/pre/ex-teoria-31";
import ExTeoria4 from "../../components/clases/parentesco/pre/ex-teoria-4";
import ExTeoria41 from "../../components/clases/parentesco/pre/ex-teoria-41";
import ExTeoria5 from "../../components/clases/tiempo-cronometria/pre/ex-teoria-1";
import ExTeoria51 from "../../components/clases/tiempo-cronometria/pre/ex-teoria-11";

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
const ExJuegosIngenio = () => {
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
          <title>Juegos Ingenio</title>
        </Helmet>
        <ExHeaderSlider />
        <div className="swiper-container swiper-container-h">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <ExPresentacionA />
            </div>
            <div className="swiper-slide">
              <div className="swiper-container swiper-container-v">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <ExTeoria1 />
                  </div>
                  <div className="swiper-slide">
                    <ExTeoria11 />
                  </div>
                </div>
                <div className="swiper-pagination swiper-pagination-v"></div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-container swiper-container-v">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <ExTeoria2 />
                  </div>
                  <div className="swiper-slide">
                    <ExTeoria21 />
                  </div>
                </div>
                <div className="swiper-pagination swiper-pagination-v"></div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-container swiper-container-v">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <ExTeoria3 />
                  </div>
                  <div className="swiper-slide">
                    <ExTeoria31 />
                  </div>
                </div>
                <div className="swiper-pagination swiper-pagination-v"></div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-container swiper-container-v">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <ExTeoria4 />
                  </div>
                  <div className="swiper-slide">
                    <ExTeoria41 />
                  </div>
                </div>
                <div className="swiper-pagination swiper-pagination-v"></div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="swiper-container swiper-container-v">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <ExTeoria5 />
                  </div>
                  <div className="swiper-slide">
                    <ExTeoria51 />
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

export default ExJuegosIngenio;
