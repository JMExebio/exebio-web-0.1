import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExHeader from "../../components/navbar/ex-header";
import ExScrollHandle from "../../components/ex-scroll-handle";
import ExFooter from "../../components/footer/ex-footer";
import getCourses from "../../redux/actions/course-action";
import ExTableTheme from "../../components/form/ex-table-theme";

function ExSumitThemes() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.Courses);
 
  useEffect(() => {
    dispatch(getCourses());

  }, [dispatch]);
  return (
        <>
          <ExScrollHandle />
          <ExHeader courses={courses}/>
          <ExTableTheme />
          <ExFooter courses={courses} />
        </>
  );
}

export default ExSumitThemes;
