import React, { useEffect } from "react";
import anime from "animejs";
import styled from "styled-components";
import ExWrapper from "../../../ex-wrapper";
import { ReactComponent as Img1 } from "../../../../static/img/clases/intervalo-tiempo/0121005A1.svg";
import { ReactComponent as Img2 } from "../../../../static/img/clases/intervalo-tiempo/0121005A2.svg";
import { ReactComponent as Img3 } from "../../../../static/img/clases/intervalo-tiempo/0121005B1.svg";
import { ReactComponent as Img4 } from "../../../../static/img/clases/intervalo-tiempo/0121005B2.svg";
const TeoriaStyled = styled.div`
  max-height: 100vh;
  width: 50%;
  margin: auto;
  padding-top: 6%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15% 1fr 15% 1fr;
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
        targets: ".teoria4 #parte1",
        opacity: [{ value: [0, 1], duration: 1000, delay: 500 }],
      })
      .add({
        targets: ".teoria4 #formula",
        opacity: [{ value: [0, 1], duration: 1000, delay: 1000 }],
      })
      .add({
        targets: ".teoria4 #completa path",
        opacity: [0, 1],
        duration: (el, i) => {
          return 500;
        },
        delay: (el, i) => {
          return i * 600;
        },
      })
      .add({
        targets: ".title1",
        opacity: [{ value: [0, 1], duration: 1000, delay: 1000 }],
      })
      .add({
        targets: ".teoria5 #formula,.teoria5 #personas,.teoria5 #Line",
        opacity: [{ value: [0, 1], duration: 1500, delay: 1000 }],
      })
      .add({
        targets: ".teoria5 #sol path",
        opacity: [0, 1],
        duration: (el, i) => {
          return 500;
        },
        delay: (el, i) => {
          return i * 600;
        },
      },);
  }, [basicTimelineTeoria]);
  return (
    <ExWrapper>
      <TeoriaStyled>
        <Img1 className="title" onClick={play} />
        <Img2 className="teoria4" onClick={pause} />
        <Img3 className="title1" onClick={play} />
        <Img4 className="teoria5" onClick={pause} />
      </TeoriaStyled>
    </ExWrapper>
  );
};

export default ExTeoria4;
