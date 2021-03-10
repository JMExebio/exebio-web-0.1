import React, { useEffect } from "react";
import anime from "animejs";
import  { ReactComponent as Enunciado } from "../../../../static/img/clases/operadores/0118125.svg";
import { ReactComponent as Problema } from "../../../../static/img/slider/problema.svg";
import { ReactComponent as Solucion } from "../../../../static/img/slider/solucion.svg";
import { ReactComponent as Resolucion } from "../../../../static/img/clases/operadores/0118225.svg";
import ExCSSSlider from "../../ex-css-slider.";

function ExProblema025() {
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
        targets: ".problem-solution25 path, .problem-solution25 rect",
        opacity: [0, 1],
        duration: (el, i) => {
          return 400;
        },
        delay: (el, i) => {
          return i * 400;
        },
      }).add({
        targets: ".problem25 #flecha path",
        opacity: [0,1],
        translateX: [-200, 0],
        translateY: [200, 0],
        autoplay: true,
        easing: "linear",
        duration:500,
        delay:1500,
      });
  }, [basicTimelineSolucion]);
  return (
    <ExCSSSlider>
      <div onClick={play}>
        <Problema className="title-prob" />
        <Enunciado className="problem25"  />
      </div>
      <div onClick={pause}>
        <Solucion className="title-sol" />
        <Resolucion className="problem-solution25" />
      </div>
    </ExCSSSlider>
  );
}

export default ExProblema025;