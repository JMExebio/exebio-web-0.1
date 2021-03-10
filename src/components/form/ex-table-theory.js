import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ExWrapper from "../ex-wrapper";
import { ReactComponent as IconClose } from "../../static/img/icon-close.svg";
import { ReactComponent as IconEdit } from "../../static/img/icon-edit.svg";
import { db } from "../basedatos/ex-connection";
import ExTheoryForm from "./ex-theory-form";
import getTheory from "../../redux/actions/theory-action";
const TableTheoryStyled = styled.div`
  padding: 1em 0;
  background: linear-gradient(90deg, #140f34 0%, #30193f 100%);
  .tabla {
    text-align: left;
    border-collapse: collapse;
    width: 100%;
    &-titulo {
      color: white;
      font-weight: 500;
      font-size: 24px;
      line-height: 40px;
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
        width: 64px;
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

function ExTableTheory() {
  const [currentId, setCurrentId] = useState("");
  const dispatch = useDispatch();
  const theory = useSelector((state) => state.Theory); 
  const onDeleteDate = async (id) => {
    if (window.confirm("Estas seguro de eliminar el Dato")) {
      await db.collection("theory").doc(id).delete();
    }
  };
  useEffect(() => {
    dispatch(getTheory());
  }, [dispatch]);
  return (
    <TableTheoryStyled>
      <ExTheoryForm currentId={currentId} setCurrentId={setCurrentId} />
      <ExWrapper>
        <table className="tabla">
          <thead className="tabla-titulo">
            <tr>
              <th>Titulo</th>
              <th>Tema ID</th>
              <th>img1</th>
              <th>img2</th>
              <th>Actualizar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody className="tabla-datos">
            {theory.Theory.map((theory, index) => (
              <tr key={index}>
                <td>{theory.title}</td>
                <td>{theory.themeID}</td>
                <td className="tabla-img">
                  <img src={theory.imgT1URL} alt="" />
                </td>
                <td className="tabla-img">
                  <img src={theory.imgT2URL} alt="" />
                </td>
                <td className="tabla-edit">
                  <IconEdit
                    className="edit"
                    onClick={() => setCurrentId(theory.id)}
                  />
                </td>
                <td className="tabla-close">
                  <IconClose
                    className="close"
                    onClick={() => onDeleteDate(theory.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ExWrapper>
    </TableTheoryStyled>
  );
}

export default ExTableTheory;
