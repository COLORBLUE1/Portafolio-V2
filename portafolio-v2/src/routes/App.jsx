import { BrowserRouter, Routes, Route } from "react-router";
import Proyectos from "../pages/Proyectos";
import Skills from "../pages/Skills";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SobreMi from "../pages/SobreMi";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes >
        <Route path="/" element={<SobreMi />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/skills" element={<Skills />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
