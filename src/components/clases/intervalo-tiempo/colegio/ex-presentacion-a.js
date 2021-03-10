import React from "react";
import Img1 from "../../../../static/img/clases/intervalo-tiempo/img1.png";
import Img2 from "../../../../static/img/clases/intervalo-tiempo/img2.png";
import ExPresentacion1 from "../../ex-presentacion-1";

const ExPresentacionA = () => {
  return (
    <div>
      <ExPresentacion1
        titulo="Intervalo de tiempo"
        semana="Tema 6  pág (54-57)"
        presentador="Pres.  Jesús Exebio"
        img1={Img1}
        img2={Img2}
        color1="#E9275C"
        color2="#F77643"
        color3="#F266BA"
      />
    </div>
  );
};

export default ExPresentacionA;
