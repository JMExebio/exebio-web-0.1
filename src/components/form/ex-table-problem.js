import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import ExWrapper from "../ex-wrapper";
import { ReactComponent as IconClose } from "../../static/img/icon-close.svg";
import { ReactComponent as IconEdit } from "../../static/img/icon-edit.svg";
import { db } from "../basedatos/ex-connection";
import ExProblemForm from "./ex-problem-form";
import getProblem from "../../redux/actions/problem-action";
const TableProblemStyled = styled.div`
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

function ExTableProblem() {
  const [currentId, setCurrentId] = useState("");
  const dispatch = useDispatch();
  const problems = useSelector((state) => state.Problems);
  const onDeleteDate = async (id) => {
    if (window.confirm("Estas seguro de eliminar el Dato")) {
      await db.collection("problems").doc(id).delete();
    }
  };
  useEffect(() => {
    dispatch(getProblem());
  }, [dispatch]); 
  return (
    <TableProblemStyled>
      <ExProblemForm currentId={currentId} setCurrentId={setCurrentId} />
      <ExWrapper>
        <table className="tabla">
          <thead className="tabla-titulo">
            <tr>
              <th>Tema Id</th>
              <th>Problema</th>
              <th>Solución</th>
              <th>Actualizar</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody className="tabla-datos">
            {problems.Problem.map((problem, index) => (
              <tr key={index}>
                <td>{problem.themeID}</td>
                <td className="tabla-img">
                  <img src={problem.imgEURL} alt="" />
                </td>
                <td className="tabla-img">
                  <img src={problem.imgSURL} alt="" />
                </td>
                <td className="tabla-edit">
                  <IconEdit
                    className="edit"
                    onClick={() => setCurrentId(problem.id)}
                  />
                </td>
                <td className="tabla-close">
                  <IconClose
                    className="close"
                    onClick={() => onDeleteDate(problem.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </ExWrapper>
    </TableProblemStyled>
  );
}

export default ExTableProblem;