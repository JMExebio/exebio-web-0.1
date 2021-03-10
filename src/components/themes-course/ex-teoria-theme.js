import React, { useEffect } from "react";
import styled from "styled-components";
import ExWrapper from "../ex-wrapper";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getTheory from "../../redux/actions/theory-action";
const TeoriaThemeStyled = styled.div`
  display: block;
  width: 100%;
  background: linear-gradient(90deg, #140f34 0%, #30193f 100%);
  padding-bottom: 2em;
  .title-teoria {
    text-align: center;
    font-size: 28px;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: ${({ color1 }) => `#${color1}`};
    margin: 0;
    padding: 0.5em 0;
  }
  .teoria-img {
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2em;
    img {
      width: 100%;
    }
  }

  @media screen and (min-width: 768px) {
    .title-teoria {
      font-size: 36px;
    }
  }
  @media screen and (min-width: 1024px) {
    .title-teoria {
      text-align: center;
      font-size: 48px;
    }
    .teoria-img {
      grid-template-columns: 1fr 1fr;
    }
  }
`;
function ExTeoriaTheme() {
  const dispatch = useDispatch();
  const theory = useSelector((state) => state.Theory);

  const {id, color} = useParams();
  useEffect(() => {
    dispatch(getTheory());
  }, [dispatch]);
  return (
    <TeoriaThemeStyled color1={color}>
      <ExWrapper>
        {theory.Theory.filter((item) => item.themeID === id).map(
          (item, index) => (
            <div key={index}>
              <h2 className="title-teoria">{item.title}</h2>
              <div className="teoria-img">
                <img src={item.imgT1URL} alt="imagem" />
                <img src={item.imgT2URL} alt="imagem" />
              </div>
            </div>
          )
        )}
      </ExWrapper>
    </TeoriaThemeStyled>
  );
}

export default ExTeoriaTheme;
