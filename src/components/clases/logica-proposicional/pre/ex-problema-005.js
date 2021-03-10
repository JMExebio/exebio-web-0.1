import React, { useEffect } from "react";
import anime from "animejs";
import  { ReactComponent as Enunciado }  from "../../../../static/img/clases/logica-proposicional/0103105.svg";
import { ReactComponent as Problema } from "../../../../static/img/slider/problema.svg";
import { ReactComponent as Solucion } from "../../../../static/img/slider/solucion.svg";
import { ReactComponent as Resolucion } from "../../../../static/img/clases/logica-proposicional/01032051.svg";
import ExCSSSlider from "../../ex-css-slider.";

function ExProblema005() {
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
        targets: ".solution05e path",
        opacity: [0, 1],
        duration: (el, i) => {
          return 400;
        },
        delay: (el, i) => {
          return i * 400;
        },
      });
  }, [basicTimelineSolucion]);
  return (
    <ExCSSSlider>
      <div onClick={play} className="enunciado">
        <Problema className="title-prob" />
        <Enunciado className="problem05e"  />
      </div>
      <div onClick={pause} className= "solucion">
        <Solucion className="title-sol"/>
        <Resolucion className="solution05e" />
      </div>
    </ExCSSSlider>
  );
}

export default ExProblema005;