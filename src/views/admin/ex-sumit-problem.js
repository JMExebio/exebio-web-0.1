import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExHeader from "../../components/navbar/ex-header";
import ExScrollHandle from "../../components/ex-scroll-handle";
import ExFooter from "../../components/footer/ex-footer";
import getProblem from "../../redux/actions/problem-action";
import getThemes from "../../redux/actions/themes-action";
import ExLoader from "../../components/ex-loader";
import ExTableProblem from "../../components/form/ex-table-problem";


function ExSumitProblem() {
  const dispatch = useDispatch();
  const problems = useSelector((state) => state.Problems);
  const themes = useSelector((state) => state.Themes);
  useEffect(() => {
    dispatch(getProblem());
    dispatch(getThemes());
  }, [dispatch]);
  return (
    <>
      {themes.loading && problems.loading && <ExLoader />}
      {problems.Problem.length >= 1 && (
        <>
          <ExScrollHandle />
          <ExHeader />
          <ExTableProblem />
          <ExFooter />
        </>
      )}
    </>
  );
}

export default ExSumitProblem;
