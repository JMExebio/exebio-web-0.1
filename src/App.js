import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import styled from "styled-components";
import ExHome from "./views/ex-home";
import ExThemes from "./views/ex-themes";
import ExSumitCourse from "./views/ex-sumit-course";
import ExSumitThemes from "./views/ex-sumit-themes";
import ExSumitTheory from "./views/ex-sumit-theory";
import ExSumitProblem from "./views/ex-sumit-problem";
import ExLogicaClases1 from "./views/ex-logica-clases-1";
import ExOperadores1 from "./views/ex-operadores-1";
import ExAnalogiasDistribuciones1 from "./views/ex-analogias-distribuciones-1";
import ExSumitURL from "./views/ex-sumit-url";
import ExPlanteoEcuaciones from "./views/ex-planteo-ecuaciones";
import ExIntervaloTiempo from "./views/ex-intervalos-tiempo";
import ExIntervaloTiempo1 from "./views/ex-intervalos-tiempo-1";
import ExPlanteoEcuaciones1 from "./views/ex-planteo-ecuaciones-1";
import ExPlanteoEcuaciones2 from "./views/ex-planteo-ecuaciones-2";
import ExEjemplos from "./views/ex-ejemplos";
import ExCerteza from "./views/ex-certeza";
import ExCerteza1 from "./views/ex-certeza-1";
import ExEstadoGaseoso1 from "./views/ex-estado-gaseoso-1";
import ExSistemasDispersos1 from "./views/ex-sistemas-dispersos-1";
import ExMiselanias1 from "./views/ex-miselanias-1";
import ExInductivo1 from "./views/ex-inductivo-1";
import ExMiselanias2 from "./views/ex-miselanias-2";
import ExAnalisisFiguras1 from "./views/ex-analisis-figuras-1";
const AppStyled = styled.div`
  overflow-x: hidden;
  margin: 0;
  padding: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  .title-h1 {
    text-align: center;
    font-size: 36px;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: #cd08d1;
    margin: 0;
    padding: 0.5em 0;
  }
  .copy {
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 32px;
    text-align: center;
    letter-spacing: 0.1em;
    color: #e8a1ee;
  }
  @media screen and (min-width: 768px) {
    .title-h1 {
      font-size: 48px;
      line-height: 56px;
    }
    .copy {
      font-size: 36px;
      line-height: 42px;
    }
  }
`;
function App() {
  return (
    <Provider store={store}>
      <Router>
        <AppStyled>
          <Route path="/" exact>
            <ExHome />
          </Route>
          <Route path="/tema/:id/:color" exact>
            <ExThemes />
          </Route>
          <Route path="/admin/course" exact>
            <ExSumitCourse />
          </Route>
          <Route path="/admin/theme" exact>
            <ExSumitThemes />
          </Route>
          <Route path="/admin/theory" exact>
            <ExSumitTheory />
          </Route>
          <Route path="/admin/problem" exact>
            <ExSumitProblem />
          </Route>
          <Route path="/admin/url" exact>
            <ExSumitURL />
          </Route>
          <Route path="/logicaclases/1" exact>
            <ExLogicaClases1 />
          </Route>
          <Route path="/operadores/1" exact>
            <ExOperadores1 />
          </Route>
          <Route path="/planteoecuaciones" exact>
            <ExPlanteoEcuaciones />
          </Route>
          <Route path="/planteoecuaciones/1" exact>
            <ExPlanteoEcuaciones1 />
          </Route>
          <Route path="/analogiasdistribuciones/1" exact>
            <ExAnalogiasDistribuciones1/>
          </Route>
          <Route path="/intervalotiempo" exact>
            <ExIntervaloTiempo />
          </Route>
          <Route path="/intervalotiempo/1" exact>
            <ExIntervaloTiempo1 />
          </Route>
          <Route path="/planteoecuaciones/2" exact>
            <ExPlanteoEcuaciones2 />
          </Route>
          <Route path="/ejemplo" exact>
            <ExEjemplos />
          </Route>
          <Route path="/certeza" exact>
            <ExCerteza/>
          </Route>
          <Route path="/certeza/1" exact>
            <ExCerteza1/>
          </Route>
          <Route path="/estadogaseoso/1" exact>
            <ExEstadoGaseoso1 />
          </Route>
          <Route path="/sistemasdispersos/1" exact>
            <ExSistemasDispersos1 />
          </Route>
          <Route path="/miselanias/1" exact>
            <ExMiselanias1 />
          </Route>
          <Route path="/miselanias/2" exact>
            <ExMiselanias2 />
          </Route>
          <Route path="/inductivo/1" exact>
            <ExInductivo1 />
          </Route>
          <Route path="/analisisfiguras/1" exact>
            <ExAnalisisFiguras1 />
          </Route>
        </AppStyled>
      </Router>
    </Provider>
  );
}

export default App;

