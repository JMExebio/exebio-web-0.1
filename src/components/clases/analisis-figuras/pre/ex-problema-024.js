import React, { useEffect } from "react";
import anime from "animejs";
import { ReactComponent as Enunciado } from "../../../../static/img/clases/analisis-figuras/0127124.svg";
import { ReactComponent as Problema } from "../../../../static/img/slider/problema.svg";
import { ReactComponent as Solucion } from "../../../../static/img/slider/solucion.svg";
import { ReactComponent as Resolucion } from "../../../../static/img/clases/analisis-figuras/0127224.svg";
import ExCSSSlider from "../../ex-css-slider.";

function ExProblema024() {
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
        targets: ".solution24 path",
        opacity: [0, 1],
        duration: (el, i) => {
          return 400;
        },
        delay: (el, i) => {
          return i * 400;
        },
      })
      .add({
        targets: ".problem24 #flecha path",
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
        <Enunciado className="problem24" />
      </div>
      <div onClick={pause} className="solucion">
        <Solucion className="title-sol" />
        <Resolucion className="solution24" />
      </div>
    </ExCSSSlider>
  );
}

export default ExProblema024;