import React, { useEffect } from "react";
import anime from "animejs";
import { ReactComponent as Enunciado } from "../../../../static/img/clases/estadistica/0125104.svg";
import { ReactComponent as Problema } from "../../../../static/img/slider/problema.svg";
import { ReactComponent as Solucion } from "../../../../static/img/slider/solucion.svg";
import { ReactComponent as Resolucion } from "../../../../static/img/clases/estadistica/01252041.svg";
import ExCSSSlider from "../../ex-css-slider.";

function ExProblema004() {
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
      .add(
        {
          targets:
            ".solution04b path, .solution04b rect",
          opacity: [0, 1],
          duration: (el, i) => {
            return 400;
          },
          delay: (el, i) => {
            return i * 400;
          },
        },
        "+=1000"
      );
  }, [basicTimelineSolucion]);
  return (
      <ExCSSSlider>
        <div onClick={play} className="enunciado">
          <Problema className="title-prob" />
          <Enunciado className="problem04b  problem" />
        </div>
        <div onClick={pause} className="solucion">
          <Solucion className="title-sol" />
          <Resolucion className="solution04b solution" />
        </div>
      </ExCSSSlider>
  );
}

export default ExProblema004;