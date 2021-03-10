import React, { useEffect } from "react";
import anime from "animejs";
import styled from "styled-components";
import ExWrapper from "../../../ex-wrapper";
import { ReactComponent as Img1 } from "../../../../static/img/clases/intervalo-tiempo/0121003A.svg";
import { ReactComponent as Img2 } from "../../../../static/img/clases/intervalo-tiempo/0121003B.svg";
const TeoriaStyled = styled.div`
  max-height: 100vh;
  width: 50%;
  margin: auto;
  padding-top: 6%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 15% 1fr;
`;
const ExTeoria2 = () => {
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
        targets: ".teoria2 #parte1",
        opacity: [
          { value: [0, 1], duration: 1000, delay: 500 },
          { value: [1, 0], duration: 1000, delay: 5000 },
        ],
        translateY: [
          { value: [0, 200], duration: 1000, delay: 500 },
          { value: [200, 0], duration: 1000, delay: 5000 },
        ],
        translateX: [
          { value: [-400, 200], duration: 1000, delay: 500 },
          { value: [200, 0], duration: 1000, delay: 5000 },
        ],
        scale: [
          { value: [1, 1.2], duration: 1000, delay: 500 },
          { value: [1.2, 1], duration: 1000, delay: 5000 },
        ],
      })
      .add({
        targets: ".teoria2 #parte2",
        opacity: [
          { value: [0, 1], duration: 1000, delay: 500 },
          { value: [1, 0], duration: 1000, delay: 5000 },
        ],
        translateY: [
          { value: [0, 200], duration: 1000, delay: 500 },
          { value: [200, 0], duration: 1000, delay: 5000 },
        ],
        translateX: [
          { value: [400, -300], duration: 1000, delay: 500 },
          { value: [-300, 0], duration: 1000, delay: 5000 },
        ],
        scale: [
          { value: [1, 1.2], duration: 1000, delay: 500 },
          { value: [1.2, 1], duration: 1000, delay: 5000 },
        ],
      })
      .add({
        targets: ".teoria2 #parte3",
        opacity: [
          { value: [0, 1], duration: 1000, delay: 500 },
          { value: [1, 0], duration: 1000, delay: 5000 },
        ],
        translateY: [
          { value: [0, -150], duration: 1000, delay: 500 },
          { value: [-150, 0], duration: 1000, delay: 5000 },
        ],
        translateX: [
          { value: [-400, 50], duration: 1000, delay: 500 },
          { value: [50, 0], duration: 1000, delay: 5000 },
        ],
        scale: [
          { value: [1, 1.2], duration: 1000, delay: 500 },
          { value: [1.2, 1], duration: 1000, delay: 5000 },
        ],
      })
      .add({
        targets: ".teoria2 #formula",
        opacity: [
          { value: [0, 1], duration: 1000, delay: 500 },
          { value: [1, 0], duration: 1000, delay: 5000 },
        ],
        translateY: [
          { value: [0, -150], duration: 1000, delay: 500 },
          { value: [-150, 0], duration: 1000, delay: 5000 },
        ],
        translateX: [
          { value: [200, -800], duration: 1000, delay: 500 },
          { value: [-800, 0], duration: 1000, delay: 5000 },
        ],
        scale: [
          { value: [1, 1.4], duration: 1000, delay: 500 },
          { value: [1.4, 1], duration: 1000, delay: 5000 },
        ],
      })
      .add({
        targets: ".teoria2 #completa",
        opacity: [{ value: [0, 1], duration: 1000, delay: 500 }],
        translateY: [{ value: [0, -200], duration: 1000, delay: 500 }],
      })
      .add({
        targets: ".teoria2 #solucion path",
        opacity: [0, 1],
        duration: (el, i) => {
          return 500;
        },
        delay: (el, i) => {
          return i * 600;
        },
      })
      .add({
        targets: ".teoria2 #completa",
        opacity: [{ value: [1, 0], duration: 1000, delay: 500 }],
        translateY: [{ value: [-200, 0], duration: 1000, delay: 500 }],
      })
      .add({
        targets:
          ".teoria2 #parte1,.teoria2 #parte2,.teoria2 #parte3,.teoria2 #completa,.teoria2 #formula ",
        opacity: 1,
        duration: 500,
      });
  }, [basicTimelineTeoria]);
  return (
    <ExWrapper>
      <TeoriaStyled>
        <Img1 className="title" onClick={play} />
        <Img2 className="teoria2" onClick={pause} />
      </TeoriaStyled>
    </ExWrapper>
  );
};

export default ExTeoria2;
