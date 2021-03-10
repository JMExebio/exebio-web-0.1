import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ExInputText from "./ex-input-text";
import ExFormAdmin from "./ex-form";
import ExWrapper from "../ex-wrapper";
import ExButtonForm from "./ex-button-form";
import { db } from "../basedatos/ex-connection";
import { ReactComponent as IconClear } from "../../static/img/icon-clear.svg";

const CourseFormStyled = styled.div`
  padding-top: 6em;
  background: linear-gradient(90deg, #140f34 0%, #30193f 100%);
  .form {
    &-id-course {
      grid-area: title;
      .subtitle-form {
        left: 23%;
      }
      .input-form {
        left: 18%;
        width: 70%;
      }
    }
    &-color {
      .subtitle-form {
        left: 38%;
      }
      .input-form {
        left: 35%;
        width: 60%;
      }
    }
    &-btn {
      grid-area: button;
    }
    &-clear {
      grid-area: limpia;
      margin-left: 80%;
      padding: 10px;
      &-icon {
        path {
          fill: #e8a1ee;
        }
      }
    }
  }
`;

function ExCourseForm({ currentId, setCurrentId }) {
  const initialStateValue = {
    title: "",
    color1: "",
    color2: "",
    color3: "",
  };
  const [values, setValues] = useState(initialStateValue);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };
  const addOrEditCursos = async () => {
    if (currentId === "") {
      await db.collection("courses").doc().set(values);
      console.log("datos agregados a curso");
    } else {
      await db.collection("courses").doc(currentId).update(values);
      setCurrentId("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEditCursos();
    setValues({ ...initialStateValue });
  };

  const getCourseById = async (id) => {
    const doc = await db.collection("courses").doc(id).get();
    setValues({ ...doc.data() });
  };

  const clearForm = () => {
    setValues({ ...initialStateValue });
    setCurrentId("");
  };
  useEffect(() => {
    if (currentId === "") {
      setValues({ ...initialStateValue });
    } else {
      getCourseById(currentId);
    }
  }, [currentId]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <CourseFormStyled>
      <ExWrapper>
        <ExFormAdmin title={"Cursos"} onSubmit={handleSubmit}>
          <ExInputText
            className="form-id-course"
            title="Título"
            name="title"
            onChange={handleInputChange}
            value={values.title}
          />
          <ExInputText
            className="form-color"
            title="Color 1"
            name="color1"
            onChange={handleInputChange}
            value={values.color1}
          />
          <ExInputText
            className="form-color"
            title="Color 2"
            name="color2"
            onChange={handleInputChange}
            value={values.color2}
          />
          <ExInputText
            className="form-color"
            title="Color 3"
            name="color3"
            onChange={handleInputChange}
            value={values.color3}
          />
          <div className="form-clear">
            <IconClear
              className="form-clear-icon"
              onClick={() => clearForm()}
            />
          </div>
          <ExButtonForm className="form-btn" currentId={currentId} />
        </ExFormAdmin>
      </ExWrapper>
    </CourseFormStyled>
  );
}

export default ExCourseForm;
