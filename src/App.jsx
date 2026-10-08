import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Service from "./pages/Service/Service";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
      </Routes>

      <Footer />
    </>
  );
}
