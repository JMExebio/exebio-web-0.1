import React from "react";
import styled from "styled-components";
import ExWrapper from "../ex-wrapper";
import { useParams } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
const HeroThemesStyled = styled.section`
  margin: 0;
  padding: 0;
  width: 100%;
  background: #02071a;
  padding-top: 0em;
  padding-bottom: 0em;
  .hero {
    &-grid {
      padding-top: 3em;
      display: flex;
      justify-content: center;
      img {
        width: 100%;
      }
    }
  }
  @media screen and (min-width: 768px) {
    .hero {
      &-grid {
        img {
          width: 60%;
        }
      }
    }
  }
`;
function ExHeroTheme({themes}) {
  const params = useParams();
  return (
    <HelmetProvider>
      <HeroThemesStyled>
        <ExWrapper>
          {themes.Themes.filter((theme) => theme.id === params.id).map(
            (img, index) => (
              <div className="hero-grid" key={index}>
                <Helmet>
                  <title>{img.title}</title>
                </Helmet>
                <img src={img.imgCardURL} alt="" />
              </div>
            )
          )}
        </ExWrapper>
      </HeroThemesStyled>
    </HelmetProvider>
  );
}

export default ExHeroTheme;
