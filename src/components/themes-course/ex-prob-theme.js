import React, { useEffect } from "react";
import styled from "styled-components";
import ExWrapper from "../ex-wrapper";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import getProblem from "../../redux/actions/problem-action";
const ThemeProbStyled = styled.div`
  background: linear-gradient(90deg, #140f34 0%, #30193f 100%);
  padding-bottom: 2em;
  .title-prob {
    text-align: center;
    font-size: 28px;
    font-weight: 500;
    letter-spacing: 0.1em;
    color: ${({ color1 }) => `#${color1}`};
    margin: 0;
    padding: 0.5em 0;
  }
  .themes {
    &-prob-content {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 2em;
      margin-bottom: 2em;
      img {
        width: 100%;
      }
    }
  }
  .linea {
    background: ${({ color1 }) => `#${color1}`};
    height: 0.5em;
    width: 100%;
    border-radius: 50%;
    margin: 2em 0;
  }
  @media screen and (min-width: 768px) {
    .title-prob {
      font-size: 36px;
    }
    .themes {
      &-prob-content {
        display: grid;
        grid-template-columns: 1fr 1fr;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .title-prob {
      font-size: 48px;
    }
  }
`;
function ExProbTheme() {
  const dispatch = useDispatch();
  const problems = useSelector((state) => state.Problems);
  const { id, color } = useParams();
  useEffect(() => {
    dispatch(getProblem());
  }, [dispatch]);
  return (
    <ThemeProbStyled color1={color}>
      <ExWrapper>
        <h2 className="title-prob">Problemas</h2>
        {problems.Problem.filter((item) => item.themeID === id).map(
          (item, index) => (
            <div key={index}>
              <div className="themes-prob-content">
                <img src={item.imgEURL} alt="" />
                <img src={item.imgSURL} alt="" />
              </div>
              <div className="linea"></div>
            </div>
          )
        )}
      </ExWrapper>
    </ThemeProbStyled>
  );
}

export default ExProbTheme;
