import React, { useEffect } from "react";
import anime from "animejs";
import styled from "styled-components";
import Img1 from "../../../../static/img/clases/analogias-distribuciones/img1.png";
import Img2 from "../../../../static/img/clases/analogias-distribuciones/img2.png";

const Presentacionstyled = styled.div`
  padding-top: 15%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 20% 20% 40%;
  grid-template-areas: "titulo titulo" "profe profe" "img1 img2";
  margin: auto;
  width: 100%;
  min-height: 100%;
  .titulo {
    grid-area: titulo;
    align-items: center;
    margin: auto;
    border-radius: 50px;
    border: 10px solid;
    width: 100%px;
    height: 100%px;
    border: 5px solid #12e1ee;

    h1 {
      font-size: 20px;
      line-height: 27px;
      color: #12e1ee;
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

      color: #2af808;
    }
  }
  .tema-semana {
    align-items: center;
    text-align: center;
    padding: 12px 0;
    h1 {
      font-style: normal;
      font-weight: bold;
      font-size: 14px;
      line-height: 25px;

      color: #f3f809;
    }
  }
  @media screen and (min-width: 560px) {
    padding-top: 5%;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 20% 1fr;
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
      padding-top: 10%;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 20% 20% 1fr;
      grid-template-areas:
        "titul titul "
        "profe  profe" "image1 image2";
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
      grid-template-rows: 20% 1fr;
      grid-template-areas:
        "titul titul titul"
        "image1  profe  image2";
      padding-top: 5%;
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

function ExPresentacionA() {
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
    <Presentacionstyled>
      <div className="titulo">
        <h1>Analogías y Distribuciones</h1>
      </div>
      <img src={Img1} alt="" className="imagen1" />
      <div className="profe">
        <div className="tema-semana">
          <h1>Tema 5 - p&aacute;g (51-52)</h1>
        </div>
        <div className="presentador">
          <h2>Exp. Jesús Exebio</h2>
        </div>
      </div>
      <img src={Img2} alt="" className="imagen2" />
    </Presentacionstyled>
  );
}

export default ExPresentacionA;
