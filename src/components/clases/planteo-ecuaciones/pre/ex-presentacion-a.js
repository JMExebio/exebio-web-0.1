import React from "react";
import Img1 from "../../../../static/img/clases/planteo-ecuaciones/img1.png";
import Img2 from "../../../../static/img/clases/planteo-ecuaciones/img2.png";
import ExPresentacion1 from "../../ex-presentacion-1";

const ExPresentacionA = () => {
  return (
    <div>
      <ExPresentacion1
        titulo="Planteo de Ecuaciones"
        semana="Tema 7  pág(78-80)"
        presentador="Pres.  Jesús Exebio"
        img1={Img1}
        img2={Img2}
        color1="#CD08D1"
        color2="#19B30C"
        color3="#F266BA"
      />
    </div>
  );
};

export default ExPresentacionA;
