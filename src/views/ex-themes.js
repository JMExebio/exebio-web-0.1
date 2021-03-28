import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExHeader from "../components/navbar/ex-header";
import ExHeroThemes from "../components/themes-course/ex-hero-theme";
import ExFooter from "../components/footer/ex-footer";
import ExProbTheme from "../components/themes-course/ex-prob-theme";
import ExTeoriaTheme from "../components/themes-course/ex-teoria-theme";
import getCourses from "../redux/actions/course-action";
import getThemes from "../redux/actions/themes-action";
import ExWhatsapp from "../components/whatsapp/ex-whatsapp";

function ExThemes() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.Courses);
  const themes = useSelector((state) => state.Themes);
  useEffect(() => {
    dispatch(getCourses());
    dispatch(getThemes());
  }, [dispatch]);

  return (
    <>
      <ExWhatsapp />
      <ExHeader courses={courses} />
      <ExHeroThemes themes={themes} />
      <ExTeoriaTheme />
      <ExProbTheme />
      <ExFooter courses={courses}/>
    </>
  );
}

export default ExThemes;
