import React from "react";
import Img1 from "../../../../static/img/clases/operadores/img1.png";
import Img2 from "../../../../static/img/clases/operadores/img2.png";
import ExPresentacion1 from "../../ex-presentacion-1";

const ExPresentacion = () => {
  return (
    <div>
      <ExPresentacion1
        titulo="Operadores Matemáticos"
        semana="Semi-Anual-UNI"
        presentador="Pres.  Jesús Exebio"
        img1={Img1}
        img2={Img2}
        color1="#D40303"
        color2="#E47209"
        color3="#F266BA"
      />
    </div>
  );
};

export default ExPresentacion;
