import React, { useEffect } from "react";
import anime from "animejs";
import { ReactComponent as Enunciado } from "../../../../static/img/clases/logicaclases/0117111.svg";
import { ReactComponent as Problema } from "../../../../static/img/slider/problema.svg";
import { ReactComponent as Solucion } from "../../../../static/img/slider/solucion.svg";
import { ReactComponent as Resolucion } from "../../../../static/img/clases/logicaclases/0117211.svg";
import ExCSSSlider from "../../ex-css-slider.";

function ExProblema001() {
  var basicTimelineSolucion = anime.timeline({
    autoplay: false,
    easing: "linear",
  });
  var basicTimelineProblem = anime.timeline({
    autoplay: true,
    easing: "easeInSine",
  });

  function play() {
    basicTimelineSolucion.play();
  }
  function pause() {
    basicTimelineSolucion.pause();
  }

  useEffect(() => {
    basicTimelineProblem.add({
      targets: ".problem",
      translateX: [250, 0],
      translateY: [-100, 0],
      opacity: [0, 1],
      scale: [0, 1],
      duration: 1500,
    });

    basicTimelineSolucion
      .add({
        targets: ".problem-solution1 #text01 path",
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
          targets: ".problem-solution1 #circulo01",
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
          targets: ".problem-solution1 #flecha01",
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
          targets: ".problem-solution1 #text02 path",
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
          targets: ".problem-solution1 #flecha02",
          opacity: [0, 1],
          duration: (el, i) => {
            return 800;
          },
          delay: (el, i) => {
            return i * 1000;
          },
        },
        "+=1000"
      )
      .add(
        {
          targets: ".problem-solution1 #text03 path",
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
          targets: ".problem-solution1 #text04 path",
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
          targets: ".problem-solution1 #flecha03,.problem-solution1 #flecha04",
          opacity: [0, 1],
          duration: (el, i) => {
            return 800;
          },
          delay: (el, i) => {
            return i * 1500;
          },
        },
        "+=1000"
      )
      .add(
        {
          targets:
            ".problem-solution1 #text05 path,.problem-solution1 #text06 path",
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
          targets: ".problem-solution1 #text07 path",
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
          targets: ".problem-solution1 #grafico01 path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 1500;
          },
          delay: (el, i) => {
            return i * 1500;
          },
        },
        "+=1000"
      )
      .add(
        {
          targets: ".problem-solution1 #text08 path",
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
      .add(
        {
          targets: ".problem-solution1 #grafico02 path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 1500;
          },
          delay: (el, i) => {
            return i * 1500;
          },
        },
        "+=1000"
      )
      .add(
        {
          targets: ".problem-solution1 #text09 path",
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
      .add(
        {
          targets: ".problem-solution1 #grafico03 path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 1500;
          },
          delay: (el, i) => {
            return i * 1500;
          },
        },
        "+=1000"
      )
      .add(
        {
          targets: ".problem-solution1 #text10 path",
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
  }, [basicTimelineSolucion, basicTimelineProblem]);
  return (
    <ExCSSSlider>
      <div onClick={play}>
        <Problema className="title-prob" />
        <Enunciado className="problem" />
      </div>
      <div onClick={pause}>
        <Solucion className="title-sol" />
        <Resolucion className="problem-solution1" />
      </div>
    </ExCSSSlider>
  );
}

export default ExProblema001;
