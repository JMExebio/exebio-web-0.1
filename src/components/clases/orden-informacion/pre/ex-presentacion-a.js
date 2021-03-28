import React from "react";
import Img1 from "../../../../static/img/clases/orden-informacion/img1.png";
import Img2 from "../../../../static/img/clases/orden-informacion/img2.png";
import ExPresentacion1 from "../../ex-presentacion-1";

const ExPresentacionA = () => {
  return (
    <div>
      <ExPresentacion1
        titulo="Orden de Informacion"
        semana="Tema 1 - Semi Anual UNI"
        presentador="Pres.  Jesús Exebio"
        img1={Img1}
        img2={Img2}
        color1="#E47209"
        color2="#09E472"
        color3="#7209E4"
      />
    </div>
  );
};

export default ExPresentacionA;
