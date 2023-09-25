import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "@constants/Themes";
import GlobalStyle from "./globalStyles";
import { Routes, Route } from "react-router-dom";
import { MainPage } from "@pages/Main";
import { AboutPage } from "@pages/About";
import { SkillsPage } from "@pages/Skills";
import { WorkPage } from "@pages/Work";
import { Contoh } from "@pages/contoh";

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
          <Route path="/contoh" element={<Contoh />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
