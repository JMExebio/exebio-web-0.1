import React, { useEffect } from "react";
import anime from "animejs";
import styled from "styled-components";
import ExWrapper from "../../../ex-wrapper";
import { ReactComponent as Img1 } from "../../../../static/img/clases/juegos-ingenio/01320021.svg";
import { ReactComponent as Img2 } from "../../../../static/img/clases/tiempo-cronometria/01140022.svg";

const TeoriaStyled = styled.div`
  max-height: 100vh;
  width: 100%;
  margin: auto;
  padding-top: 8%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15% 1fr;
  grid-row-gap: 1%;
  .title {
    display: inline-flex;
    width: 100%;
    margin: auto;
  }
  .title1 {
    width: 50%;
    margin: auto;
  }
  .contenido {
    width: 100%;
    height: 100%;
    margin: auto;
    align-items: center;
  }
`;
const ExTeoria1 = () => {
  var basicTimelineTeoria = anime.timeline({
    autoplay: false,
    easing: "linear",
  });
  function play() {
    basicTimelineTeoria.play();
  }
  function pause() {
    basicTimelineTeoria.pause();
  }
  useEffect(() => {
    basicTimelineTeoria
      .add({
        targets: ".teoria1a #linea",
        opacity: [0, 0],
      })
      .add({
        targets: ".teoria1a #primero",
        opacity: [{ value: [0, 1], duration: 1000, delay: 500 }],
        translateX: [{ value: [0, 550], duration: 1000, delay: 500 }],
      })
      .add(
        {
          targets: ".teoria1a #primero",
          opacity: [{ value: [1, 0], duration: 1000, delay: 500 }],
          translateX: [{ value: [550, 0], duration: 1000, delay: 500 }],
        },
        "+=3000"
      )
      .add({
        targets: ".teoria1a #segundo",
        opacity: [{ value: [0, 1], duration: 1000, delay: 500 }],
        translateX: [{ value: [0, -500], duration: 1000, delay: 500 }],
      })
      .add(
        {
          targets: ".teoria1a #solucion_2 path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 500;
          },
          delay: (el, i) => {
            return i * 500;
          },
        },
        "+=3000"
      )
      .add(
        {
          targets: ".teoria1a #segundo",
          opacity: [{ value: [1, 0], duration: 1000, delay: 500 }],
          translateX: [{ value: [-500, 0], duration: 1000, delay: 500 }],
        },
        "+=3000"
      )
      .add({
        targets: ".teoria1a #primero,.teoria1a #segundo, .teoria1a #linea",
        opacity: 1,
        duration: 500,
      });
  }, [basicTimelineTeoria]);
  return (
    <ExWrapper>
      <TeoriaStyled>
        <div className="title" onClick={play}>
          <Img1 className="title1" />
        </div>
        <div className="contenido" onClick={pause}>
          <Img2 className="teoria1a" />
        </div>
      </TeoriaStyled>
    </ExWrapper>
  );
};

export default ExTeoria1;
