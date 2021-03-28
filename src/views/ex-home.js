import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExHeader from "../components/navbar/ex-header";
import ExHero from "../components/baner/ex-hero";
import ExCourse from "../components/courses/ex-course";
import ExScrollHandle from "../components/ex-scroll-handle";
import ExFooter from "../components/footer/ex-footer";
import getCourses from "../redux/actions/course-action";
import getThemes from "../redux/actions/themes-action";
import ExWhatsapp from "../components/whatsapp/ex-whatsapp";

function ExHome() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.Courses);
  const themes = useSelector((state) => state.Themes);
  useEffect(() => {
    dispatch(getCourses());
    dispatch(getThemes());
  }, [dispatch]);

  return (
    <>
      <ExScrollHandle />
      <ExWhatsapp />
      <ExHeader courses={courses} />
      <ExHero />
      <ExCourse courses={courses} themes={themes}/>
      <ExFooter courses={courses} />
    </>
  );
}

export default ExHome;
