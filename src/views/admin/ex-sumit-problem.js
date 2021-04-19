import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExHeader from "../../components/navbar/ex-header";
import ExScrollHandle from "../../components/ex-scroll-handle";
import ExFooter from "../../components/footer/ex-footer";
import getCourses from "../../redux/actions/course-action";
import ExTableProblem from "../../components/form/ex-table-problem";


function ExSumitProblem() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.Courses);
  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);
  return (
        <>
          <ExScrollHandle />
          <ExHeader courses={courses} />
          <ExTableProblem />
          <ExFooter courses={courses}/>
        </>
  );
}

export default ExSumitProblem;
