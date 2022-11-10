import cavewomansmash from "../img/cavewomansmash.jpg";
import { ArticleDiv, ArticleDivImg } from "./StyledComponents";

export const ArticleBox = () => {
  return (
    <ArticleDiv>
      <ArticleDivImg src={cavewomansmash} />
      <p>Date</p>
      <h1>Title</h1>
      <p>Peek</p>
    </ArticleDiv>
  );
};
