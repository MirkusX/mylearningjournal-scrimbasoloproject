import { ArticleList } from "../components/ArticleList";
import { SmallArticleList } from "../components/SmallArticleList";
import {
  AboutImg,
  FlexDiv,
  Space,
  StyledArticle,
} from "../components/StyledComponents";
import chandlor from "../img/chandlor.png";
import { AboutMe } from "./ArticlePageFiles.js/ArticlesAndLinks";

export const AboutPage = () => {
  return (
    <section>
      <Space />
      <FlexDiv>
        <AboutImg src={chandlor} />
        <div>
          <h1>{AboutMe.title}</h1>
          <p>{AboutMe.content}</p>
        </div>
      </FlexDiv>
      <StyledArticle>
        <h2>{AboutMe.title2}</h2>
        <p>{AboutMe.content2}</p>
        <h2>{AboutMe.title3}</h2>
        <p>{AboutMe.content3}</p>
      </StyledArticle>
      <ArticleList />
    </section>
  );
};
