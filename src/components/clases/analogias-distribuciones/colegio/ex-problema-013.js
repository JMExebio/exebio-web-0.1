import React, { useEffect } from "react";
import anime from "animejs";
import { ReactComponent as Enunciado } from "../../../../static/img/clases/analogias-distribuciones/0119113.svg";
import { ReactComponent as Problema } from "../../../../static/img/slider/problema.svg";
import { ReactComponent as Solucion } from "../../../../static/img/slider/solucion.svg";
import { ReactComponent as Resolucion } from "../../../../static/img/clases/analogias-distribuciones/0119213.svg";
import ExCSSSlider from "../../ex-css-slider.";

function ExProblema013() {
  var basicTimelineSolucion = anime.timeline({
    autoplay: false,
    easing: "linear",
  });
  var basicTimelineClave = anime.timeline({
    autoplay: true,
    easing: "linear",
  });
  function play() {
    basicTimelineSolucion.play();
  }
  function pause() {
    basicTimelineSolucion.pause();
  }

  useEffect(() => {
    basicTimelineClave.add({
      targets: ".problem13 #flecha path",
      opacity: 0,
    });
    basicTimelineSolucion
      .add({
        targets: ".problem-solution13 path",
        opacity: [0, 1],
        duration: (el, i) => {
          return 400;
        },
        delay: (el, i) => {
          return i * 400;
        },
      })
      .add({
        targets: ".problem13 #flecha path",
        opacity: 1,
        autoplay: true,
        easing: "linear",
        duration: 1500,
        delay: 1500,
      });
  }, [basicTimelineSolucion, basicTimelineClave]);
  return (
    <ExCSSSlider>
      <div onClick={play} className="enunciado">
        <Problema className="title-prob" />
        <Enunciado className="problem13" />
      </div>
      <div onClick={pause} className="solucion">
        <Solucion className="title-sol" />
        <Resolucion className="problem-solution13" />
      </div>
    </ExCSSSlider>
  );
}

export default ExProblema013;
