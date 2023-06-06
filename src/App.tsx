import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./Components/Pages/Home";
import { About } from "./Components/Pages/About";
import { Contact } from "./Components/Pages/Contact";
import { Portfolio } from "./Components/Pages/Portfolio";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Portfolio />} path="/portfolio" />
          <Route element={<Contact />} path="/contact" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
