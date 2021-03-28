import React, { useEffect } from "react";
import anime from "animejs";
import { ReactComponent as Enunciado } from "../../../../static/img/clases/verdades-mentiras/0131106.svg";
import { ReactComponent as Problema } from "../../../../static/img/slider/problema.svg";
import { ReactComponent as Solucion } from "../../../../static/img/slider/solucion.svg";
import { ReactComponent as Resolucion } from "../../../../static/img/clases/verdades-mentiras/0131206.svg";
import ExCSSSlider from "../../ex-css-slider.";

function ExProblema006() {
  var basicTimelineSolucion = anime.timeline({
    autoplay: false,
    easing: "linear",
  });

  function play() {
    basicTimelineSolucion.play();
  }
  function pause() {
    basicTimelineSolucion.pause();
  }

  useEffect(() => {
    basicTimelineSolucion
      .add(
        {
          targets: ".solution06 #primero path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 400;
          },
          delay: (el, i) => {
            return i * 400;
          },
        },
        "+=1000"
      )
      .add(
        {
          targets: ".solution06 #segundo path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 400;
          },
          delay: (el, i) => {
            return i * 400;
          },
        },
        "+=2000"
      )
      .add(
        {
          targets: ".solution06 #respuesta path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 400;
          },
          delay: (el, i) => {
            return i * 400;
          },
        },
        "+=1000"
      )
      .add({
        targets: ".problem06 #flecha path",
        opacity: [0, 1],
        translateX: [-200, 0],
        translateY: [200, 0],
        autoplay: true,
        easing: "linear",
        duration: 500,
        delay: 1500,
      });
  }, [basicTimelineSolucion]);
  return (
    <ExCSSSlider>
      <div onClick={play} className="enunciado">
        <Problema className="title-prob" />
        <Enunciado className="problem06" />
      </div>
      <div onClick={pause} className="solucion">
        <Solucion className="title-sol" />
        <Resolucion className="solution06" />
      </div>
    </ExCSSSlider>
  );
}

export default ExProblema006;
