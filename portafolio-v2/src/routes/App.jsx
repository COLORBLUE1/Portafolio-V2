import { BrowserRouter, Routes, Route } from "react-router";
import VistaMain from "../views/VistaMain";


function App() {
  return (
    <BrowserRouter>
      <Routes >
        <Route path="/" element={<VistaMain />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
