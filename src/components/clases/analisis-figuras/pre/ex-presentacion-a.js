import React from "react";
import Img1 from "../../../../static/img/clases/analisis-figuras/img1.png";
import Img2 from "../../../../static/img/clases/analisis-figuras/img1.png";
import ExPresentacion1 from "../../ex-presentacion-1";

const ExPresentacionA = () => {
  return (
    <div>
      <ExPresentacion1
        titulo="Análisis de figuras"
        semana="Tema 1 - Semi Anual UNI"
        presentador="Pres.  Jesús Exebio"
        img1={Img1}
        img2={Img2}
        color1="#8808A8"
        color2="#CD08D1"
        color3="#D098D4"
      />
    </div>
  );
};

export default ExPresentacionA;
