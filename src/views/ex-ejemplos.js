import Swiper from "swiper/swiper-bundle";
import React, { useEffect, useRef } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.scss";
import styled from "styled-components";
import ExProblema001 from "../components/clases/planteo-ecuaciones/colegio/ex-problema-001";
import ExSliderFondo from "../components/clases/ex-slider-fondo";
import ExHeaderSlider from "../components/clases/ex-header-slider";
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
      height:100%;
    }
    &-slide {
      text-align: center;
      color: red;
      width: 100%;
      height: 100%;
      font-size: 18px;

      /* Center slide text vertically */
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
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
const ExEjemplos = () => {
  const swiperH = useRef(null);
  const swiperV = useRef(null);
  useEffect(() => {
    swiperH.current = new Swiper(".swiper-container-h", {
      allowTouchMove:false,
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
      allowTouchMove:false,
      pagination: {
        el: ".swiper-pagination-v",
        clickable: true,
      },
    });
    //add necessary parameters required by checking the offical docs of swiper
  }, []);
  return (
    <EjemploStyled>
      <ExHeaderSlider/>
      <div className="swiper-container swiper-container-h">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <ExProblema001/>
          </div>
          <div className="swiper-slide">
            <div className="swiper-container swiper-container-v">
              <div className="swiper-wrapper">
                <div className="swiper-slide">Vertical Slide 1</div>
                <div className="swiper-slide">Vertical Slide 2</div>
                <div className="swiper-slide">Vertical Slide 3</div>
                <div className="swiper-slide">Vertical Slide 4</div>
                <div className="swiper-slide">Vertical Slide 5</div>
              </div>
              <div className="swiper-pagination swiper-pagination-v"></div>
            </div>
          </div>
          <div className="swiper-slide">Horizontal Slide 3</div>
          <div className="swiper-slide">Horizontal Slide 4</div>
        </div>
        <ExSliderFondo/>
        <div className="swiper-pagination swiper-pagination-h"></div>
      </div>
    </EjemploStyled>
  );
};

export default ExEjemplos;
