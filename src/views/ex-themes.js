import React, { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import getCourses from "../redux/actions/course-action";
import getThemes from "../redux/actions/themes-action";
import ExWhatsapp from "../components/whatsapp/ex-whatsapp";
const ExHeader = lazy(() => import("../components/navbar/ex-header"));
const ExHeroThemes = lazy(() =>
  import("../components/themes-course/ex-hero-theme")
);
const ExFooter = lazy(() => import("../components/footer/ex-footer"));
const ExProbTheme = lazy(() =>
  import("../components/themes-course/ex-prob-theme")
);
const ExTeoriaTheme = lazy(() =>
  import("../components/themes-course/ex-teoria-theme")
);

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
      <Suspense fallback={<p>...</p>}>
        <ExWhatsapp />
        <ExHeader courses={courses} />
        <ExHeroThemes themes={themes} />
        <ExTeoriaTheme />
        <ExProbTheme />
        <ExFooter courses={courses} />
      </Suspense>
    </>
  );
}

export default ExThemes;
