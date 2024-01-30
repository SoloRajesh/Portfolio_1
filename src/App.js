import { Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./componet/Header";
import Home from "./componet/Home";
import { Outlet } from "react-router-dom";
import About from "./componet/About";
import Resume from "./componet/Resume";
import Contact from "./componet/Contact";

function App() {
  return (
    <div className="main">
      <Header />
      <div className="outlet">
        <Outlet />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
    </div>
  );
}

export default App;
