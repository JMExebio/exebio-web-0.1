import React, { useEffect } from "react";
import anime from "animejs";
import { ReactComponent as Enunciado } from "../../../../static/img/clases/inductivo/0123103.svg";
import { ReactComponent as Problema } from "../../../../static/img/slider/problema.svg";
import { ReactComponent as Solucion } from "../../../../static/img/slider/solucion.svg";
import { ReactComponent as Resolucion } from "../../../../static/img/clases/inductivo/0123203.svg";
import ExCSSSlider from "../../ex-css-slider.";

function ExProblema003() {
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
      targets: ".problem-solution3  path, .problem-solution3  rect",
      opacity: [0, 1],
      duration: (el, i) => {
        return 500;
      },
      delay: (el, i) => {
        return i * 500;
      },
    }).add({
      targets: ".problem3 #flecha path",
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
        <Enunciado className="problem3  flecha" />
      </div>
      <div onClick={pause}>
        <Solucion className="title-sol" />
        <Resolucion className="problem-solution3" />
      </div>
    </ExCSSSlider>
  );
}

export default ExProblema003;