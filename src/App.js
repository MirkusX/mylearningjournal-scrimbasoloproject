import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ArticleList } from "./components/ArticleList";
import { FeaturedArticle } from "./components/FeaturedArticle";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { AboutPage } from "./pages/AboutPage";
import { ArticlePage } from "./pages/ArticlePage";
import { Frontpage } from "./pages/Frontpage";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="*" element={<Frontpage />} />
        <Route path="/articles/:link" element={<ArticlePage />} />
        <Route path="/aboutme" element={<AboutPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
