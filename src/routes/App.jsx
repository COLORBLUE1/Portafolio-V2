import { BrowserRouter, Routes, Route } from "react-router";
import Proyectos from "../pages/Proyectos";
import Skills from "../pages/Skills";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SobreMi from "../pages/SobreMi";
// language provider
import { LanguageProvider } from "../i18n/LanguageContext";


function App() {
  return (
    <BrowserRouter>
      {/* language context makes current language available to all components */}
      <LanguageProvider>
        <NavBar />
        <Routes >
          <Route path="/" element={<SobreMi />} />
          <Route path="/proyectos" element={<Proyectos />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
        <Footer />
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
