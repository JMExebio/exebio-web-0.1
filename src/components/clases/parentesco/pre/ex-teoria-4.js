import React, { useEffect } from "react";
import anime from "animejs";
import styled from "styled-components";
import ExWrapper from "../../../ex-wrapper";
import { ReactComponent as Img1 } from "../../../../static/img/clases/juegos-ingenio/01320021.svg";
import { ReactComponent as Img2 } from "../../../../static/img/clases/parentesco/01290022.svg";

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
const ExTeoria4 = () => {
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
        targets: ".teoria4 #primero",
        opacity: [{ value: [0, 1], duration: 1000, delay: 500 }],
        translateX: [{ value: [0, 100], duration: 1000, delay: 500 }],
      })
      .add(
        {
          targets: ".teoria4 #primero",
          opacity: [{ value: [1, 0], duration: 1000, delay: 500 }],
          translateX: [{ value: [100, 0], duration: 1000, delay: 500 }],
        },
        "+=3000"
      )
      .add({
        targets: ".teoria4 #segundo",
        opacity: [{ value: [0, 1], duration: 1000, delay: 500 }],
        translateX: [{ value: [0, -500], duration: 1000, delay: 500 }],
      })
      .add(
        {
          targets: ".teoria4 #segundo",
          opacity: [{ value: [1, 0], duration: 1000, delay: 500 }],
          translateX: [{ value: [-500, 0], duration: 1000, delay: 500 }],
        },
        "+=3000"
      )
      .add({
        targets: ".teoria4 #primero,.teoria4 #segundo",
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
          <Img2 className="teoria4" />
        </div>
      </TeoriaStyled>
    </ExWrapper>
  );
};

export default ExTeoria4;