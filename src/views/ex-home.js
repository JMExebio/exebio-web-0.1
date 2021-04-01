import React, { useEffect, Suspense, lazy } from "react";
import { useDispatch, useSelector } from "react-redux";
import ExScrollHandle from "../components/ex-scroll-handle";
import getCourses from "../redux/actions/course-action";
import getThemes from "../redux/actions/themes-action";
import ExWhatsapp from "../components/whatsapp/ex-whatsapp";
import { Helmet, HelmetProvider } from "react-helmet-async";
const ExHeader = lazy(() => import("../components/navbar/ex-header"));
const ExHero = lazy(() => import("../components/baner/ex-hero"));
const ExCourse = lazy(() => import("../components/courses/ex-course"));
const ExFooter = lazy(() => import("../components/footer/ex-footer"));

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
      <HelmetProvider>
        <Helmet>
          <title>Exebio</title>
        </Helmet>
        <Suspense fallback={<p>...</p>}>
          <ExScrollHandle />
          <ExWhatsapp />
          <ExHeader courses={courses} />
          <ExHero />
          <ExCourse courses={courses} themes={themes} />
          <ExFooter courses={courses} />
        </Suspense>
      </HelmetProvider>
    </>
  );
}

export default ExHome;
