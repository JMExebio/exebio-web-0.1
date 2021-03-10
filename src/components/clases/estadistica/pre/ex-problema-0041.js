import React, { useEffect } from "react";
import anime from "animejs";
import  { ReactComponent as Enunciado } from "../../../../static/img/clases/estadistica/01252042.svg";
import { ReactComponent as Continuacion } from "../../../../static/img/slider/conti.svg";
import  { ReactComponent as Solucion } from "../../../../static/img/clases/estadistica/01252043.svg";
import ExCSSSlider from "../../ex-css-slider.";

function ExProblema0041() {
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
        targets: ".solution043b path, .solution043b rect",
        opacity: [0, 1],
        duration: (el, i) => {
          return 400;
        },
        delay: (el, i) => {
          return i * 400;
        },
      }).add({
        targets: ".problem04b #flecha path",
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
      <div>
        <Continuacion className="title-prob" onClick={play}/>
        <Enunciado className="solution042b" onClick={pause} />
      </div>
      <div>
      <Continuacion className="title-prob" onClick={play}/>
        <Solucion className="solution043b" onClick={pause} />
      </div>
    </ExCSSSlider>
  );
}

export default ExProblema0041;