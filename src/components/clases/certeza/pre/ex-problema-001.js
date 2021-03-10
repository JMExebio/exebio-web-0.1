import React, { useEffect } from "react";
import anime from "animejs";
import { ReactComponent as Enunciado } from "../../../../static/img/clases/certeza/0122101.svg";
import { ReactComponent as Problema } from "../../../../static/img/slider/problema.svg";
import { ReactComponent as Solucion } from "../../../../static/img/slider/solucion.svg";
import { ReactComponent as Resolucion } from "../../../../static/img/clases/certeza/0122201.svg";
import ExCSSSlider from "../../ex-css-slider.";


function ExProblema001() {
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
          targets: ".solution1 #cajas-bolas g, .solution1  #solucion #text-1",
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
      .add(
        {
          targets:
            ".solution1 #solucion #bolitas-primos path, .solution1  #ecu path",
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
      .add(
        {
          targets: ".problem1 #flecha path",
          opacity: [0, 1],
          translateX: [-200, 0],
          translateY: [200, 0],
          autoplay: true,
          easing: "linear",
          duration: 500,
          delay: 1500,
        },
        "+=1000"
      );
  }, [basicTimelineSolucion]);
  return (
      <ExCSSSlider>
        <div onClick={play} className="enunciado">
          <Problema className="title-prob" />
          <Enunciado className="problem1  problem" />
        </div>
        <div onClick={pause} className="solucion">
          <Solucion className="title-sol" />
          <Resolucion className="solution1 solution" />
        </div>
      </ExCSSSlider>
  );
}

export default ExProblema001;
