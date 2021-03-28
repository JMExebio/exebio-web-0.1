import React, { useEffect } from "react";
import anime from "animejs";
import { ReactComponent as Enunciado } from "../../../../static/img/clases/verdades-mentiras/0131104.svg";
import { ReactComponent as Problema } from "../../../../static/img/slider/problema.svg";
import { ReactComponent as Solucion } from "../../../../static/img/slider/solucion.svg";
import { ReactComponent as Resolucion } from "../../../../static/img/clases/verdades-mentiras/0131204.svg";
import ExCSSSlider from "../../ex-css-slider.";

function ExProblema004() {
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
      .add({
        targets: ".solution04 #primero path",
        opacity: [0, 1],
        duration: (el, i) => {
          return 350;
        },
        delay: (el, i) => {
          return i * 350;
        },
      })
      .add({
        targets: ".solution04 #segundo path",
        opacity: [0, 1],
        duration: (el, i) => {
          return 800;
        },
        delay: (el, i) => {
          return i * 800;
        },
      },"+=2000")
      .add({
        targets: ".solution04 #respuesta path",
        opacity: [0, 1],
        duration: (el, i) => {
          return 350;
        },
        delay: (el, i) => {
          return i * 350;
        },
      },"+=1000")
      .add({
        targets: ".problem04 #flecha path",
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
        <Enunciado className="problem04" />
      </div>
      <div onClick={pause} className="solucion">
        <Solucion className="title-sol" />
        <Resolucion className="solution04" />
      </div>
    </ExCSSSlider>
  );
}

export default ExProblema004;
