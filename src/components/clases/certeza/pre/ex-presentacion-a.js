import React from "react";
import Img1 from "../../../../static/img/clases/certeza/img1.png";
import ExPresentacion1 from "../../ex-presentacion-1";

const ExPresentacionA = () => {
  return (
    <div>
      <ExPresentacion1
        titulo="Certezas"
        semana="Semi Anual UNI"
        presentador="Pres.  Jesús Exebio"
        img1={Img1}
        img2={Img1}
        color1="#210AB2"
        color2="#6008D1"
        color3="#85D3FE"
      />
    </div>
  );
};

export default ExPresentacionA;