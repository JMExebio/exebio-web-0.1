import React from "react";
import Img1 from "../../../../static/img/clases/juegos-ingenio/img1.png";
import Img2 from "../../../../static/img/clases/juegos-ingenio/img2.png";
import ExPresentacion1 from "../../ex-presentacion-1";

const ExPresentacionA = () => {
  return (
    <div>
      <ExPresentacion1
        titulo="Juegos de Ingenio"
        semana="Tema 1 - Colegio-pre"
        presentador="Pres.  Jesús Exebio"
        img1={Img1}
        img2={Img2}
        color1="#3A8EBE"
        color2="#09E472"
        color3="#AC3ABE"
      />
    </div>
  );
};

export default ExPresentacionA;
