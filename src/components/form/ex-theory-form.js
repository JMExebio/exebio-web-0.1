import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db, fs } from "../basedatos/ex-connection";
import { useSelector, useDispatch } from "react-redux";
import getThemes from "../../redux/actions/themes-action";
import ExButtonForm from "./ex-button-form";
import ExWrapper from "../ex-wrapper";
import ExInputTextAdmin from "./ex-input-text";
import ExSelect from "./ex-select";
import ExInputFileForm from "./ex-input-file-form";
import ExForm from "./ex-form";
import { ReactComponent as IconClear } from "../../static/img/icon-clear.svg";

const TheoryFormStyled = styled.div`
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

function ExTheoryForm({ currentId, setCurrentId }) {
  const initialStateValue = {
    title: "",
    themeID: "DEFAULT",
    imgT1URL: "",
    imgT2URL: "",
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

  const addOrEditTeoria = async () => {
    if (currentId === "") {
      await db.collection("theory").doc().set(values);
      console.log("datos agregados a teoria");
    } else {
      await db.collection("theory").doc(currentId).update(values);
      setCurrentId("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEditTeoria();
    setValues({ ...initialStateValue });
  };

  const getTheoryById = async (id) => {
    const doc = await db.collection("theory").doc(id).get();
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
      getTheoryById(currentId);
    }
  }, [currentId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <TheoryFormStyled>
      <ExWrapper>
        <ExForm title={"Teoria"} onSubmit={handleSubmit}>
          <ExInputTextAdmin
            className="form-id-themes"
            title="Título"
            name="title"
            onChange={handleInputChange}
            value={values.title}
          />
          <ExSelect
            title="Tema"
            name="themeID"
            items={themes.Themes}
            onChange={handleInputChange}
            value={values.themeID}
          />
          <ExInputFileForm
            title="Imagen1"
            name="imgT1URL"
            onChange={handleInputFileChange}
            value={values.imgT1URL}
          />
          <ExInputFileForm
            title="Imagen2"
            name="imgT2URL"
            onChange={handleInputFileChange}
            value={values.imgT2URL}
          />
          <div className="form-clear">
            <IconClear
              className="form-clear-icon"
              onClick={() => clearForm()}
            />
          </div>
          <ExButtonForm className="form-btn" />
        </ExForm>
      </ExWrapper>
    </TheoryFormStyled>
  );
}

export default ExTheoryForm;
