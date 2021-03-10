import React, { useEffect } from "react";
import anime from "animejs";
import  { ReactComponent as Enunciado } from "../../../../static/img/clases/certeza/01222162.svg";
import { ReactComponent as Continuacion } from "../../../../static/img/slider/conti.svg";
import { ReactComponent as Resolucion } from "../../../../static/img/clases/certeza/01222163.svg";
import ExCSSSlider from "../../ex-css-slider.";

function ExProblema0161() {
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
        targets: ".solution162 path",
        opacity: [0, 1],
        duration: (el, i) => {
          return 400;
        },
        delay: (el, i) => {
          return i * 400;
        },
      }).add({
        targets: ".solution163 path",
        opacity: [0, 1],
        duration: (el, i) => {
          return 400;
        },
        delay: (el, i) => {
          return i * 400;
        },
      }).add({
        targets: ".problem16 #flecha path",
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
        <Enunciado className="solution162" onClick={pause} />
      </div>
      <div>
        <Continuacion className="title-sol" onClick={play} />
        <Resolucion className="solution163" onClick={pause}/>
      </div>
    </ExCSSSlider>
  );
}

export default ExProblema0161;