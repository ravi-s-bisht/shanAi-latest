import "./App.css";
import TryDemoPage from "./Pages/TryDemoPage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/NavBar";
import Footer from "./Component/Footer/Footer";
import LandingPage from "./Pages/LandingPage/LandingPage";
import 'aos/dist/aos.css';  // Import AOS styles
import AOS from 'aos';
import { useEffect } from "react";

function App() {
  // AOS.init();
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/try-demo" element={<TryDemoPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
