import React, { useEffect } from "react";
import anime from "animejs";
import  { ReactComponent as Enunciado } from "../../../../static/img/clases/inductivo/01232092.svg";
import { ReactComponent as Continuacion } from "../../../../static/img/slider/conti.svg";
import ExCSSSlider from "../../ex-css-slider.";

function ExProblema0091() {
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
        targets: ".solution092 path, .solution092 rect",
        opacity: [0, 1],
        duration: (el, i) => {
          return 400;
        },
        delay: (el, i) => {
          return i * 400;
        },
      }).add({
        targets: ".problem09 #flecha path",
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
        <Enunciado className="solution092" onClick={pause} />
      </div>
      <div>
      </div>
    </ExCSSSlider>
  );
}

export default ExProblema0091;