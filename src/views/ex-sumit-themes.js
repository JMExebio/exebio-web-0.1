import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExHeader from "../components/navbar/ex-header";
import ExScrollHandle from "../components/ex-scroll-handle";
import ExFooter from "../components/footer/ex-footer";
import getCourses from "../redux/actions/course-action";
import getThemes from "../redux/actions/themes-action";
import ExLoader from "../components/ex-loader";
import ExTableTheme from "../components/form/ex-table-theme";
function ExSumitThemes() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.Courses);
  const themes = useSelector((state) => state.Themes);
 
  useEffect(() => {
    dispatch(getCourses());
   dispatch(getThemes());
  }, [dispatch]);
  return (
    <>
      {courses.loading && themes.loading && <ExLoader />}
      {themes.Themes.length >= 1 && (
        <>
          <ExScrollHandle />
          <ExHeader />
          <ExTableTheme />
          <ExFooter />
        </>
      )}
    </>
  );
}

export default ExSumitThemes;
