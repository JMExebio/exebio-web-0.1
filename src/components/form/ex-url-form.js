import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { db } from "../basedatos/ex-connection";
import { useSelector, useDispatch } from "react-redux";
import getThemes from "../../redux/actions/themes-action";
import ExWrapper from "../ex-wrapper";
import ExForm from "./ex-form";
import ExSelect from "./ex-select";
import ExButtonForm from "./ex-button-form";
import { ReactComponent as IconClear } from "../../static/img/icon-clear.svg";
import ExInputTextAdmin from "./ex-input-text";
const URLFormStyled = styled.div`
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

function ExURLForm({ currentId, setCurrentId }) {
  const initialStateValue = {
    title: "",
    themeID: "DEFAULT",
    url: "",
  };
  const [values, setValues] = useState(initialStateValue);
  const themes = useSelector((state) => state.Themes);
  const dispatch = useDispatch();


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const addOrEditUrl = async () => {
    if (currentId === "") {
      await db.collection("urls").doc().set(values);
      console.log("datos agregados a problemas");
    } else {
      await db.collection("urls").doc(currentId).update(values);
      setCurrentId("");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    addOrEditUrl();
    setValues({ ...initialStateValue });
  };

  const getUrlById = async (id) => {
    const doc = await db.collection("urls").doc(id).get();
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
      getUrlById(currentId);
    }
  }, [currentId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <URLFormStyled>
      <ExWrapper>
        <ExForm title={"Presentaciones"} onSubmit={handleSubmit}>
          <ExInputTextAdmin
            className="form-id-themes"
            title="Título"
            name="title"
            onChange={handleInputChange}
            value={values.title}
          />
          <ExSelect
            className="form-select"
            title="Tema"
            name="themeID"
            items={themes.Themes}
            onChange={handleInputChange}
            value={values.themeID}
          />
          <ExInputTextAdmin
            className="form-id-themes"
            title="URL"
            name="url"
            onChange={handleInputChange}
            value={values.url}
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
    </URLFormStyled>
  );
}

export default ExURLForm;
