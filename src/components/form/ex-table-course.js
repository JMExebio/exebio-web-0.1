import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import getCourses from "../../redux/actions/course-action";
import ExWrapper from "../ex-wrapper";
import { ReactComponent as IconClose } from "../../static/img/icon-close.svg";
import { ReactComponent as IconEdit } from "../../static/img/icon-edit.svg";
import { db } from "../basedatos/ex-connection";
import ExCourseForm from "./ex-course-form";
const TableCourseStyled = styled.div`
  padding: 1em 0;
  background: linear-gradient(90deg, #140f34 0%, #30193f 100%);
  .tabla {
    text-align: left;
    border-collapse: collapse;
    width: 100%;
    &-titulo {
      color: white;
      font-weight: 500;
      font-size: 30px;
      line-height: 50px;
      background: #cd08d1;
    }
    &-datos {
      color: #a60cc2;
      font-weight: 400;
      font-size: 24px;
      line-height: 50px;
      background: #e8a1ee;
    }
    &-edit,
    &-close {
      text-align: center;
    }
  }

  th,
  td {
    padding: 15px 20px;
  }
  .edit {
    path {
      fill: #a60cc2;
    }
  }

  .close {
    path {
      fill: #a60cc2;
    }
  }
`;

function ExTableCourse() {
  const [currentId, setCurrentId] = useState("");
  const dispatch = useDispatch();
  const courses = useSelector((state) => state.Courses);
  const onDeleteDate = async (id) => {
    if (window.confirm("Estas seguro de eliminar el Dato")) {
      await db.collection("courses").doc(id).delete();
    }
  };
  useEffect(() => {
    dispatch(getCourses());
  }, [dispatch]);
  return (
    <TableCourseStyled>
        <ExCourseForm currentId={currentId} setCurrentId={setCurrentId} />
      <ExWrapper>
        <table className="tabla">
          <thead className="tabla-titulo">
            <tr>
              <th>Curso</th>
              <th>Color 1</th>
              <th>Color 2</th>
              <th>Color 3</th>
              <th>Actualizar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody className="tabla-datos">
            {courses.Courses.map((course, index) => (
              <tr key={index}>
                <td>{course.title}</td>
                <td>{course.color1}</td>
                <td>{course.color2}</td>
                <td>{course.color3}</td>
                <td className="tabla-edit">
                  <IconEdit
                    className="edit"
                    onClick={() => setCurrentId(course.id)}
                  />
                </td>
                <td
                  className="tabla-close"
                  onClick={() => onDeleteDate(course.id)}
                >
                  <IconClose className="close" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ExWrapper>
    </TableCourseStyled>
  );
}

export default ExTableCourse;
