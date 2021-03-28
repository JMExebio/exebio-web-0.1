import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./redux/store";
import styled from "styled-components";
import ExLoader from "./components/ex-loader";
const ExHome = lazy(() => import("./views/ex-home"));
const ExThemes = lazy(() => import("./views/ex-themes"));
const ExSumitCourse = lazy(()=> import("./views/admin/ex-sumit-course"));
const ExSumitThemes = lazy(()=>import("./views/admin/ex-sumit-themes"));
const ExSumitTheory = lazy(()=>import("./views/admin/ex-sumit-theory"));
const ExSumitProblem = lazy(()=>import("./views/admin/ex-sumit-problem"));
const ExSumitURL = lazy(()=>import("./views/admin/ex-sumit-url"));
const ExLogicaClases1 = lazy(()=>import("./views/rm/ex-logica-clases-1"));
const ExOperadores1 = lazy(()=>import("./views/rm/ex-operadores-1"));
const ExAnalogiasDistribuciones1 = lazy(()=>import("./views/rm/ex-analogias-distribuciones-1"));
const ExPlanteoEcuaciones = lazy(()=>import("./views/rm/ex-planteo-ecuaciones"));
const ExIntervaloTiempo = lazy(()=>import("./views/rm/ex-intervalos-tiempo"));
const ExIntervaloTiempo1 =lazy(()=>import("./views/rm/ex-intervalos-tiempo-1"));
const ExPlanteoEcuaciones1 =lazy(()=>import("./views/rm/ex-planteo-ecuaciones-1"));
const ExPlanteoEcuaciones2 = lazy(()=>import("./views/rm/ex-planteo-ecuaciones-2"));
const ExEjemplos=lazy(()=>import("./views/ex-ejemplos"));
const ExCerteza=lazy(()=>import("./views/rm/ex-certeza"));
const ExCerteza1=lazy(()=>import("./views/rm/ex-certeza-1"));
const ExEstadoGaseoso1=lazy(()=>import("./views/qu/ex-estado-gaseoso-1"));
const ExSistemasDispersos1 = lazy(()=>import("./views/qu/ex-sistemas-dispersos-1"));
const ExMiselanias1 = lazy(()=>import("./views/rm/ex-miselanias-1"));
const ExInductivo1 = lazy(()=>import("./views/rm/ex-inductivo-1"));
const ExMiselanias2 =lazy(()=>import("./views/rm/ex-miselanias-2"));
const ExAnalisisFiguras1 =lazy(()=>import("./views/rm/ex-analisis-figuras-1"));
const ExOrdenInformacion =lazy(()=>import("./views/rm/ex-orden-informacion"));
const ExOrdenInformacion1 =lazy(()=>import("./views/rm/ex-orden-informacion-1"));
const ExEstadistica1 =lazy(()=>import("./views/rm/ex-estadistica-1"));
const ExVerdadesMentiras1 =lazy(()=>import("./views/rm/ex-verdades-mentiras-1"));
const ExJuegosIngenio =lazy(()=>import("./views/rm/ex-juegos-ingenio"));
const ExJuegosIngenio1 =lazy(()=>import("./views/rm/ex-juegos-ingenio-1"));
const ExOrdenInformacion2 =lazy(()=>import("./views/rm/ex-orden-informacion-2"));
const ExAnalisisFiguras2 =lazy(()=>import("./views/rm/ex-analisis-figuras-2"));
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
        <Suspense fallback={<ExLoader/>}>
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
              <ExAnalogiasDistribuciones1 />
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
              <ExCerteza />
            </Route>
            <Route path="/certeza/1" exact>
              <ExCerteza1 />
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
            <Route path="/analisisfiguras/2" exact>
              <ExAnalisisFiguras2 />
            </Route>
            <Route path="/ordeninformacion" exact>
              <ExOrdenInformacion />
            </Route>
            <Route path="/ordeninformacion/1" exact>
              <ExOrdenInformacion1 />
            </Route>
            <Route path="/estadistica/1" exact>
              <ExEstadistica1 />
            </Route>
            <Route path="/verdadesmentiras/1" exact>
              <ExVerdadesMentiras1 />
            </Route>
            <Route path="/juegosingenio" exact>
              <ExJuegosIngenio />
            </Route>
            <Route path="/juegosingenio/1" exact>
              <ExJuegosIngenio1 />
            </Route>
            <Route path="/ordeninformacion/2" exact>
              <ExOrdenInformacion2/>
            </Route>
          </AppStyled>
          </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
