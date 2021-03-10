import React, { useEffect } from "react";
import anime from "animejs";
import styled from "styled-components";
import { ReactComponent as Img1 } from "../../../../static/img/clases/certeza/01220021.svg";
import { ReactComponent as Img2 } from "../../../../static/img/clases/certeza/01220022.svg";
import ExWrapper from "../../../ex-wrapper";

const TeoriaStyled = styled.div`
  max-height: 100vh;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20% 1fr;
  grid-row-gap: 1%;
  margin-top: 4em;

  .title {
    display: inline-flex;
    width: 100%;
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
  const handlePlay=()=>{
    basicTimelineTeoria.play();
  }
  const handlePause=()=>{
    basicTimelineTeoria.pause();
  }
  useEffect(() => {
    basicTimelineTeoria
      .add({
        targets: ".teoria1 #primero",
        opacity: [{ value: [0, 1], duration: 1000, delay: 500 }],
        translateX: [{ value: [0, 500], duration: 1000, delay: 500 }],
      })
      .add(
        {
          targets: ".teoria1 #palabras-1 g",
          opacity: [0, 1],
          duration: (el, i) => {
            return 1000;
          },
          delay: (el, i) => {
            return i * 2000;
          },
        },
        "+=500"
      )
      .add(
        {
          targets: ".teoria1 #primero #ecu-1",
          opacity: [{ value: [0, 1], duration: 1000, delay: 500 }],
          translateX: [{ value: [-300, 0], duration: 1000, delay: 500 }],
        },
        "+=1000"
      )
      .add(
        {
          targets: ".teoria1 #primero",
          opacity: [{ value: [1, 0], duration: 1000, delay: 500 }],
          translateX: [{ value: [500, 0], duration: 1000, delay: 500 }],
        },
        "+=1000"
      )
      .add(
        {
          targets: ".teoria1 #segundo",
          opacity: [{ value: [0, 1], duration: 1000, delay: 500 }],
          translateX: [{ value: [0, -500], duration: 1000, delay: 500 }],
        },
        "+=1000"
      )
      .add(
        {
          targets: ".teoria1 #palabras-2 g",
          opacity: [0, 1],
          duration: (el, i) => {
            return 1500;
          },
          delay: (el, i) => {
            return i * 2000;
          },
        },
        "+=1000"
      )
      .add(
        {
          targets: ".teoria1 #ecu-2 path",
          opacity: [0, 1],
          duration: (el, i) => {
            return 500;
          },
          delay: (el, i) => {
            return i * 600;
          },
        },
        "+=1000"
      )
      .add(
        {
          targets: ".teoria1 #segundo",
          opacity: [{ value: [1, 0], duration: 1000, delay: 500 }],
          translateX: [{ value: [-500, 0], duration: 1000, delay: 500 }],
        },
        "+=1000"
      )
      .add(
        {
          targets: ".teoria1 #primero,.teoria1 #segundo",
          opacity: 1,
          duration: 500,
        },
        "+=1000"
      );

    return () => {
      basicTimelineTeoria.remove();
    };
  }, [basicTimelineTeoria]);

  return (
    <ExWrapper>
      <TeoriaStyled>
        <div className="title" onClick={handlePlay}>
          <Img1 className="title1" />
        </div>
        <div className="contenido" onClick={handlePause}>
          <Img2 className="teoria1" />
        </div>
      </TeoriaStyled>
    </ExWrapper>
  );
};

export default ExTeoria1;
