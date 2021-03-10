import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import getCourses from "../../redux/actions/course-action";
const FooterCourseStyled = styled.div`
  width: 100%;
  margin-bottom: 1em;
  .footer {
    &-title {
      color: white;
      font-size: 36px;
      letter-spacing: 0.1em;
      text-align: center;
    }
    &-course {
      color: white;
      ul {
        list-style: none;
        margin: 0;
        padding: 0;
        font-weight: 700;
        z-index: 3;
      }
    }
    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0.5em;
      a {
        position: relative;
        margin: 0 0.5em;
        text-decoration: none;
        font-size: 24px;
        letter-spacing: 0.1em;
        color: white;
      }
      a::after {
        --scale: 0;
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 100%;
        height: 3px;
        border-radius: 2.5px;
        background: white;
        transform: scale(var(--scale));
        transform-origin: var(--x) 50%;
        transition: transform 0.3s cubic-bezier(0.51, 0.092, 0.24, 1);
      }
      a:hover::after {
        --scale: 1;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .footer {
      &-items {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
  }
  @media screen and (min-width: 1080px) {
    .footer {
      &-title {
        margin-top: 0;
      }
    }
  }
`;
function ExFooterCourse() {
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.Courses);

  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);
  return (
    <FooterCourseStyled>
      <h1 className="footer-title">Cursos</h1>
      <div className="footer-course">
        <ul className="footer-items">
          {courses.Courses.map((item,index) => (
            <li className="footer-item" key={index}>
              <Link to={{ pathname: "/", hash: item.id }}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
    </FooterCourseStyled>
  );
}

export default ExFooterCourse;
