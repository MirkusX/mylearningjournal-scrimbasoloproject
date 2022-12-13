import { linksList } from "../pages/ArticlePageFiles.js/ArticlesAndLinks";
import {
  ArticleDiv,
  ArticleDivImg,
  ArticleListSection,
  StyledLink,
} from "./StyledComponents";
import { Articles } from "../pages/ArticlePageFiles.js/ArticlesAndLinks";

export const ArticleList = () => {
  return (
    <ArticleListSection>
      {/* Component for displaying article links */}
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
