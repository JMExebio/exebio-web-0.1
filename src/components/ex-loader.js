import React from "react";
import styled from "styled-components";

const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: rgba(20, 15, 52, 1);
  .loader {
    position: relative;
    width: 120px;
    height: 120px;
  }
`;
const SpanStyled = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transform: rotate(calc(18deg * ${(props) => props.num}));
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 15px;
    height: 15px;
    background: white;
    border-radius: 50%;
    transform: scale(0);
    animation: animate 2s linear infinite;
    animation-delay: calc(0.1s*${(props) => props.num});
  }
  @keyframes animate {
    0% {
      transform: scale(0);
    }
    10% {
      transform: scale(1.2);
    }
    80%,
    100% {
      transform: scale(0);
    }
  }
`;
const ExLoader = () => {
  return (
    <LoaderStyled>
      <div className="loader">
        <SpanStyled num={"1"}>
        </SpanStyled>
        <SpanStyled num={"2"}></SpanStyled>
        <SpanStyled num={"3"}></SpanStyled>
        <SpanStyled num={"4"}></SpanStyled>
        <SpanStyled num={"5"}></SpanStyled>
        <SpanStyled num={"6"}></SpanStyled>
        <SpanStyled num={"7"}></SpanStyled>
        <SpanStyled num={"8"}></SpanStyled>
        <SpanStyled num={"9"}></SpanStyled>
        <SpanStyled num={"10"}></SpanStyled>
        <SpanStyled num={"11"}></SpanStyled>
        <SpanStyled num={"12"}></SpanStyled>
        <SpanStyled num={"13"}></SpanStyled>
        <SpanStyled num={"14"}></SpanStyled>
        <SpanStyled num={"15"}></SpanStyled>
        <SpanStyled num={"16"}></SpanStyled>
        <SpanStyled num={"17"}></SpanStyled>
        <SpanStyled num={"18"}></SpanStyled>
        <SpanStyled num={"18"}></SpanStyled>
        <SpanStyled num={"20"}></SpanStyled>
      </div>
    </LoaderStyled>
  );
};

export default ExLoader;
