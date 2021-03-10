import React, { useEffect } from "react";
import anime from "animejs";
import styled from "styled-components";

const Presentacionstyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 20% 40% 40%;
  grid-template-areas: "titulo titulo" "profe profe" "img1 img2";
  width: 100%;
  height: 100%;
  grid-row-gap: 4%;
  margin-top: 4em;
  .titulo {
    grid-area: titulo;
    align-items: center;
    margin: auto;
    border-radius: 50px;
    border: 10px solid;
    width: 80%;
    height: 80%;
    border: 5px solid ${({color1}) => color1};

    h1 {
      text-align: center;
      font-size: 20px;
      line-height: 27px;
      color: ${({color1}) => color1};
      margin: 20px 0px;
    }
  }
  .profe {
    grid-area: profe;
  }
  .imagen1 {
    grid-area: img1;
    width: 80%;
    margin: auto;
  }
  .imagen2 {
    grid-area: img2;
    width: 80%;
    margin: auto;
  }
  .presentador {
    align-items: center;
    text-align: center;
    h2 {
      font-family: Mali;
      font-style: normal;
      font-weight: bold;
      font-size: 27px;
      line-height: 30px;

      color: ${({color2}) => color2};
    }
  }
  .tema-semana {
    align-items: center;
    text-align: center;
    padding: 5px 0;
    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 25px;

      color: ${({color3}) => color3};
    }
  }
  @media screen and (min-width: 560px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 30% 1fr;
    grid-template-areas:
      "titul titul titul"
      "image1  profe  image2";
    .titulo {
      grid-area: titul;
    }

    .imagen1 {
      grid-area: image1;
      margin: auto;
      width: 80%;
    }
    .imagen2 {
      grid-area: image2;
      margin: auto;
      width: 80%;
    }
    .presentador {
      h2 {
        font-size: 24px;
        line-height: 20px;
      }
    }
    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 30% 20% 1fr;
      grid-template-areas:
        "titul titul "
        "profe  profe"
        "image1 image2";
      .titulo {
        grid-area: titul;
        h1 {
          font-size: 36px;
          line-height: 48px;
        }
      }

      .imagen1 {
        grid-area: image1;
        width: 70%;
        margin: auto;
      }
      .imagen2 {
        grid-area: image2;
        width: 70%;
        margin: auto;
      }
      .tema-semana {
        h1 {
          font-size: 27px;
          line-height: 32px;
        }
      }
      .presentador {
        h2 {
          font-size: 42px;
          line-height: 54px;
        }
      }
    }
    @media screen and (min-width: 1024px) {
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 30% 1fr;
      grid-template-areas:
        "titul titul titul"
        "image1  profe  image2";
      .titulo {
        grid-area: titul;
        h1 {
          font-size: 42px;
          line-height: 48px;
        }
      }
      .imagen1 {
        grid-area: image1;
        width: 65%;
      }
      .imagen2 {
        grid-area: image2;
        width: 65%;
      }
      .tema-semana {
        h1 {
          font-size: 32px;
          line-height: 32px;
        }
      }
      .presentador {
        h2 {
          font-size: 44px;
          line-height: 60px;
        }
      }
    }
  }
`;

function ExPresentacion1({
  titulo,
  semana,
  presentador,
  img1,
  img2,
  color1,
  color2,
  color3,
}) {
  var basicTimeline = anime.timeline({
    autoplay: true,
    easing: "easeOutCubic",
  });

  useEffect(() => {
    basicTimeline
      .add({
        targets: ".titulo",
        opacity: [0, 1],
        translateY: [-100, 0],
        duration: 700,
        delay: 1000,
      })
      .add({
        targets: ".profe .tema-semana",
        opacity: [0, 1],
        translateY: [100, 0],
        duration: 700,
        delay: 1000,
      })
      .add({
        targets: ".profe .presentador",
        opacity: [0, 1],
        rotateY: 360,
        duration: 700,
        delay: 1000,
      })
      .add({
        targets: ".imagen1",
        opacity: [0, 1],
        translateX: [-100, 0],
        duration: 700,
        delay: 1000,
      })
      .add({
        targets: ".imagen2",
        opacity: [0, 1],
        translateX: [100, 0],
        duration: 700,
        delay: 1000,
      });
  }, [basicTimeline]);
  return (
    <Presentacionstyled color1={color1} color2={color2} color3={color3}>
      <div className="titulo">
        <h1>{titulo}</h1>
      </div>
      <img src={img1} alt="" className="imagen1" />
      <div className="profe">
        <div className="tema-semana">
          <h1>{semana}</h1>
        </div>
        <div className="presentador">
          <h2>{presentador}</h2>
        </div>
      </div>
      <img src={img2} alt="" className="imagen2" />
    </Presentacionstyled>
  );
}

export default ExPresentacion1;
