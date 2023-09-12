import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import ContactInfo from "./pages/Contact/ContactInfo";
import About from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <h1>Winterworks</h1>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/designs" element={<Products />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contactinfo" element={<ContactInfo />} />
      </Routes>
    </div>
  );
}

export default App;
