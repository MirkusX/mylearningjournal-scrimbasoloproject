import { useParams } from "react-router-dom";
import { ArticleBox } from "../components/ArticleBox";
import { ArticleList } from "../components/ArticleList";
import { SmallArticleList } from "../components/SmallArticleList";
import {
  ArticleImg,
  ArticleListSection,
  Space,
  StyledArticle,
} from "../components/StyledComponents";
import frontendpath from "../img/frontendpath.webp";
import { Articles } from "./ArticlePageFiles.js/ArticlesAndLinks";

export const ArticlePage = () => {
  window.scrollTo({
    top: 0,
  });
  const { link } = useParams();
  return (
    <>
      <Space />
      <StyledArticle>
        <p>{Articles[link].date}</p>
        <h1>{Articles[link].title}</h1>
        <ArticleImg src={Articles[link].imglarge} />
        <h2>{Articles[link].title2}</h2>
        <p>{Articles[link].content}</p>
        <h2>{Articles[link].title3}</h2>
        <p>{Articles[link].content2}</p>
      </StyledArticle>
      <div>
        <h3>More articles</h3>
        <ArticleList />
      </div>
    </>
  );
};
