import Index from "./pages/Index";
import Index2 from "./pages/Index2";
import Kursus from "./pages/Kursus";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Galeri from "./pages/Galeri";
import Profile from "./pages/Profile";
import Gabung from "./pages/Gabung";
import Login from "./pages/Login";
import SeduhKopi1 from "./pages/SeduhKopi1";
import SeduhKopi2 from "./pages/SeduhKopi2";
import SeduhKopi3 from "./pages/SeduhKopi3";
import SeduhKopi4 from "./pages/SeduhKopi4";
import SeduhKopi5 from "./pages/SeduhKopi5";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Index2" element={<Index2 />} />
          <Route path="/Kursus" element={<Kursus />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Galeri" element={<Galeri />} />
          <Route path="/SeduhKopi1" element={<SeduhKopi1 />} />
          <Route path="/SeduhKopi2" element={<SeduhKopi2 />} />
          <Route path="/SeduhKopi3" element={<SeduhKopi3 />} />
          <Route path="/SeduhKopi4" element={<SeduhKopi4 />} />
          <Route path="/SeduhKopi5" element={<SeduhKopi5 />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Gabung" element={<Gabung />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </Router>

      {/* <Index />
      <About /> */}
    </div>
  );
}

export default App;