import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import getThemes from "../../redux/actions/themes-action";
import ExWrapper from "../ex-wrapper";
import { ReactComponent as IconClose } from "../../static/img/icon-close.svg";
import { ReactComponent as IconEdit } from "../../static/img/icon-edit.svg";
import { db } from "../basedatos/ex-connection";
import ExThemesForm from "./ex-themes-form";
const TableThemeStyled = styled.div`
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
      font-size: 18px;
      line-height: 40px;
      background: #e8a1ee;
    }
    &-edit,
    &-close {
      text-align: center;
    }
    &-img {
      img {
        background: #140f34;
        width: 36px;
      }
      text-align: center;
    }
  }

  th {
    padding: 15px 20px;
  }
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

function ExTableTheme() {
  const [currentId, setCurrentId] = useState("");
  const dispatch = useDispatch();
  const themes = useSelector((state) => state.Themes);
  const onDeleteDate = async (id) => {
    if (window.confirm("Estas seguro de eliminar el Dato")) {
      await db.collection("themes").doc(id).delete();
    }
  };
  useEffect(() => {
    dispatch(getThemes());
  }, [dispatch]); 
  return (
    <TableThemeStyled>
      <ExThemesForm currentId={currentId} setCurrentId={setCurrentId} />
      <ExWrapper>
        <table className="tabla">
          <thead className="tabla-titulo">
            <tr>
              <th>Tema</th>
              <th>Curso Id</th>
              <th>Img</th>
              <th>Actualizar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody className="tabla-datos">
            {themes.Themes.map((theme, index) => (
              <tr key={index}>
                <td>{theme.title}</td>
                <td>{theme.courseID}</td>
                <td className="tabla-img">
                  <img src={theme.imgCardURL} alt="" />
                </td>
                <td className="tabla-edit">
                  <IconEdit
                    className="edit"
                    onClick={() => setCurrentId(theme.id)}
                  />
                </td>
                <td className="tabla-close">
                  <IconClose
                    className="close"
                    onClick={() => onDeleteDate(theme.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ExWrapper>
    </TableThemeStyled>
  );
}

export default ExTableTheme;
