import { ArticleBox } from "./ArticleBox";
import { ArticleListSection } from "./StyledComponents";

export const SmallArticleList = () => {
  return (
    <ArticleListSection>
      <ArticleBox />
      <ArticleBox />
      <ArticleBox />
    </ArticleListSection>
  );
};
