import React, { useEffect } from "react";
import anime from "animejs";
import { ReactComponent as Enunciado } from "../../../../static/img/clases/logicaclases/0117102.svg";
import { ReactComponent as Problema } from "../../../../static/img/slider/problema.svg";
import { ReactComponent as Solucion } from "../../../../static/img/slider/solucion.svg";
import { ReactComponent as Resolucion } from "../../../../static/img/clases/logicaclases/0117202.svg";
import ExCSSSlider from "../../ex-css-slider.";

function ExProblema010() {
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
        targets: ".problem-solution10 #text01 path",
        opacity: [0, 1],
        duration: (el, i) => {
          return 50;
        },
        delay: (el, i) => {
          return i * 100;
        },
      })
      .add(
        {
          targets: ".problem-solution10 #circulo01",
          opacity: [0, 1],
          duration: (el, i) => {
            return 800;
          },
          delay: (el, i) => {
            return i * 1000;
          },
        },
        "+=600"
      )
      .add(
        {
          targets: ".problem-solution10 #flecha01",
          opacity: [0, 1],
          duration: (el, i) => {
            return 800;
          },
          delay: (el, i) => {
            return i * 1000;
          },
        },
        "+=600"
      )
      .add(
        {
          targets: ".problem-solution10 #text02 path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 50;
          },
          delay: (el, i) => {
            return i * 100;
          },
        },
        "+=1500"
      )
      .add(
        {
          targets: ".problem-solution10 #text03 path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 50;
          },
          delay: (el, i) => {
            return i * 100;
          },
        },
        "+=1500"
      )
      .add(
        {
          targets: ".problem-solution10 #text04 path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 50;
          },
          delay: (el, i) => {
            return i * 100;
          },
        },
        "+=1500"
      )
      .add(
        {
          targets: ".problem-solution10 #porlotanto01",
          opacity: [0, 1],
          duration: (el, i) => {
            return 800;
          },
          delay: (el, i) => {
            return i * 1000;
          },
        },
        "+=600"
      )
      .add(
        {
          targets: ".problem-solution10 #text05 path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 50;
          },
          delay: (el, i) => {
            return i * 100;
          },
        },
        "+=1000"
      )
      .add(
        {
          targets: ".problem-solution10 #text06 path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 50;
          },
          delay: (el, i) => {
            return i * 100;
          },
        },
        "+=1000"
      )
      .add(
        {
          targets: ".problem-solution10 #flecha03",
          opacity: [0, 1],
          duration: (el, i) => {
            return 800;
          },
          delay: (el, i) => {
            return i * 1000;
          },
        },
        "+=600"
      )
      .add(
        {
          targets: ".problem-solution10 #flecha04",
          opacity: [0, 1],
          duration: (el, i) => {
            return 800;
          },
          delay: (el, i) => {
            return i * 1000;
          },
        },
        "+=600"
      )
      .add(
        {
          targets: ".problem-solution10 #text07 path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 50;
          },
          delay: (el, i) => {
            return i * 100;
          },
        },
        "+=2000"
      );
  }, [basicTimelineSolucion]);
  return (
    <ExCSSSlider>
      <div onClick={play}>
        <Problema className="title-prob" />
        <Enunciado className="problem" />
      </div>
      <div onClick={pause}>
        <Solucion className="title-sol" />
        <Resolucion className="problem-solution10" />
      </div>
    </ExCSSSlider>
  );
}

export default ExProblema010;
