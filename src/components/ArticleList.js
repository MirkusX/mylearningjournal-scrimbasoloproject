import { linksList } from "../pages/ArticlePageFiles.js/ArticlesAndLinks";
import { ArticleBox } from "./ArticleBox";
import {
  ArticleDiv,
  ArticleDivImg,
  ArticleListSection,
  StyledLink,
} from "./StyledComponents";
import { Link } from "react-router-dom";
import { Articles } from "../pages/ArticlePageFiles.js/ArticlesAndLinks";

export const ArticleList = () => {
  return (
    <ArticleListSection>
      {linksList.map((item, index) => {
        return (
          <StyledLink to={`/articles/${item.title}`} key={index}>
            <ArticleDiv>
              <ArticleDivImg src={Articles[item.title].img} />
              <p>{Articles[item.title].date}</p>
              <h1>{item.title}</h1>
              <p>{Articles[item.title].peek}</p>
            </ArticleDiv>
          </StyledLink>
        );
      })}
    </ArticleListSection>
  );
};
