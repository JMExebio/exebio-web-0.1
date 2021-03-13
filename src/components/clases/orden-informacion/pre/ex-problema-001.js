import React, { useEffect } from "react";
import anime from "animejs";
import { ReactComponent as Enunciado } from "../../../../static/img/clases/orden-informacion/0128101.svg";
import { ReactComponent as Problema } from "../../../../static/img/slider/problema.svg";
import { ReactComponent as Solucion } from "../../../../static/img/slider/solucion.svg";
import { ReactComponent as Resolucion } from "../../../../static/img/clases/orden-informacion/0128201.svg";
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
    basicTimelineSolucion.add({
      targets: ".solution01y  path",
      opacity: [0, 1],
      duration: (el, i) => {
        return 550;
      },
      delay: (el, i) => {
        return i * 550;
      },
    }).add({
      targets: ".problem01y #flecha path",
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
      <div onClick={play} className="enunciado">
        <Problema className="title-prob" />
        <Enunciado className="problem01y  problem" />
      </div>
      <div onClick={pause} className="solucion">
        <Solucion className="title-sol" />
        <Resolucion className="solution01y" />
      </div>
    </ExCSSSlider>
  );
}

export default ExProblema001;