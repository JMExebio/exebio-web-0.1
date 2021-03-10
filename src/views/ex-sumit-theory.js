import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExHeader from "../components/navbar/ex-header";
import ExScrollHandle from "../components/ex-scroll-handle";
import ExFooter from "../components/footer/ex-footer";
import getTheory from "../redux/actions/theory-action";
import getThemes from "../redux/actions/themes-action";
import ExLoader from "../components/ex-loader";
import ExTableTheory from "../components/form/ex-table-theory";


function ExSumitTheory() {
  const dispatch = useDispatch();
  const theory = useSelector((state) => state.Theory);
  const themes = useSelector((state) => state.Themes);

  useEffect(() => {
    dispatch(getTheory());
    dispatch(getThemes());
  }, [dispatch]);
  return (
    <>
      {themes.loading && theory.loading && <ExLoader />}
      {theory.Theory.length >= 1 && (
        <>
          <ExScrollHandle />
          <ExHeader />
          <ExTableTheory />
          <ExFooter />
        </>
      )}
    </>
  );
}

export default ExSumitTheory;
