import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExHeader from "../../components/navbar/ex-header";
import ExScrollHandle from "../../components/ex-scroll-handle";
import ExFooter from "../../components/footer/ex-footer";
import getURL from "../../redux/actions/url-action";
import getThemes from "../../redux/actions/themes-action";
import ExLoader from "../../components/ex-loader";
import ExTableURL from "../../components/form/ex-url-table";


function ExSumitURL() {
  const dispatch = useDispatch();
  const url = useSelector((state) => state.URLPres);
  const themes = useSelector((state) => state.Themes);

  useEffect(() => {
    dispatch(getURL());
    dispatch(getThemes());
  }, [dispatch]);
  return (
    <>
      {themes.loading && url.loading && <ExLoader />}
      {url.url.length >= 0 && (
        <>
          <ExScrollHandle />
          <ExHeader />
          <ExTableURL />
          <ExFooter />
        </>
      )}
    </>
  );
}

export default ExSumitURL