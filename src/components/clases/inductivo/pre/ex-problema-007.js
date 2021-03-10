import React, { useEffect } from "react";
import anime from "animejs";
import { ReactComponent as Enunciado } from "../../../../static/img/clases/inductivo/0123107.svg";
import { ReactComponent as Problema } from "../../../../static/img/slider/problema.svg";
import { ReactComponent as Solucion } from "../../../../static/img/slider/solucion.svg";
import { ReactComponent as Resolucion } from "../../../../static/img/clases/inductivo/01232071.svg";
import ExCSSSlider from "../../ex-css-slider.";

function ExProblema007() {
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
    basicTimelineSolucion.add({
      targets: ".solution07  path",
      opacity: [0, 1],
      duration: (el, i) => {
        return 500;
      },
      delay: (el, i) => {
        return i * 500;
      },
    });
  }, [basicTimelineSolucion]);
  return (
    <ExCSSSlider>
      <div onClick={play}>
        <Problema className="title-prob" />
        <Enunciado className="problem07  flecha" />
      </div>
      <div onClick={pause}>
        <Solucion className="title-sol" />
        <Resolucion className="solution07" />
      </div>
    </ExCSSSlider>
  );
}

export default ExProblema007;