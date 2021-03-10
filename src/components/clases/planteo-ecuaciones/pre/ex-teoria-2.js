import React, { useEffect } from "react";
import anime from "animejs";
import styled from "styled-components";
import ExWrapper from "../../../ex-wrapper";
import { ReactComponent as Img1 } from "../../../../static/img/clases/planteo-ecuaciones/0120002A.svg";
import { ReactComponent as Img2 } from "../../../../static/img/clases/planteo-ecuaciones/0120003B.svg";

const TeoriaStyled = styled.div`
  max-height: 100vh;
  width: 100%;
  margin: auto;
  padding-top: 8%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 20% 1fr;
  grid-row-gap:5%;
  .title {
    display: inline-flex;
    width: 100%;
    margin: auto;
  }
  .title2 {
    width: 50%;
    margin: auto;
  }
  .contenido {
    width: 100%;
    height:100%;
    margin: auto;
    align-items: center;
  }
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
      targets: ".teoria2 #ecuacion1",
      opacity: [{ value: [0, 1], duration: 1000, delay: 500 }],
      translateY: [{ value: [0, 150], duration: 1000, delay: 500 }],
      translateX: [{ value: [0, 400], duration: 1000, delay: 500 }],
      scale: [{ value: [1, 1.2], duration: 1000, delay: 500 }],
    })
    .add({
      targets: ".teoria2 #ecu1 path",
      opacity: [0, 1],
      duration: (el, i) => {
        return 500;
      },
      delay: (el, i) => {
        return i * 600;
      },
    })
    .add({
      targets: ".teoria2 #ecuacion1",
      opacity: [{ value: [1, 0], duration: 1000, delay: 500 }],
      translateY: [{ value: [150, 0], duration: 1000, delay: 500 }],
      translateX: [{ value: [400, 0], duration: 1000, delay: 500 }],
      scale: [{ value: [1.2, 1], duration: 1000, delay: 500 }],
    })
    .add({
      targets: ".teoria2 #ecuacion2",
      opacity: [{ value: [0, 1], duration: 1000, delay: 500 }],
      translateY: [{ value: [0, 150], duration: 1000, delay: 500 }],
      translateX: [{ value: [0, -900], duration: 1000, delay: 500 }],
      scale: [{ value: [1, 1.2], duration: 1000, delay: 500 }],
    })
    .add({
      targets: ".teoria2 #ecu2 path",
      opacity: [0, 1],
      duration: (el, i) => {
        return 500;
      },
      delay: (el, i) => {
        return i * 600;
      },
    })
    .add({
      targets: ".teoria2 #ecuacion2",
      opacity: [{ value: [1, 0], duration: 1000, delay: 500 }],
      translateY: [{ value: [150, 0], duration: 1000, delay: 500 }],
      translateX: [{ value: [-900, 0], duration: 1000, delay: 500 }],
      scale: [{ value: [1.2, 1], duration: 1000, delay: 500 }],
    })
    .add({
      targets: ".teoria2 #ecuacion3",
      opacity: [{ value: [0, 1], duration: 1000, delay: 500 }],
      translateY: [{ value: [0, -250], duration: 1000, delay: 500 }],
      translateX: [{ value: [0, 400], duration: 1000, delay: 500 }],
      scale: [{ value: [1, 1.2], duration: 1000, delay: 500 }],
    })
    .add({
      targets: ".teoria2 #ecu3 path",
      opacity: [0, 1],
      duration: (el, i) => {
        return 500;
      },
      delay: (el, i) => {
        return i * 600;
      },
    })
    .add({
      targets: ".teoria2 #ecuacion3",
      opacity: [{ value: [1, 0], duration: 1000, delay: 500 }],
      translateY: [{ value: [-250, 0], duration: 1000, delay: 500 }],
      translateX: [{ value: [400, 0], duration: 1000, delay: 500 }],
      scale: [{ value: [1.2, 1], duration: 1000, delay: 500 }],
    })
    .add({
      targets: ".teoria2 #ecuacion4",
      opacity: [{ value: [0, 1], duration: 1000, delay: 500 }],
      translateX: [{ value: [0, -900], duration: 1000, delay: 500 }],
      scale: [{ value: [1, 1.2], duration: 1000, delay: 500 }],
    })
    .add({
      targets: ".teoria2 #ecu4 path",
      opacity: [0, 1],
      duration: (el, i) => {
        return 500;
      },
      delay: (el, i) => {
        return i * 600;
      },
    })
    .add({
      targets: ".teoria2 #ecuacion4",
      opacity: [{ value: [1, 0], duration: 1000, delay: 500 }],
      translateX: [{ value: [-900, 0], duration: 1000, delay: 500 }],
      scale: [{ value: [1.2, 1], duration: 1000, delay: 500 }],
    })
    .add({
      targets: ".teoria2 #ecuacion5",
      opacity: [{ value: [0, 1], duration: 1000, delay: 500 }],
      translateX: [{ value: [0, 400], duration: 1000, delay: 500 }],
      scale: [{ value: [1, 1.2], duration: 1000, delay: 500 }],
    })
    .add({
      targets: ".teoria2 #ecu5 path",
      opacity: [0, 1],
      duration: (el, i) => {
        return 500;
      },
      delay: (el, i) => {
        return i * 600;
      },
    })
    .add({
      targets: ".teoria2 #ecuacion5",
      opacity: [{ value: [1, 0], duration: 1000, delay: 500 }],
      translateX: [{ value: [400, 0], duration: 1000, delay: 500 }],
      scale: [{ value: [1.2, 1], duration: 1000, delay: 500 }],
    }).add({
      targets: ".teoria2 #ecuacion6",
      opacity: [{ value: [0, 1], duration: 1000, delay: 500 }],
      translateY: [{ value: [0, -150], duration: 1000, delay: 500 }],
      translateX: [{ value: [0, -900], duration: 1000, delay: 500 }],
      scale: [{ value: [1, 1.2], duration: 1000, delay: 500 }],
    })
    .add({
      targets: ".teoria2 #ecu6 path",
      opacity: [0, 1],
      duration: (el, i) => {
        return 500;
      },
      delay: (el, i) => {
        return i * 600;
      },
    })
    .add({
      targets: ".teoria2 #ecuacion6",
      opacity: [{ value: [1, 0], duration: 1000, delay: 500 }],
      translateY: [{ value: [-150, 0], duration: 1000, delay: 500 }],
      translateX: [{ value: [-900, 0], duration: 1000, delay: 500 }],
      scale: [{ value: [1.2, 1], duration: 1000, delay: 500 }],
    }).add({
      targets: ".teoria2 #ecuacion7",
      opacity: [{ value: [0, 1], duration: 1000, delay: 500 }],
      translateY: [{ value: [0, -300], duration: 1000, delay: 500 }],
      translateX: [{ value: [0, -900], duration: 1000, delay: 500 }],
      scale: [{ value: [1, 1.2], duration: 1000, delay: 500 }],
    })
    .add({
      targets: ".teoria2 #ecu7 path",
      opacity: [0, 1],
      duration: (el, i) => {
        return 500;
      },
      delay: (el, i) => {
        return i * 600;
      },
    })
    .add({
      targets: ".teoria2 #ecuacion7",
      opacity: [{ value: [1, 0], duration: 1000, delay: 500 }],
      translateY: [{ value: [-300, 0], duration: 1000, delay: 500 }],
      translateX: [{ value: [-900, 0], duration: 1000, delay: 500 }],
      scale: [{ value: [1.2, 1], duration: 1000, delay: 500 }],
    })
    .add({
      targets:
        ".teoria2 #ecuacion1,.teoria2 #ecuacion2,.teoria2 #ecuacion3,.teoria2 #ecuacion4,.teoria2 #ecuacion5,.teoria2 #ecuacion6,.teoria2 #ecuacion7",
      opacity: 1,
      duration: 500,
    });
  }, [basicTimelineTeoria]);
  return (
    <ExWrapper>
      <TeoriaStyled>
        <div className="title" onClick={play}>
          <Img1 className="title2" />
        </div>
        <div className="contenido" onClick={pause}>
          <Img2 className="teoria2" />
        </div>
      </TeoriaStyled>
    </ExWrapper>
  );
};

export default ExTeoria2;