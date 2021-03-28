import React, { useEffect } from "react";
import anime from "animejs";
import { ReactComponent as Enunciado } from "../../../../static/img/clases/verdades-mentiras/0131102.svg";
import { ReactComponent as Problema } from "../../../../static/img/slider/problema.svg";
import { ReactComponent as Solucion } from "../../../../static/img/slider/solucion.svg";
import { ReactComponent as Resolucion } from "../../../../static/img/clases/verdades-mentiras/0131202.svg";
import ExCSSSlider from "../../ex-css-slider.";

function ExProblema002() {
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
          targets: ".solution02 #primero path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 350;
          },
          delay: (el, i) => {
            return i * 350;
          },
        },
        "+=1000"
      ).add(
        {
          targets: ".solution02 #segundo path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 800;
          },
          delay: (el, i) => {
            return i * 800;
          },
        },
        "+=2000"
      ).add(
        {
          targets: ".solution02 #respuesta path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 350;
          },
          delay: (el, i) => {
            return i * 350;
          },
        },
        "+=1000"
      )
      .add(
        {
          targets: ".problem02 #flecha path",
          opacity: [0, 1],
          translateX: [-200, 0],
          translateY: [200, 0],
          autoplay: true,
          easing: "linear",
          duration: 500,
          delay: 1500,
        },
        "+=1000"
      );
  }, [basicTimelineSolucion]);
  return (
      <ExCSSSlider>
        <div onClick={play} className="enunciado">
          <Problema className="title-prob" />
          <Enunciado className="problem02" />
        </div>
        <div onClick={pause} className="solucion">
          <Solucion className="title-sol" />
          <Resolucion className="solution02" />
        </div>
      </ExCSSSlider>
  );
}

export default ExProblema002;
