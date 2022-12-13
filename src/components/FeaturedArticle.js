import { Articles } from "../pages/ArticlePageFiles.js/ArticlesAndLinks";
import {
  FeaturedArticleH1,
  FeaturedArticleP,
  FeaturedArticleSection,
  StyledLink,
} from "./StyledComponents";

export const FeaturedArticle = () => {
  return (
    <StyledLink to="/articles/My journey as a front-end student">
      <FeaturedArticleSection>
        <div>
          <FeaturedArticleP>
            {Articles["My journey as a front-end student"].date}
          </FeaturedArticleP>
          <FeaturedArticleH1>
            {Articles["My journey as a front-end student"].title}
          </FeaturedArticleH1>
          <FeaturedArticleP>
            {Articles["My journey as a front-end student"].peek}
          </FeaturedArticleP>
        </div>
      </FeaturedArticleSection>
    </StyledLink>
  );
};
