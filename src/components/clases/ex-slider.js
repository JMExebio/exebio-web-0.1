import React, { useEffect, useState } from "react";
import styled from "styled-components";
import anime from "animejs";
import ExSliderFondo from "./ex-slider-fondo";
const SliderMioStyled = styled.div`
  width: 100%;
  background: #02071a;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 5vh 10vh;
  grid-row-gap: 1px;
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  .mySlides {
  }
  .activo {
    display: block;
  }
  .inactivo {
    display: none;
  }
  .control-dots {
    width: 100%;
    margin: auto;
    padding: 0;
    text-align: center;
    list-style: none;
    top:0;
  }
  .dots {
    background: #65c1df;
    width: 8px;
    height: 8px;
    display: inline-flex;
    border-radius: 50%;
    margin: 0 8px;
    outline: none;
    top:0;
  }
  .active {
    background: #6eef31;
    width: 12px;
    height: 12px;
  }
  @media screen and (min-width: 600px) {
    grid-template-rows: 1fr 7vh 7vh;
  }
`;
const ExSlider = ({ children }) => {
  const [slider, setSlider] = useState(0);
  const [activeLink, setActiveLink] = useState(0);
  var n = 0;
  var x = document.getElementsByClassName("mySlides");
  useEffect(() => {
    carousel();
  }, []);
  
  const animeTimelineSalir = anime.timeline();
  function handleClick(e, i) {
    setActiveLink(i);
    for (n = 0; n < x.length; n++) {
      if (x[n].className === "mySlides activo") {
        animeTimelineSalir.add({
          targets: x[n],
          translateX: [0, -300],
          duration: 10,
          easing: "easeInOutSine",
          delay: 50,
        });
        x[n].className = "mySlides inactivo";
      }
    }
    x[i].className = "mySlides activo";
    animeTimelineSalir.add({
      targets: `.${x[i].classList[0]}`,
      opacity: [0, 1],
      translateX: [600, 0],
      duration: 100,
      easing: "easeInOutSine",
      delay: 100,
    });
  }
  function carousel() {
    setSlider(x.length);
  }
  return (
    <SliderMioStyled className="w3-content w3-section">
      {children}
      <ExSliderFondo />
      <ul className="control-dots">
        {[...Array(slider)].map((index, i) => (
          <i
            key={i}
            className={`${activeLink === i ? "dots active" : "dots"}`}
            onClick={(e) => handleClick(e, i)}
          ></i>
        ))}
      </ul>
    </SliderMioStyled>
  );
};

export default ExSlider;
