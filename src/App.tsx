import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@constants/Themes";
import GlobalStyle from "./globalStyles";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "@pages/Main";
import { AboutPage } from "@pages/About";
import { SkillsPage } from "@pages/Skills";
import { WorkPage } from "@pages/Work";

function App() {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={darkTheme}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/work" element={<WorkPage />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
