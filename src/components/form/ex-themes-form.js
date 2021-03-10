import React, { useState, useEffect } from "react";
import styled from "styled-components";
import ExInputText from "./ex-input-text";
import ExFormAdmin from "./ex-form";
import ExWrapper from "../ex-wrapper";
import ExButtonForm from "./ex-button-form";
import ExSelect from "./ex-select";
import ExInputFileForm from "./ex-input-file-form";
import { db, fs } from "../basedatos/ex-connection";
import { useSelector, useDispatch } from "react-redux";
import getCourses from "../../redux/actions/course-action";
import { ReactComponent as IconClear } from "../../static/img/icon-clear.svg";

const ThemesFormStyled = styled.div`
  padding-top: 6em;
  background: linear-gradient(90deg, #140f34 0%, #30193f 100%);
  .form {
    &-id-themes {
      grid-area: title;
      .subtitle-form {
        left: 23%;
      }
      .input-form {
        left: 18%;
        width: 70%;
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

function ExThemesForm({ currentId, setCurrentId }) {
  const initialStateValue = {
    title: "",
    courseID: "DEFAULT",
    imgCardURL: "",
  };
  const [values, setValues] = useState(initialStateValue);
  const courses = useSelector((state) => state.Courses);
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const handleInputFileChange = (e) => {
    const file = e.target.files[0];
    const name = e.target.name;

    const storageRef = fs.ref(`web-exebio/${file.name}`);
    const task = storageRef.put(file);
    task.on(
      "state_changed",
      (snapshot) => {
        // let percentage =
        //   (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        // setUploadValue(percentage);
        // console.log(percentage);
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        task.snapshot.ref.getDownloadURL().then(function (url) {
          setValues({ ...values, [name]: url });
        });
      }
    );
  };
  const addOrEditTemas = async () => {
    if (currentId === "") {
      await db.collection("themes").doc().set(values);
      console.log("datos agregados a temas");
    } else {
      await db.collection("themes").doc(currentId).update(values);
      setCurrentId("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEditTemas();
    setValues({ ...initialStateValue });
  };

  const getThemeById = async (id) => {
    const doc = await db.collection("themes").doc(id).get();
    setValues({ ...doc.data() });
  };

  const clearForm = () => {
    setValues({ ...initialStateValue });
    setCurrentId("");
  };
  useEffect(() => {
   dispatch(getCourses());
  }, [dispatch])
  
  useEffect(() => {
    if (currentId === "") {
      setValues({ ...initialStateValue });
    } else {
      getThemeById(currentId);
    }
  }, [currentId]); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <ThemesFormStyled>
      <ExWrapper>
        <ExFormAdmin title={"Temas"} onSubmit={handleSubmit}>
          <ExInputText
            className="form-id-themes"
            title="Título"
            name="title"
            onChange={handleInputChange}
            value={values.title}
          />
          <ExSelect
            title="Curso"
            name="courseID"
            items={courses.Courses}
            onChange={handleInputChange}
            value={values.courseID}
          />
          <ExInputFileForm
            title="Imagen card"
            name="imgCardURL"
            onChange={handleInputFileChange}
            value={values.imgCardURL}
          />
          <div onClick={() => clearForm()} className="form-clear">
            <IconClear className="form-clear-icon" />
          </div>
          <ExButtonForm className="form-btn" currentId={currentId} />
        </ExFormAdmin>
      </ExWrapper>
    </ThemesFormStyled>
  );
}

export default ExThemesForm;
