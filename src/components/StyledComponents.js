import { Link } from "react-router-dom";
import styled from "styled-components";
import frontendpath from "../img/frontendpath.avif";
import { BsFillChatFill } from "react-icons/bs";
//Stylings
export const NavDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2em 1em;
  ${(props) => {
    if (props.footer)
      return `
    background: #202020;
    justify-content: center;
    padding: 0;
    `;
  }}
  ${(props) => {
    if (props.innerNav)
      return `
    padding: 0;
    gap: 1em;
    align-items: center;`;
  }}
`;

export const LogoP = styled.p`
  margin: 0;
`;

export const FeaturedArticleSection = styled.section`
  background-image: url(${frontendpath});
  background-size: cover;
  background-position: center;
  min-height: 25em;
  padding: 5em;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  margin-bottom: 1em;
`;

export const FeaturedArticleP = styled.p`
  color: white;
  background-color: black;
  width: fit-content;
  padding: 0.5em;
`;

export const FeaturedArticleH1 = styled.h1`
  color: white;
  background-color: black;
  padding: 0.5em;
`;

export const ArticleDiv = styled.div`
  text-align: left;
  width: fit-content;
`;

export const ArticleListSection = styled.section`
  display: grid;
  grid-template-columns: auto auto auto;
  margin: 0 auto;
  width: 70%;
  grid-gap: 1em;
  @media (max-width: 811px) {
    grid-template-columns: auto;
  }
`;

export const ArticleDivImg = styled.img`
  width: 100%;
  height: 15em;
`;

export const StyledArticle = styled.article`
  width: 70%;
  text-align: left;
  margin: 0 auto;
  @media (max-width: 811px) {
    width: 90%;
  }
`;

export const ArticleImg = styled.img`
  width: 100%;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const LogoIcon = styled(BsFillChatFill)``;

export const FlexDiv = styled.div`
  display: flex;
  gap: 1em;
  width: 80%;
  margin: 0 auto;
  text-align: left;
`;

export const AboutImg = styled.img`
  border-radius: 50%;
  width: 100%;
`;

export const Space = styled.div`
  margin: 3em;
`;
