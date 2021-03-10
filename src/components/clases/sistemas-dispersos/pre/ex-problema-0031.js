import React, { useEffect } from "react";
import anime from "animejs";
import  { ReactComponent as Enunciado } from "../../../../static/img/clases/sistemas-dispersos/03052032.svg";
import { ReactComponent as Continuacion } from "../../../../static/img/slider/conti.svg";
import ExCSSSlider from "../../ex-css-slider.";

function ExProblema0031() {
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
        targets: ".solution032 path, .solution032 rect",
        opacity: [0, 1],
        duration: (el, i) => {
          return 400;
        },
        delay: (el, i) => {
          return i * 400;
        },
      }).add({
        targets: ".problem03 #flecha path",
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
        <Enunciado className="solution032" onClick={pause} />
      </div>
      <div>
      </div>
    </ExCSSSlider>
  );
}

export default ExProblema0031;