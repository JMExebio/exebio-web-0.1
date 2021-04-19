import React, {useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExHeader from "../../components/navbar/ex-header";
import ExScrollHandle from "../../components/ex-scroll-handle";
import ExFooter from "../../components/footer/ex-footer";
import ExTableURL from "../../components/form/ex-url-table";
import getCourses from "../../redux/actions/course-action";

function ExSumitURL() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.Courses);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);
  return (  
        <>
          <ExScrollHandle />
          <ExHeader courses={courses}/>
          <ExTableURL />
          <ExFooter courses={courses}/>
        </>
  );
}

export default ExSumitURL