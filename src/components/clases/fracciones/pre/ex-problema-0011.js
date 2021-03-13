import React, { useEffect } from "react";
import anime from "animejs";
import { ReactComponent as Enunciado } from "../../../../static/img/clases/fracciones/01302012.svg";
import { ReactComponent as Continuacion } from "../../../../static/img/slider/conti.svg";
import { ReactComponent as Solucion } from "../../../../static/img/clases/fracciones/01302013.svg";
import ExCSSSlider from "../../ex-css-slider.";

function ExProblema0011() {
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
        targets: ".solution012v path, .solution012v rect",
        opacity: [0, 1],
        duration: (el, i) => {
          return 400;
        },
        delay: (el, i) => {
          return i * 400;
        },
      })
      .add(
        {
          targets: ".solution013v path, .solution013v rect",
          opacity: [0, 1],
          duration: (el, i) => {
            return 400;
          },
          delay: (el, i) => {
            return i * 400;
          },
        },
        "+=1000"
      )
      .add({
        targets: ".problem01v #flecha path",
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
      <div>
        <Continuacion className="title-prob" onClick={play} />
        <Enunciado className="solution012v" onClick={pause} />
      </div>
      <div>
        <Continuacion className="title-prob" onClick={play} />
        <Solucion className="solution013v" onClick={pause} />
      </div>
    </ExCSSSlider>
  );
}

export default ExProblema0011;
