import React, { useEffect } from "react";
import anime from "animejs";
import { ReactComponent as Enunciado } from "../../../../static/img/clases/logicaclases/0117101.svg";
import { ReactComponent as Problema } from "../../../../static/img/slider/problema.svg";
import { ReactComponent as Solucion } from "../../../../static/img/slider/solucion.svg";
import { ReactComponent as Resolucion } from "../../../../static/img/clases/logicaclases/0117201.svg";
import ExCSSSlider from "../../ex-css-slider.";

function ExProblema011() {
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
        targets: ".problem-solution11 #text01 path",
        opacity: [0, 1],
        duration: (el, i) => {
          return 50;
        },
        delay: (el, i) => {
          return i * 100;
        },
      })
      .add({
        targets: ".problem-solution11 #text02 path",
        opacity: [0, 1],
        duration: (el, i) => {
          return 50;
        },
        delay: (el, i) => {
          return i * 100;
        },
      },"+=1500")
      .add(
        {
          targets: ".problem-solution11 #circulo01",
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
          targets: ".problem-solution11 #flecha01",
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
          targets: ".problem-solution11 #flecha02",
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
          targets: ".problem-solution11 #text03 path",
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
          targets: ".problem-solution11 #text04 path",
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
          targets: ".problem-solution11 #text05 path",
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
          targets: ".problem-solution11 #text06 path",
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
          targets: ".problem-solution11 #text07 path",
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
          targets: ".problem-solution11 #flecha03",
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
          targets: ".problem-solution11 #flecha04",
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
          targets: ".problem-solution11 #porlotanto01",
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
          targets: ".problem-solution11 #text08 path",
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
          targets: ".problem-solution11 #text09 path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 50;
          },
          delay: (el, i) => {
            return i * 100;
          },
        },
        "+=2000"
      )
      ;
  }, [basicTimelineSolucion]);
  return (
    <ExCSSSlider>
      <div onClick={play}>
        <Problema className="title-prob" />
        <Enunciado className="problem" />
      </div>
      <div onClick={pause}>
        <Solucion className="title-sol" />
        <Resolucion className="problem-solution11" />
      </div>
    </ExCSSSlider>
  );
}

export default ExProblema011;