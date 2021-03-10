import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db, fs } from "../basedatos/ex-connection";
import { useSelector, useDispatch } from "react-redux";
import getThemes from "../../redux/actions/themes-action";
import ExWrapper from "../ex-wrapper";
import ExForm from "./ex-form";
import ExSelect from "./ex-select";
import ExInputFileForm from "./ex-input-file-form";
import ExButtonForm from "./ex-button-form";
import { ReactComponent as IconClear } from "../../static/img/icon-clear.svg";
const ProblemFormStyled = styled.div`
  padding-top: 6em;
  background: linear-gradient(90deg, #140f34 0%, #30193f 100%);
  .form {
    &-select {
      grid-area: title;
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

function ExProblemForm({ currentId, setCurrentId }) {
  const initialStateValue = {
    themeID: "DEFAULT",
    imgEURL: "",
    imgSURL: "",
  };
  const [values, setValues] = useState(initialStateValue);
  const themes = useSelector((state) => state.Themes);
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
        //  let percentage =
        //    (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        //   setUploadValue(percentage);
        //  console.log(percentage);
      },
      (error) => {
        console.log(error.message);
      },
      () => {
        task.snapshot.ref.getDownloadURL().then(function (url) {
          setValues({ ...values, [name]: url });
          // crearImageUrl(file.name, url);
        });
      }
    );
  };
  const addOrEditProblem = async () => {
    if (currentId === "") {
      await db.collection("problems").doc().set(values);
      console.log("datos agregados a problemas");
    } else {
      await db.collection("problems").doc(currentId).update(values);
      setCurrentId("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEditProblem();
    setValues({ ...initialStateValue });
  };

  const getProblemById = async (id) => {
    const doc = await db.collection("problems").doc(id).get();
    setValues({ ...doc.data() });
  };

  const clearForm = () => {
    setValues({ ...initialStateValue });
    setCurrentId("");
  };

  useEffect(() => {
    dispatch(getThemes());
  }, [dispatch]);

  useEffect(() => {
    if (currentId === "") {
      setValues({ ...initialStateValue });
    } else {
      getProblemById(currentId);
    }
  }, [currentId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ProblemFormStyled>
      <ExWrapper>
        <ExForm title={"Problemas"} onSubmit={handleSubmit}>
          <ExSelect
            className="form-select"
            title="Tema"
            name="themeID"
            items={themes.Themes}
            onChange={handleInputChange}
            value={values.themeID}
          />
          <ExInputFileForm
            title="Imagen E"
            name="imgEURL"
            onChange={handleInputFileChange}
            value={values.imgEURL}
          />
          <ExInputFileForm
            title="Imagen S"
            name="imgSURL"
            onChange={handleInputFileChange}
            value={values.imgSURL}
          />
          <div className="form-clear">
            <IconClear
              className="form-clear-icon"
              onClick={() => clearForm()}
            />
          </div>
          <ExButtonForm className="form-btn" currentId={currentId} />
        </ExForm>
      </ExWrapper>
    </ProblemFormStyled>
  );
}

export default ExProblemForm;
