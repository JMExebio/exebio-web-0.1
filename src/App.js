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
          </AppStyled>
          </Suspense>
      </Router>
    </Provider>
  );
}

export default App;
